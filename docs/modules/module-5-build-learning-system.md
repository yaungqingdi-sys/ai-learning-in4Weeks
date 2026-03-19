# 模块 5：搭建学习系统

## 学习目标

- 学会用 AI 生成学习计划、拆知识点、出题、评分和复盘。
- 理解 skill 和 prompt 的区别。
- 能把一个重复学习流程固化成模板。

## 核心概念

- 学习闭环：资料 -> 理解 -> 练习 -> 测试 -> 复盘。
- prompt：一次性指令，适合当前任务。
- skill：带规则和稳定输出结构的可复用流程。
- rubric：评分标准，告诉 AI 或老师“怎么判好坏”。

## 用大白话解释

如果 prompt 像一次口头交代，skill 就像一张固定 SOP，也就是标准操作流程。前者适合临时任务，后者适合重复动作。

例如你每次学新主题都要做这几件事：

- 先拆知识点
- 再生成 10 题
- 然后自测
- 最后复盘错题

这时就不该每次重新想怎么说，而应该把它固定成一份 skill 或模板。

## 常见误区

- 误区 1：学习计划越满越好。
- 误区 2：AI 出题就一定能代表自己会了。
- 误区 3：只积累提示词，不积累流程。
- 误区 4：复盘就是把错题答案抄一遍。

## 最小练习

围绕“网络通信基础”做一个最小学习闭环：

- 生成 3 天学习计划
- 生成 5 道题
- 写一个自评分标准
- 写一段复盘模板

## 推荐追问

- “这个学习主题最适合按什么粒度拆知识点？”
- “如何避免 AI 一次生成太多，结果自己根本吃不下？”
- “怎样设计一个 skill，让它每次都提醒我做验证和复盘？”

## 小结

真正能长期复用的，不是某句神提示词，而是一条被你验证过的流程。流程一旦稳定，后面只是持续迭代细节。

## 参考阅读

- 学习流程模板案例：
  - `../../templates/study-plan-prompt.md`
  - `../../templates/quiz-generation-prompt.md`
  - `../../templates/review-and-remediation-prompt.md`
  - `../../skills/study-planner.md`
  - `../../skills/quiz-builder.md`
- rubric 设计示例：
  - `../../examples/sample_manual_scores.json`
  - `../../scripts/score_submission.py`
  - OpenAI Cookbook 官方仓库：https://github.com/openai/openai-cookbook
