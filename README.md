# 新人快速理解 AI：从概念到上手的 4 周学习框架

这是一套面向“会一点 AI，但不系统”的新人的训练手册。目标不是把学习者变成研究员，而是让学习者在 4 周内形成一条稳定的学习闭环：知道 AI 是什么，知道怎么和 AI 协作，能用 AI 帮自己理解知识和改小工具，并能通过题库、评分和复盘持续迭代。

课程总目标：

1. 说清楚 AI 是什么，不是什么。
2. 会用 AI 辅助学习，而不是只会闲聊。
3. 会用 AI 做基础 coding 协作，能改小工具。
4. 会搭自己的学习闭环：资料 -> 理解 -> 练习 -> 测试 -> 复盘。
5. 对网络通信和网络安全基础建立初步理解，但安全内容只作为合规专题示例。

## 课程目录

- [课程总览](docs/course-overview.md)
- [4 周学习路径](docs/learning-path.md)
- [考核与回炉机制](docs/assessment-policy.md)
- 模块文档
  - [模块 1：AI 基础](docs/modules/module-1-ai-basics.md)
  - [模块 2：提示词、上下文与协作](docs/modules/module-2-prompt-context-skill.md)
  - [模块 3：工具版图](docs/modules/module-3-tools-landscape.md)
  - [模块 4：AI Coding 基础](docs/modules/module-4-ai-coding-basics.md)
  - [模块 5：搭建学习系统](docs/modules/module-5-build-learning-system.md)
  - [模块 6：网络通信基础](docs/modules/module-6-networking-basics.md)
  - [模块 7：网络安全基础](docs/modules/module-7-security-foundations.md)
  - [模块 8：常见误区与边界](docs/modules/module-8-misconceptions-and-boundaries.md)
- 周计划
  - [第 1 周](docs/weeks/week-1.md)
  - [第 2 周](docs/weeks/week-2.md)
  - [第 3 周](docs/weeks/week-3.md)
  - [第 4 周](docs/weeks/week-4.md)
- 模板与 Skill 示例
  - `templates/`
  - `skills/`
- 题库
  - `quizzes/`
- 脚本与测试
  - `scripts/`
  - `tests/`
- 示例数据
  - `examples/`

## 如何学习

建议按下面顺序执行：

1. 先读 [课程总览](docs/course-overview.md)，知道 4 周分别学什么。
2. 再看 [学习路径](docs/learning-path.md)，明确每天 45 分钟怎么安排。
3. 每周按对应周文档推进，并同步阅读相关模块文档。
4. 做每周题库和期末题库，低于 80 分时按 [考核规则](docs/assessment-policy.md) 回炉。
5. 把 `templates/` 中的提示词和 `skills/` 中的流程模板复制出来，真正用于自己的学习任务。

## 如何运行验证

本仓库优先使用 Python 标准库，不依赖第三方包。

```bash
python3 scripts/validate_quizzes.py
python3 scripts/score_submission.py --quiz quizzes/final-exam.json --submission examples/sample_submission.json --output examples/sample_score.json
python3 scripts/generate_progress_report.py --score examples/sample_score.json --output examples/sample_progress_report.md
python3 -m unittest discover -s tests -v
```

如果本地安装了 `make`，也可以使用：

```bash
make validate
make sample-score
make sample-report
make test
```

## 本地课程中心 (Course Hub)

项目提供了一个交互式的本地 Web 界面，整合了仓库中的文档、模板和题库。你可以通过它进行沉浸式阅读、在线做题并生成学习报告。

### 启动方式

```bash
# 方式 1：使用内置脚本（推荐）
python3 scripts/serve_course.py --port 8000 --open

# 方式 2：使用标准 Python 静态服务器
python3 -m http.server 8000
# 然后在浏览器访问 http://localhost:8000/web/
```

### 核心功能与特性

-   **全平台响应式适配**：支持 PC 宽屏、平板和手机浏览。在手机上提供侧边抽屉式导航，在 PC 上支持**侧边栏一键收起/展开**，最大化阅读空间。
-   **URL 状态持久化**：采用 Hash 路由机制（如 `#reader?path=...`），刷新页面或分享链接时能保持当前阅读的文档或正在做的题库。
-   **沉浸式阅读体验**：
    -   一键切换主文档、模块、周计划、模板和 Skill 示例。
    -   优化的 Markdown 渲染，支持表格、代码块自动溢出处理。
    -   自动记忆侧边栏折叠状态。
-   **交互式在线做题**：
    -   选择任意周测或期末题库在线作答。
    -   **客观题自动批改**：提交后立即显示正误和解析。
    -   **主观题自评系统**：对照参考答案进行自评，实时计算总分。
    -   **导出与报告**：支持导出答卷 JSON 或直接生成 Markdown 格式的进阶报告。

## 你会得到什么

- 一套可直接执行的 4 周学习计划。
- 一组可复用的学习提示词模板。
- 一套围绕理解、练习、测试、复盘的题库和脚本。
- 一套安全边界明确的技术专题示例。

## 安全边界

本课程中的网络安全内容只用于理解基础概念、合规边界和防守视角，不包含未授权扫描、漏洞利用、武器化改造、横向移动、口令爆破或其他攻击性内容。
