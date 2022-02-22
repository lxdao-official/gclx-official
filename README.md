# 欢迎来到国产良心 NFT 代码仓库

并非最佳实践，如果你有更好的建议或者代码优化，请提交 Issue 或者 PR。

## 跑起来项目

先将 `.env.sample` 复制改名为 `.env` 然后将里面内容进行修改。之后运行下面命令：

```
git clone https://github.com/brucexu-eth/gclx-official.git
cd gclxnft
npm install
npm run dev
```

然后打开 <http://localhost:3000> 就可以看到网站了。

## 部署和基础服务

- 域名注册推荐 [Porkbun](https://porkbun.com/) - 便宜然后支持加密货币支付。
- 域名解析推荐 [Cloudflare](https://cloudflare.com/) - 免费解析，免费帮你扛 DDoS，良心服务。不过配合 Vercel 的时候，可能会有点问题需要参照 [Vercel 官方文档](https://vercel.com/support/articles/using-cloudflare-with-vercel) 配置一下。
- 前端部署服务推荐 [Vercel](https://vercel.com/) - 前期免费 100GB 流量，付费版 20 USD 1T 流量，自带 CDN 全球都很快。支持 Next.js 和 React 自动集成部署，推送 Git 就好了。支持 FaaS，可以编写简单的生成 Mint Token 的逻辑，只要掏钱应该不怕服务挂掉，全球 CDN 速度很快。

如果实在想省钱或者抵御 DDoS 攻击，也可以运行 `npm run export` 导出纯静态文件，直接放在 AWS S3、阿里云 OSS 等静态资源存储，前面再挂上 Cloudflare 等，应该是挂不了的。

## 技术和组件

- [Next.js](https://nextjs.org/) + [React.js](https://reactjs.org/) - 看个人技术栈吧，目前 Web3 用这一套的比较多。
- [ethers.js](https://github.com/ethers-io/ethers.js/) - 我选择用这个，因为它的开源协议是 MIT 的。[Web3.js](https://github.com/ChainSafe/web3.js/blob/1.x/LICENSE) 使用的 LGPL 协议，对于商业项目有一定风险。
- TypeScript 也可以用，我没用，就是一个静态的小网站，没必要。
- [web3modal](https://github.com/Web3Modal/web3modal) - 比较流行和广泛使用的 Web3 链接钱包 React 组件，MIT 协议。
- 此外组件库我使用了 [MUI](https://mui.com/) 因为比较好定制主题和配色，组件功能比较齐全。相比 [Antd](https://ant.design/docs/react/introduce) 来说，跟 Next.js 配合更好。Antd 的 less 是个硬伤。
- 样式工具我个人偏好 [styled-components](https://styled-components.com/)。
- 国际化首推 [LinguiJS](https://lingui.js.org/)，跟 React.js、Next.js 等配合的都比较好。
- 视差滚动特效首推 [react-scroll-parallax](https://jscottsmith.github.io/react-scroll-parallax-examples/examples/parallax-example/)，都是 MIT 协议。

## TODO

本项目仍然有一些地方可以优化，但是没有做，有时间有需求有捐赠再说吧：

- [ ] ARIA 用户可访问性优化
- [ ] I18N 国际化和语言切换功能
- [ ] 视差滚动等特效 Demo

## 关于作者 Bruce Xu

多年经验程序员 / Web3 要饭人，欢迎关注推特：<https://twitter.com/brucexu_eth>。

![](/public/icons/yaofan.jpg)

如果你在这个项目收获了很多，比如拿去做外包赚了不少钱，求求你行行好，捐赠一点 ETH 给我吧。你要是富豪，喜欢我的作品，也可以捐赠。捐赠地址：brucexu.eth，说不定未来突然发现多了什么空投呢。
