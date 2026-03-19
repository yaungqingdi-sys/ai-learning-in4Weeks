# 模块 7：网络安全基础

## 学习目标

- 建立网络安全基础概念和合规边界意识。
- 从防守视角理解资产、漏洞、补丁、日志、告警、配置和授权。
- 知道为什么未经授权的探测和利用不能做。

## 核心概念

- 资产：需要被保护的系统、服务、账号、数据和设备。
- 漏洞：系统中的缺陷，可能被利用造成风险。
- 补丁：修复漏洞或缺陷的更新。
- 日志：系统运行记录，用来排查和审计。
- 告警：系统发现异常后发出的提醒。
- 最小权限：只给完成任务所需的最低权限。
- 授权：得到明确许可后才能对目标执行相关操作。

## 用大白话解释

把安全看成“把门、记账、修洞、看报警”的组合更合适。

- 资产清单像你家里有哪些门窗和贵重物品。
- 漏洞像窗户没锁严。
- 补丁像把锁修好。
- 日志像监控和出入记录。
- 告警像门磁响了。
- 授权像你不是房主，就不能自己去别人家“测试门锁”。

这门课只讲这些基础概念、合规边界和防守思路，不做未授权扫描、漏洞利用、武器化脚本或其他攻击性操作。

## 常见误区

- 误区 1：会几个术语就等于懂安全。
- 误区 2：只要目的是学习，就可以去测试别人的系统。
- 误区 3：安全就是装一个软件。
- 误区 4：日志和告警只是运维同学的事。

## 最小练习

围绕一个“公司内部知识库系统”写出最小安全检查清单，只允许包含：

- 资产视角
- 权限视角
- 日志视角
- 补丁视角
- 配置视角

不得包含任何未授权探测或利用动作。

## 推荐追问

- “为什么授权意识是安全学习的第一课，而不是最后一课？”
- “对新人来说，资产、日志、补丁、配置四个点里，哪个最容易先建立直觉？”
- “怎样判断一个安全学习请求已经越界？”

## 小结

安全基础的关键不是“能不能打”，而是“能不能守住边界并理解风险”。没有授权意识，技术能力越强，风险越大。

## 参考阅读

- OWASP Authorization Cheat Sheet：https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html
- OWASP Logging Cheat Sheet：https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html
- OpenAI Safety Best Practices：https://developers.openai.com/api/docs/guides/safety-best-practices
- Claude Code Security：https://docs.anthropic.com/s/claude-code-security
- 课程内防守视角案例：
  - `./module-8-misconceptions-and-boundaries.md`
  - `../../docs/assessment-policy.md`
