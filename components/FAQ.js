import styled from "styled-components";
import Container from "./Container";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Content = styled.div`
  max-width: 840px;
  margin: 5% auto 10% auto;
  strong {
    color: red;
  }
`;

function FAQ() {
  return (
    <Container
      style={{
        background: "#dae7f8",
      }}
      id="faq"
    >
      <Typography
        style={{ textAlign: "center", marginTop: "5%" }}
        variant="h3"
        gutterBottom
        component="div"
      >
        问与答
      </Typography>

      <Content style={{ padding: "5px" }}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>什么是 NFT？如何购买本项目的 NFT？</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">
              朋友您还需要多多学习，暂时不适合参与本项目，您可以右键保存您喜欢的图片当头像，别买了。
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion style={{ marginTop: 20 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>这个项目有什么用？</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">
              没啥卵用，就是个头像。购买之后您将拥有对您持有 NFT
              的无限使用权，对，就是那个{" "}
              <a
                href="https://creativecommons.org/share-your-work/public-domain/cc0/"
                target="_blank"
                rel="noreferrer"
              >
                CC0
              </a>
              。
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion style={{ marginTop: 20 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>供应量以及价格和铸造规则？</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">
              全宇宙（包括元宇宙）限量 <strong>1000</strong> 个。每个售价{" "}
              <strong>0.01</strong> ETH。每个钱包地址可以铸造最多{" "}
              <strong>2</strong> 个。每个人每天最多 <strong>2</strong> 个钱包。
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion style={{ marginTop: 20 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>为什么每个地址可以铸造 2 个？</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">
              主要我们想实际测试一下{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/AzukiZen/status/1479235139167207432"
              >
                Azuki 的合约 Gas Fee 优化技术
              </a>{" "}
              能否带来比铸造两个阿狸更低的 Gas Fee。
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion style={{ marginTop: 20 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>如何实现每个人每天最多铸造 2 个钱包的限制？</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">
              技术上我们是搞不定的，所以只能通过道德绑架的方式。
              <strong>今天，我们都是良心铸造人！</strong>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion style={{ marginTop: 20 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>官方的运营策略？是否会扫地板？</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">
              没有运营策略，想买就买。可以保证不会扫地板，一锤子买卖。发布之后的宣传、拉盘等行为均为社区自发，与项目方无关，因为项目成员白天还要上班。
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion style={{ marginTop: 20 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>本项目是否有 OpenSea 下架风险？</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">
              本项目的 IP 为艺术家花了三天下班时间<strong>精心原创</strong>
              ，包含了不少小心思，没有抄袭或者仿造任何知名项目。然后我们官方也不会去扫地板。除非有很多人举报，应该不太会被下架。请放心购买需要惊慌！
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion style={{ marginTop: 20 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>对持有者有什么要求吗？</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">
              1. <strong>DYOR</strong>
              ，这个项目大概率会亏钱，害怕亏的别买，买了亏了别报警，谢谢。
            </Typography>
            <Typography variant="body2">
              2. 如果在本项目亏了钱，<strong>禁止对项目组成员骂骂咧咧的</strong>
              。如果骂了，也别 at 项目组推特或者发私信让他们添堵，谢谢。
            </Typography>
            <Typography variant="body2">
              3. 成为持有者之后，
              <strong>您将有义务挖掘和扶持国产良心 NFT 项目</strong>
              、粉碎国产垃圾、曝光和传播客观信息和内幕、帮助新韭菜提升自己。DHD！
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion style={{ marginTop: 20 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>项目方是否会保留或者持有稀有作品？</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">
              不会。这将会是 Fair
              Launch（就是公平发射的意思）。项目成员没有任何保留，将参与公售，不会利用任何内幕进行交易，严格遵循良心铸造人的行为准则。
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion style={{ marginTop: 20 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>项目方对收益有什么打算？会回馈社区吗？</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">
              <strong>所有收益直接卷走</strong>
              平均分给两位项目组成员，应该不会回馈社区。更具体的打算：Bruce
              想要换掉用了 4 年的 Intel MacBook 继续 BUIDL Web3；
              <del>Muxin 打算买点画材继续创作。</del>（
              <a
                href="https://twitter.com/gclxnft/status/1502585088432742401"
                target="_blank"
                rel="noreferrer"
              >
                2022.03.12 完成
              </a>
              ）
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion style={{ marginTop: 20 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>
              为什么 OpenSea 上面设置 10% 的版税？这么高？
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">能捞多少算多少。</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion style={{ marginTop: 20 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>什么时候可以铸造？</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">
              <strong>就是现在！</strong>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Content>
    </Container>
  );
}

export default FAQ;
