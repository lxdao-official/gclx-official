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

function Roadmap() {
  return (
    <Container
      style={{
        background: "#dde4b6",
      }}
      id="roadmap"
    >
      <Typography
        style={{ textAlign: "center", marginTop: "5%" }}
        variant="h3"
        gutterBottom
        component="div"
      >
        发展路线
      </Typography>

      <Content>
        <Typography
          style={{ marginBottom: 20, marginTop: "4%" }}
          variant="body1"
          gutterBottom
        >
          <strong>2022 Q1</strong>{" "}
          <del>
            我们这就是一个卖 JPG 的项目，所以我们的 Q1
            发展目标就是把所有图片全部卖掉。
          </del>
          （
          <a
            href="https://twitter.com/gclxnft/status/1498978154056065024"
            target="_blank"
            rel="noreferrer"
          >
            2022.03.02 提前完成
          </a>
          ）2022.03.13 新增：
          <a
            href="https://twitter.com/gclxnft/status/1502628450930081796"
            target="_blank"
            rel="noreferrer"
          >
            头像生成器
          </a>
          。
        </Typography>
        <Typography style={{ marginBottom: 20 }} variant="body1" gutterBottom>
          <strong>2022 Q2</strong> 我们保证不会做【国产良心
          verse】等等元宇宙概念项目或者链游。我们没想法、没时间也没技术，当然，也没钱。
        </Typography>
        <Typography style={{ marginBottom: 20 }} variant="body1" gutterBottom>
          <strong>2022 Q3</strong>{" "}
          我们应该不会做二次创作、周边、衣服、租商业街开店等。
        </Typography>
        <Typography style={{ marginBottom: 20 }} variant="body1" gutterBottom>
          <strong>2022 Q4</strong>{" "}
          我们大概在这个时间或者之前卷钱跑路，所有未MINT完成的NFT将会被全部锁定在合约当中，同时我们将放弃合约的控制权，交给社区管理！
        </Typography>
        <Typography style={{ marginBottom: 20 }} variant="body1" gutterBottom>
          我们是国产良心 NFT
          项目，不太擅长开空头支票。如果之后做了，就算超出预期吧，再更新上来。
        </Typography>
      </Content>
    </Container>
  );
}

export default Roadmap;
