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
          1. 如您所看到，我们完全是<strong>国产良心</strong>的仿盘
          拥有其特性，只是JPG变成GIF。
        </Typography>
        <Typography style={{ marginBottom: 20 }} variant="body1" gutterBottom>
          2. 我们<strong>也仅设置 1000 份限量作品</strong>
          ，并且还都是从不同网站上下载下来的。。
        </Typography>
        <Typography style={{ marginBottom: 20 }} variant="body1" gutterBottom>
          3. 如果您很穷没有钱，但又非常喜欢本系列作品，我们建议您
          <strong>右键保存图片</strong>，请不要借贷或者卖房参与。
        </Typography>
        <Typography style={{ marginBottom: 20 }} variant="body1" gutterBottom>
          4. 因为我们是国产良心仿盘
          NFT，我们肯定遵守了国产良心的优良传统，
          <strong>良心价为 0.01 ETH 一个</strong>，童叟无欺。
        </Typography>
        <Typography style={{ marginBottom: 20 }} variant="body1" gutterBottom>
          5. 如果您坚持要购买我们的产品，请做好被告侵权然后<strong>销毁</strong>的风险。
        </Typography>
      </Content>
    </Container>
  );
}

export default Gallery;
