import React, { useState } from "react";
import styled from "styled-components";
import Container from "./Container";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Head = styled.div`
  padding: 30px 0;
  position: relative;
`;

const Content = styled.div`
  width: 94%;
  max-width: 800px;
  margin: 0 auto 5% auto;
  p {
    font-size: 20px;
  }
  strong {
    color: red;
  }
`;

function Summary() {
  const [open, setOpen] = useState(false);

  return (
    <Container
      style={{
        background: "#fff",
        padding: "60px 0",
      }}
      id="summary"
    >
      <Typography style={{ textAlign: "center" }}>
        最后，{" "}
        <span>
          <span
            style={{
              borderBottom: "2px dashed #5383b2",
              color: "#5383b2",
              cursor: "pointer",
              fontSize: 100,
            }}
            onClick={() => {
              setOpen(true);
            }}
          >
            真心
          </span>
          <span>（点击真心有彩蛋啊！！）</span>
        </span>
        希望这个国产良心 NFT 项目，是未来国产项目的地板水平。
      </Typography>
      <Dialog fullScreen open={open} TransitionComponent={Transition}>
        <Head>
          <Typography
            variant="h3"
            style={{ textAlign: "center", fontWeight: "bold" }}
          >
            好吧，说点认真的
          </Typography>
          <IconButton
            onClick={() => {
              setOpen(false);
            }}
            style={{
              position: "fixed",
              top: "30px",
              right: "30px",
            }}
          >
            <CloseIcon style={{ fontSize: 40 }} />
          </IconButton>
        </Head>
        <Content>
          <Typography style={{ marginBottom: 20 }}>
            最近的国产项目出来的各种新闻可是真不少，NFT 项目也大部分下跌，还有
            OpenDAO、721 贪污、诈骗各种吃瓜等等。不过
            <strong>让我直接破防的还是阿狸项目</strong>，也是此国产良心 NFT
            项目产生的直接导火索。
          </Typography>
          <Typography style={{ marginBottom: 20 }}>
            首先声明，对于本项目，<strong>我们并没有恶意</strong>
            ，如果您觉得网站内容对您有冒犯，请随时联系 Bruce
            修改。此外，页面上提到了 NextDAO，只因我在 NextDAO
            的群里比较活跃，收获了 DAO 友的一些建议（包括但不限于：{" "}
            <a
              href="https://twitter.com/Penny777_eth"
              target="_blank"
              rel="noreferrer"
            >
              Penny777.eth
            </a>
            、
            <a
              href="https://twitter.com/0xWil_eth"
              target="_blank"
              rel="noreferrer"
            >
              0xWil
            </a>
            、
            <a
              href="https://twitter.com/0xCryptoSea"
              target="_blank"
              rel="noreferrer"
            >
              0xSea.eth
            </a>{" "}
            等等），合约部分也收到了 NextDAO 核心成员{" "}
            <a
              href="https://twitter.com/shep_eth"
              target="_blank"
              rel="noreferrer"
            >
              shep.eth
            </a>{" "}
            的帮助。但是并不代表 NextDAO 的观点和立场，
            <strong>仅作为个人行为</strong>。
          </Typography>
          <Typography style={{ marginBottom: 20 }}>
            作为阿狸的粉丝，我对这个项目也是寄予厚望，但是项目方的种种操作直接让我破防了，过程不表，有兴趣的可以自己查查，真是活久见。我特别不能理解的是，这么大的
            IP
            价格又贵，卖一把上千万的项目，为什么就不能请到专业一点的团队，尤其是技术团队。还是说，做这样一个
            NFT 项目用到的技术真的非常高深，很难做好？
          </Typography>
          <Typography style={{ marginBottom: 20 }}>
            正好群里 Muxin 最近刚开始学习写合约，那不如我们直接成立一个 NFT
            项目，尽量参照学习国外比较好的项目，实际看看究竟需要多少时间，会遇到什么问题。
          </Typography>
          <Typography style={{ marginBottom: 20 }}>
            我们大概在 2022 年 2 月 16
            日立项，从零开始，只用下班时间和周末开发。第一次做 NFT
            项目，如果遇到什么问题请多多包涵，遇到的问题我们也将认真总结在之后分享出来。
          </Typography>
          <Typography style={{ marginBottom: 20 }}>
            当我们完成整个项目之后，也
            <strong>
              <del>
                将会完全开源整个项目的网站源代码、部署方式文档、合约项目代码以及图片素材等。
              </del>
            </strong>
            （
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/gclxnft/status/1500805763404496896"
            >
              2022.03.08 已完成
            </a>
            ） 并且逐步编写开发经验介绍文章等，希望可以对同行有所帮助。
            <strong>
              所有内容将以 MIT 的开源协议开源，并不限制任何使用用途。
            </strong>
            换句话说，您可以任意使用本项目的代码和素材进行学习、测试以及商业二次开发（赚了大钱打赏一下啊大哥
            brucexu.eth）。
          </Typography>
          <Typography style={{ marginBottom: 20 }}>
            开源项目链接：
            <br />- 网站代码：
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/GuoChanLiangXin/gclx-official"
            >
              https://github.com/GuoChanLiangXin/gclx-official
            </a>
            <br />- 合约代码：
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/GuoChanLiangXin/gclx-contracts"
            >
              https://github.com/GuoChanLiangXin/gclx-contracts
            </a>
            <br />- 图片素材：
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/GuoChanLiangXin/gclx-art-engine"
            >
              https://github.com/GuoChanLiangXin/gclx-art-engine
            </a>
          </Typography>
          <Typography style={{ marginBottom: 20 }}>
            我们希望【国产良心】NFT
            项目的技术和体验变成未来国产项目的地板。最差最差，您可以直接 copy
            改改文案就可以上线了，求求您别用 ThinkPHP
            了！我们也完全理解项目方可能很难摸清楚技术外包的水平，所以您在找项目技术外包的时候，也可以将此源代码作为最差最差的水平去衡量对方的水平。
          </Typography>
          <Typography style={{ marginBottom: 20 }}>
            如果您实在是找不到靠谱技术外包，可以官方推特{" "}
            <a
              href="https://twitter.com/gclxnft"
              target="_blank"
              rel="noreferrer"
            >
              @gclxnft
            </a>{" "}
            或者 NextDAO，我们的成员有不少技术还不错的靠谱小伙伴。冷兔 XRC
            项目的智能合约也是 NextDAO 主导做的。
          </Typography>
          <Typography
            variant="h4"
            style={{
              textAlign: "center",
              fontWeight: "bold",
              marginTop: "30px",
              marginBottom: "30px",
            }}
          >
            真正的发展路线
          </Typography>
          <Typography style={{ marginBottom: 20 }}>
            1. 如果真有人买的话，收益还是会打到个人账号中的，补贴下合约部署费
            ：）然后肯定不会做元宇宙项目或者链游。虽然 Muxin
            不是什么知名艺术家，但是我还是很喜欢她的这个作品，所以我自己可能会从义乌定点周边，自己用或者送朋友了。
          </Typography>
          <Typography style={{ marginBottom: 20 }}>
            2. 持有者将有权限<strong>进入 NextDAO 的国产良心 NFT 频道</strong>
            。我们其实也不知道谁会买，会进来这个频道，至于频道里面会聊什么以及后续的发展，顺其自然吧。项目组将不会管理或者干涉，所有后续大家自己讨论投票吧。
          </Typography>
          <Typography style={{ marginBottom: 20 }}>
            3. 官方推特{" "}
            <a
              href="https://twitter.com/gclxnft"
              target="_blank"
              rel="noreferrer"
            >
              @gclxnft
            </a>{" "}
            将作为<strong>客观信息放大器</strong>
            ，转发或者发布有证据的客观信息以供关注者判断项目的好坏以及是否参加，正面负面有证据的客观信息都将转发，尽量保持客观、中立、无利益相关，也会做点科普。
          </Typography>
          <Typography style={{ marginBottom: 20 }}>
            4.
            如果您是认真做事的国产项目，有任何需要帮忙的地方（运营、技术、合约、测试等），也可以通过官方推特联系我们，或许会有热心持有者帮忙。
          </Typography>
          <Typography style={{ marginBottom: 20 }}>
            5. 以上是建立在有人买这个 NFT 的前提之上，没什么人买咱就不搞了。
          </Typography>
          <Typography
            variant="h4"
            style={{
              textAlign: "center",
              fontWeight: "bold",
              marginTop: "30px",
              marginBottom: "30px",
            }}
          >
            对未来国产项目的一点点期望
          </Typography>
          <Typography style={{ marginBottom: 20 }}>
            1. 相信绝大部分人都希望能看到国产有
            BAYC、CryptoPunk、Doodle、Azuki、CoolCats
            等等蓝筹项目的出现。但是这绝非易事，
            <strong>需要时间的打磨和资源的投入</strong>。
          </Typography>
          <Typography style={{ marginBottom: 20 }}>
            2.
            认真尽力做事，做好体验。立项到公售完成就一两个月，很难让人相信这是认真在做事的项目。（不过本项目我们还是很认真在做的，虽然从立项到上线也就不到十天）
          </Typography>
          <Typography style={{ marginBottom: 20 }}>
            3.
            并不是每一个项目都是目标大蓝筹，如果你的目标并非大蓝筹，作品质量也并不好，
            <strong>请写清楚并且设置一个合理的定价</strong>
            。不要滥竽充数，忽悠人割韭菜。
          </Typography>
          <Typography style={{ marginBottom: 20 }}>
            4. <strong>项目公售的结束只是一个开始</strong>
            ，不要把它当做结束了。设置的发展路线要去尽力做，做不到的一开始就别说。官方推特也将持续关注国产项目的发展路线落实进度。
          </Typography>
          <Typography style={{ marginBottom: 20 }}>
            5. 尽量实名做项目，<strong>要有责任感</strong>。
            <a
              href="https://opensea.io/collection/xrc"
              target="_blank"
              rel="noreferrer"
            >
              X Rabbits Club
            </a>{" "}
            的{" "}
            <a
              href="https://twitter.com/Yishuihan"
              target="_blank"
              rel="noreferrer"
            >
              Yishuihan
            </a>{" "}
            和{" "}
            <a
              href="https://opensea.io/collection/the-weirdo-ghost-gang"
              target="_blank"
              rel="noreferrer"
            >
              WeirdoGhostGang
            </a>
            的{" "}
            <a
              href="https://twitter.com/sleepy0x13"
              target="_blank"
              rel="noreferrer"
            >
              Sleepy0x13
            </a>{" "}
            做出了很好的榜样，当然也承受了很大的压力，希望大家支持！
          </Typography>
          <Typography style={{ marginBottom: 20 }}>
            6. 用一些高明的运营策略，尽量公平公正不需要肝。比如{" "}
            <a
              href="https://twitter.com/WGMInterfaces"
              target="_blank"
              rel="noreferrer"
            >
              Interfaces
            </a>{" "}
            项目的白名单全部公开透明，没有 Discord 等。很多知名项目限时开放
            Discord，通过
            IP、钱包交互等识别机器人、代肝工作室然后下白等，非常麻烦但是也大概率会非常成功。
          </Typography>
          <Typography style={{ marginBottom: 20 }}>
            7. 如果有很多中国人参与，网站加下 I18N 中文版啊，为啥非得让我们用
            Google Translate？
          </Typography>
          <Typography style={{ marginBottom: 20 }}>
            8. 使用<strong>先进靠谱的技术</strong>
            。无数的案例已经告诉我们，技术上的一个漏洞或者问题，都很容易导致整个项目的失败。前者有{" "}
            <a
              href="https://www.wikibit.com.cn/202109084254562329.html"
              target="_blank"
              rel="noreferrer"
            >
              Sevens 合约漏洞一人抢了 1000 个
            </a>
            ，今天又有
            <a
              href="https://mirror.xyz/penny777.eth/JtKaeHwxmcb_iYK3GTlrltm9U6ALHvFumxKfsqRTx9Y"
              target="_blank"
              rel="noreferrer"
            >
              阿狸盲盒变明盒
            </a>
            ，都为项目带来了非常大的损失。
          </Typography>

          <div style={{ textAlign: "center", marginTop: 40, fontSize: 24 }}>
            （完）
          </div>
          <div
            style={{
              marginTop: 20,
              marginBottom: 40,
              fontSize: 16,
              color: "#999",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            话说老板来都来了，真不 Mint 一个再走？{" "}
            <img src="/icons/yaofan.jpg" style={{ width: 40 }} alt="" />
          </div>
        </Content>
      </Dialog>
    </Container>
  );
}

export default Summary;
