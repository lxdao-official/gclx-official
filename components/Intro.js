import styled from "styled-components";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";

import Container from "./Container";
import ConnectWallet from "./ConnectWallet";
import { padWidth } from "../utils";

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: ${padWidth}) {
    flex-direction: column;
  }
`;

const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: ${padWidth}) {
    margin-bottom: 20px;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const MenuItemText = styled.span`
  cursor: pointer;
  :hover {
    font-weight: bold;
  }
`;

function MenuItem(props) {
  const elementId = props.elementId;
  return (
    <MenuItemText
      style={{ padding: "10px 20px" }}
      onClick={() => {
        if (elementId) {
          const ele = document.getElementById(elementId);
          ele.scrollIntoView({ behavior: "smooth" });
        }
        props.onClick && props.onClick();
      }}
    >
      {props.children}
    </MenuItemText>
  );
}

const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-bottom: 60px;
`;
const ContentImage = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
`;

function Intro() {
  return (
    <Container
      style={{
        background: "#dae7f8",
      }}
      id="intro"
    >
      <Head>
        <h1>国产良心 NFT</h1>
        <MenuWrapper>
          <MenuItem elementId="intro">介绍</MenuItem>
          <MenuItem elementId="roadmap">发展路线</MenuItem>
          <MenuItem elementId="faq">问与答</MenuItem>
          <MenuItem elementId="team">项目成员</MenuItem>
        </MenuWrapper>
        <ConnectWallet showCollect={true} />
      </Head>
      <Content>
        <ContentImage>
          <img style={{ width: 200 }} src="/images/demo.gif" />
        </ContentImage>
        <Typography
          style={{
            marginTop: "8.3333333%",
          }}
          variant="body1"
          gutterBottom
        >
          尊贵且独一无二的限量 1000 份【国产良心】NFT，专为中国人准备！
        </Typography>
        <Typography
          style={{
            marginTop: "2%",
          }}
          variant="body1"
          gutterBottom
        >
          请放心参与，咱中国人不骗中国人{" "}
          <img
            style={{ width: 36, position: "relative", top: 5 }}
            src="/icons/doge.png"
          />
        </Typography>
        <div
          style={{
            padding: "40px 0",
          }}
        >
          <Tooltip title="官方 Gem">
            <a
              href="https://www.gem.xyz/collection/gclx"
              target="_blank"
              rel="noreferrer"
            >
              <img
                style={{
                  cursor: "pointer",
                  width: 40,
                  marginRight: "40px",
                  borderRadius: "50%",
                }}
                src="/icons/gem.jpeg"
              />
            </a>
          </Tooltip>
          <Tooltip title="官方 OpenSea">
            <a
              href="https://opensea.io/collection/gclx"
              target="_blank"
              rel="noreferrer"
            >
              <img
                style={{
                  cursor: "pointer",
                  width: 40,
                  marginRight: "40px",
                }}
                src="/icons/opensea.svg"
              />
            </a>
          </Tooltip>
          <Tooltip title="官方 LooksRare">
            <a
              href="https://looksrare.org/zh_hans/collections/0xBf66f2d9630A033022602c3279b04b4a37399927"
              target="_blank"
              rel="noreferrer"
            >
              <img
                style={{
                  cursor: "pointer",
                  width: 40,
                  marginRight: "40px",
                }}
                src="/icons/looksrare.png"
              />
            </a>
          </Tooltip>
          <Tooltip title="官方 Twitter">
            <a
              href="https://twitter.com/gclxnft"
              target="_blank"
              rel="noreferrer"
            >
              <img
                style={{
                  width: 40,
                }}
                src="/icons/twitter.svg"
              />
            </a>
          </Tooltip>
        </div>
        <Typography
          style={{
            marginTop: "5%",
            textAlign: "center",
            color: "#666",
            maxWidth: "600px",
          }}
          variant="body2"
          gutterBottom
        >
          我们不与国际接轨。We DO NOT provide an English version for English
          speakers, please consider learning Chinese or using Google Translate.
        </Typography>
      </Content>
    </Container>
  );
}

export default Intro;
