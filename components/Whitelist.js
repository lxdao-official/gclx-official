import styled from "styled-components";
import Container from "./Container";
import Typography from "@mui/material/Typography";

const Content = styled.div`
  max-width: 840px;
  margin: 5% auto 5% auto;
  strong {
    color: red;
  }
`;

function Whitelist() {
  return (
    <Container
      style={{
        background: "#eef8f5",
      }}
      id="whitelist"
    >
      <Typography
        style={{ textAlign: "center", marginTop: "5%" }}
        variant="h3"
        gutterBottom
        component="div"
      >
        如何获得白名单？
      </Typography>

      <Content>
        <Typography
          style={{ marginBottom: 20, marginTop: "5%" }}
          variant="body1"
          gutterBottom
        >
          您好我的朋友，我们是国产良心 NFT，为了节约您宝贵的时间并且减少 Discord
          公司的运营成本和环境污染，我们艰难决定：
          <strong>不设置 Discord 和白名单</strong>。
        </Typography>
        <Typography
          style={{
            marginTop: "10%",
            marginBottom: "10%",
            textAlign: "center",
            fontWeight: "bold",
          }}
          variant="body1"
          gutterBottom
        >
          <img src="/icons/alert.gif" style={{ width: 22 }} alt="" />{" "}
          无论如何，请记住，生命只有一次，我们也只有一个地球！！
          <img src="/icons/alert.gif" style={{ width: 22 }} alt="" />
        </Typography>
        <Typography style={{ marginBottom: 20 }} variant="body1" gutterBottom>
          所以：
        </Typography>
        <Typography style={{ marginBottom: 20 }} variant="body1" gutterBottom>
          1. 本项目<strong>没有公开 Discord</strong>
          。会员频道将只针对持有者开放，铸造之后可以看到，进去了也请少说废话，谢谢合作。
        </Typography>
        <Typography style={{ marginBottom: 20 }} variant="body1" gutterBottom>
          2.
          由于本项目没有白名单，如果您是私购白名单爱好者，特别想要通过购买白名单参与本项目，请联系官方。
          <strong>我们将按照铸造价格为您铸造</strong>，不会多收钱。
        </Typography>
        <Typography style={{ marginBottom: 20 }} variant="body1" gutterBottom>
          3. 我们是国产良心 NFT 项目，我们<strong>并不需要您会画画</strong>
          才能参与购买本项目。
        </Typography>
        <Typography style={{ marginBottom: 20 }} variant="body1" gutterBottom>
          4. 当然，打字、唱歌、跳舞、编故事、行为艺术等技能也不需要。
          <strong>我们也不会为您出难题或者玩游戏</strong>，实在是没时间。
        </Typography>
        <Typography style={{ marginBottom: 20 }} variant="body1" gutterBottom>
          5. 您<strong>无需直播吃屎</strong>也能参与本项目。
        </Typography>
        <Typography style={{ marginBottom: 20 }} variant="body1" gutterBottom>
          6. 我们<strong>不会与任何其他项目方或者 club 合作参与抽奖</strong>
          。因为我们并不能确认白名单能顺利发放到你的手上。我们也不想让我们糟糕的出售、运营结果拖累了其他项目。
        </Typography>
        <Typography style={{ marginBottom: 20 }} variant="body1" gutterBottom>
          7. 我们总量才 1000 个，
          <strong>想不出什么办法送 1000 份白名单给平台合作方</strong>，算了。
        </Typography>
        <Typography
          style={{ textAlign: "center", marginTop: "8%" }}
          variant="h4"
          gutterBottom
          component="div"
        >
          如果直接公售，会不会都被科学家抢光了？
        </Typography>
        <Typography
          style={{ marginBottom: 20, marginTop: "5%" }}
          variant="body1"
          gutterBottom
        >
          哦，我的朋友，您是否知道科学家也是人，他们也有家庭和孩子！
        </Typography>
        <Typography style={{ marginBottom: 20 }} variant="body1" gutterBottom>
          因为我们是国产良心 NFT
          项目，我们决定对科学家一视同仁。主要有以下几个原因：
        </Typography>
        <Typography style={{ marginBottom: 20 }} variant="body1" gutterBottom>
          1. 我们实际上并不在乎二级市场的表现，正如您所看到的发展路线，
          <strong>我们只做一锤子买卖</strong>。
        </Typography>
        <Typography style={{ marginBottom: 20 }} variant="body1" gutterBottom>
          2. 我们<strong>项目组技术水平一般</strong>，我们不懂如何通过 ThinkPHP
          等成熟稳定的技术来保护我们的铸造过程。也不懂怎么放个假代码假图片上线前突然改掉，玩弄一下科学家顺便屏蔽掉一些真实用户的技术。
        </Typography>
        <Typography style={{ marginBottom: 20 }} variant="body1" gutterBottom>
          3. 我们<strong>鼓励每个人都具备一定的科学家知识和能力</strong>。这在
          Web3
          的世界，可以让你更好的赚钱和保护你的财产。正如您为了拿白学会了画画，为什么不能同样的学习下科学家知识呢。
        </Typography>
        <Typography style={{ marginBottom: 20 }} variant="body1" gutterBottom>
          4. 我们将<strong>在一个特殊的时间点开启铸造</strong>
          ，到时候会比较突然，科学家应该会反应不过来，所以问题不大。
        </Typography>
      </Content>
    </Container>
  );
}

export default Whitelist;
