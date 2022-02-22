import styled from "styled-components";
import Typography from "@mui/material/Typography";

import { padWidth } from "../utils";
import Container from "./Container";

const Content = styled.div`
  max-width: 840px;
  margin: 0 auto 5% auto;
  strong {
    color: red;
  }
`;

const Avatar = styled.div`
  width: 200px;
  overflow: hidden;
  border-radius: 50%;
  border: 4px solid #000;
  img {
    width: 100%;
  }
`;

const TeamMemberWrapper = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: ${padWidth}) {
    width: 100%;
    max-width: 480px;
    margin-bottom: 10%;
  }
`;

function TeamMember(props) {
  return (
    <TeamMemberWrapper>
      <Avatar>
        <img src={props.img} alt="" />
      </Avatar>
      <div style={{ textAlign: "center", marginTop: 20 }}>
        <div style={{ fontSize: 28, fontWeight: "bold" }}>{props.name}</div>
        <div style={{ marginTop: 10 }}>{props.role}</div>
        <div style={{ marginTop: 5 }}>{props.description}</div>
        <div style={{ marginTop: 20 }}>
          {props.twitterLink && (
            <a href={props.twitterLink} target="_blank" rel="noreferrer">
              <img style={{ width: 30 }} src="/icons/twitter.svg" alt="" />
            </a>
          )}
          {props.openseaLink && (
            <a
              href={props.openseaLink}
              target="_blank"
              rel="noreferrer"
              style={{ marginLeft: 20 }}
            >
              <img style={{ width: 30 }} src="/icons/opensea.svg" alt="" />
            </a>
          )}
        </div>
      </div>
    </TeamMemberWrapper>
  );
}

const TeamWrapper = styled.div`
  margin-top: 8%;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: ${padWidth}) {
    flex-direction: column;
    align-items: center;
  }
`;

function Team() {
  return (
    <Container
      style={{
        background: "#eef8f5",
      }}
      id="team"
    >
      <Typography
        style={{ textAlign: "center", marginTop: "5%" }}
        variant="h3"
        gutterBottom
        component="div"
      >
        项目组成员
      </Typography>

      <Content>
        <Typography
          style={{
            marginTop: "5%",
            textAlign: "center",
          }}
          variant="body1"
          gutterBottom
        >
          我们是国产良心 NFT 项目，我们的项目成员均为真人并且拥有推特账号！
        </Typography>

        <TeamWrapper>
          <TeamMember
            img="/one/bruce.jpg"
            name="Bruce Xu"
            role="项目发起人 / 多年经验程序员 / Web3 要饭人"
            description="以前擅长在 Web3 要饭、舔白，现在翻身做项目方！捐赠地址 brucexu.eth 谢谢！"
            twitterLink="https://twitter.com/brucexu_eth"
          />
          <TeamMember
            img="/one/muxin.jpg"
            name="Muxin"
            role="艺术家 / 摄影爱好者 / 合约工程师"
            description={
              <div>
                大概从2022年2月16日开始学习写合约。《One》系列摄影作品已上架{" "}
                <a
                  href="https://opensea.io/collection/one-series-photography"
                  target="_blank"
                  rel="noreferrer"
                >
                  Opensea
                </a>
                。
              </div>
            }
            twitterLink="https://twitter.com/muxin_eth"
            openseaLink="https://opensea.io/collection/one-series-photography"
          />
        </TeamWrapper>
      </Content>
    </Container>
  );
}

export default Team;
