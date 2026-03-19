# 模块 6：网络通信基础

## 学习目标

- 建立对网络通信基础概念的直觉。
- 知道请求、响应、协议、DNS、IP、端口、HTTP 分别是什么。
- 能用 AI 辅助理解一个基础网络请求的过程。

## 核心概念

- 网络通信：设备之间传输数据的过程。
- 协议：通信规则，像“说话要遵守的格式”。
- IP：设备在网络中的地址。
- 端口：设备上某个服务的入口编号。
- DNS：把域名翻译成 IP 的系统。
- HTTP：浏览器和网站常见的应用层协议。
- 请求 / 响应：一问一答的通信模型。

## 用大白话解释

把网络想成快递系统会更容易懂：

- 域名像收件人名字
- DNS 像通讯录，帮你找到地址
- IP 像具体门牌号
- 端口像楼里的某个房间号
- 协议像寄件规则
- 请求像你发出的快递单
- 响应像对方回寄的结果

学这一模块不是为了做复杂网络实验，而是为了以后学 API、看日志、理解系统行为时不发懵。

## 常见误区

- 误区 1：域名就是服务器本身。
- 误区 2：端口只和黑客有关。
- 误区 3：HTTP 就等于互联网全部。
- 误区 4：看得懂浏览器页面，就等于理解了请求过程。

## 最小练习

用自己的话解释一次访问网页的最简过程，至少包含：

- 域名
- DNS
- IP
- HTTP 请求
- HTTP 响应

## 推荐追问

- “为什么说协议像交通规则，而不是像一条电线？”
- “浏览器地址栏输入域名之后，最少会发生哪几步？”
- “端口在普通开发工作里最常见的作用是什么？”

## 小结

网络通信基础是很多技术主题的底层地图。地图不需要一次学很深，但必须先知道路标，否则后面容易把很多问题混在一起。

## 参考阅读

- MDN HTTP Overview：https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview
- MDN DNS Glossary：https://developer.mozilla.org/en-US/docs/Glossary/DNS
- MDN IP Address Glossary：https://developer.mozilla.org/en-US/docs/Glossary/IP_Address
- GitHub Docs 中“Connecting to GitHub”可作为“本地到远端”协作的最小案例：https://docs.github.com/en/get-started/using-github/connecting-to-github
- 协议分层和基础地图建议：
  - 先看本模块正文和 `../../docs/weeks/week-4.md`
  - 再回到 MDN 的 HTTP、DNS、IP 词条，把“域名 -> DNS -> IP -> 请求/响应”这条路径讲顺
