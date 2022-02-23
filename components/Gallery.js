import styled from "styled-components";
import Typography from "@mui/material/Typography";
import _ from "lodash";

import Container from "./Container";

const GalleryList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 840px;
  max-height: 840px;
  overflow: hidden;
  margin: 5% auto 0 auto;
`;
const GalleryItem = styled.div`
  width: 120px;
  margin: 10px;
  transition: all 0.2s ease;
  will-change: transform;
  position: relative;
  z-index: 10;
  img {
    width: 100%;
    height: auto;
  }
  :hover {
    transform: scale(1.2);
  }
`;

const arts = [
  "/images/demo_01.png",
  "/images/demo_03.png",
  "/images/demo_07.png",
  "/images/demo_13.png",
  "/images/demo_06.png",
  "/images/demo_05.png",
  "/images/demo_10.png",
  "/images/demo_04.png",
  "/images/demo_14.png",
  "/images/demo_09.png",
  "/images/demo_11.png",
  "/images/demo_12.png",
];

const Content = styled.div`
  max-width: 840px;
  margin: 5% auto 5% auto;
  strong {
    color: red;
  }
`;

function Gallery() {
  return (
    <Container
      style={{
        background: "#fff",
      }}
    >
      <Typography
        style={{ textAlign: "center", marginTop: "5%" }}
        variant="h3"
        gutterBottom
      >
        真实作品效果展示
      </Typography>
      <GalleryList>
        {arts.map((art, idx) => {
          return (
            <GalleryItem key={idx}>
              <img src={art} alt="国产良心作品展示" />
            </GalleryItem>
          );
        })}
      </GalleryList>

      <Content>
        <Typography style={{ textAlign: "center" }} variant="h4" gutterBottom>
          郑重说明
        </Typography>
        <Typography
          style={{ marginBottom: 20, marginTop: 50 }}
          variant="body1"
          gutterBottom
        >
          1. 我们是国产良心 NFT，以上图片均为实际作品效果，
          <strong>所见即所得</strong>
          ，我们保证开图时不会为您带来惊吓、眩晕、呕吐等不适感。
        </Typography>
        <Typography style={{ marginBottom: 20 }} variant="body1" gutterBottom>
          2. 我们<strong>仅设置 1000 份限量作品</strong>
          ，因为我们精力有限难以保证质量，我们保证不会为了多卖而滥竽充数，我们保证不以任何方式增发。
        </Typography>
        <Typography style={{ marginBottom: 20 }} variant="body1" gutterBottom>
          3. 如果您很穷没有钱，但又非常喜欢本系列作品，我们建议您
          <strong>右键保存图片</strong>，请不要借贷或者卖房参与。
        </Typography>
        <Typography style={{ marginBottom: 20 }} variant="body1" gutterBottom>
          4. 因为我们是国产良心
          NFT，我们非常清楚作品的艺术价值和项目的开发成本，因此我们设置了作品的
          <strong>良心价为 0.01 ETH 一个</strong>，童叟无欺。
        </Typography>
      </Content>
    </Container>
  );
}

export default Gallery;
