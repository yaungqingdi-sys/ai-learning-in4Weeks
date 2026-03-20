#!/usr/bin/env python3
"""Generate a markdown progress report from a score JSON file."""

from __future__ import annotations

import argparse
import json
from pathlib import Path
from typing import Any


TAG_SUGGESTIONS = {
    "ai-basics": "回看模块 1，重新用自己的话解释 AI、大模型和工具分类。",
    "search": "把“需要最新来源”的任务单独拿出来，练习先查来源再问答。",
    "agent": "对比 Chat 和 Agent 的职责，避免把所有复杂任务都直接上 Agent。",
    "prompt": "重写 2 个你常用的提示词，补齐目标、背景、约束和输出格式。",
    "context": "做题或提问前，先列题目条件和缺失背景，避免在上下文不足时作答。",
    "meta-prompt": "给自己写一个“先提问再回答”的元提示词，并实际用 2 次。",
    "collaboration": "把下一次任务拆成人负责、AI 负责、工具负责三列再开工。",
    "coding": "用一个小脚本练习“理解 -> 改动 -> 验证 -> 复查”的最小闭环。",
    "verification": "每次用 AI 前先写一个验证动作，至少保留输入输出检查。",
    "git": "补一轮 Git 和 diff 基础，重点理解“看改动范围”而不是只会提交。",
    "terminal": "复习最小命令集，重点是路径、文件和执行流程。",
    "workflow-template": "把重复学习动作整理成固定模板，至少明确输入、步骤、输出和复盘要求。",
    "learning-workflow": "把资料、练习、测试、复盘四步固定成每日流程，不只做输入。",
    "vibe-coding": "回看模块 7，重点练习先对齐上下文、再执行、再验证的节奏。",
    "boundaries": "回看模块 6，把高风险、不可逆和责任不清的任务单独列为禁区。",
    "review": "每次练习后写 4 句复盘，不要只对答案不看误判路径。",
    "remediation": "为错题增加 24 小时内补练动作，形成回炉闭环。",
}


def load_json(path: Path) -> Any:
    with path.open("r", encoding="utf-8") as handle:
        return json.load(handle)


def _format_threshold_status(score_data: dict[str, Any]) -> str:
    status = score_data["threshold_status"]
    if status == "pass":
        return "是"
    if status == "fail":
        return "否"
    return "待人工评分"


def generate_report_markdown(score_data: dict[str, Any]) -> str:
    weak_tags = score_data.get("weak_tags", [])
    top_tags = weak_tags[:5]
    tag_lines = []
    advice_lines = []

    for item in top_tags:
        tag = item["tag"]
        count = item["count"]
        tag_lines.append(f"- `{tag}`：出现 {count} 次")
        advice_lines.append(f"- `{tag}`：{TAG_SUGGESTIONS.get(tag, '围绕该标签回看对应模块，并补 3 题相似题。')}")

    if not tag_lines:
        tag_lines.append("- 暂无明显薄弱标签")
    if not advice_lines:
        advice_lines.append("- 继续保持当前节奏，并优先复核主观题质量。")

    pending_note = ""
    if score_data.get("pending_manual_count", 0) > 0:
        pending_note = (
            f"\n## 主观题复核提醒\n\n"
            f"- 仍有 {score_data['pending_manual_count']} 道主观题待人工评分。\n"
            f"- 在人工评分前，达标状态只能视为暂定结果。\n"
        )

    return f"""# 学习进度报告

## 基本信息

- 学员：{score_data.get('student_name', '未知学员')}
- 测验：{score_data['title']}

## 成绩概览

- 总分：{score_data['final_score']} / {score_data['total_possible_score']}
- 自动评分得分：{score_data['auto_earned_score']} / {score_data['auto_possible_score']}
- 主观题得分：{score_data['manual_earned_score']} / {score_data['manual_possible_score']}
- 当前得分率：{score_data['percent']}%
- 达标线：{score_data['passing_percent']}%
- 是否达到 80 分：{_format_threshold_status(score_data)}

## 薄弱点

{chr(10).join(tag_lines)}

## 补练建议

{chr(10).join(advice_lines)}

## 下一步动作

- 重做错题最多的 2 个标签各 3 题。
- 用 `templates/review-and-remediation-prompt.md` 做一次错题回炉。
- 把本次最常见错误写入你的个人检查清单。
{pending_note}
""".rstrip() + "\n"


def main() -> int:
    parser = argparse.ArgumentParser(description="Generate a markdown learning report.")
    parser.add_argument("--score", required=True, help="Path to score JSON file")
    parser.add_argument("--output", help="Path to output markdown report")
    args = parser.parse_args()

    score_data = load_json(Path(args.score))
    markdown = generate_report_markdown(score_data)

    if args.output:
        output_path = Path(args.output)
        output_path.parent.mkdir(parents=True, exist_ok=True)
        output_path.write_text(markdown, encoding="utf-8")
        print(f"Progress report written to {output_path}")
    else:
        print(markdown)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
