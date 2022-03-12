import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import FileSaver from "file-saver";
import _ from "lodash";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";

import showMessage from "./showMessage";
import { padWidth } from "../utils";
import Container from "./Container";
import { TRAITS } from "./traits";

const Content = styled.div`
  max-width: 840px;
  margin: 5% auto 10% auto;
  strong {
    color: red;
  }
`;

const TraitItem = styled.div`
  width: ${(props) => {
    return props.width;
  }}px;
  cursor: pointer;
  margin: 5px;
  border: 1px solid
    ${(props) => {
      return props.selected ? "#000" : "#ccc";
    }};

  img {
    background: url("/traits/Lian.jpg") no-repeat;
    background-size: ${(props) => {
      return props.width;
    }}px;
    width: 100%;
    display: block;
  }
  div {
    font-size: 14px;
    padding: 2px 0;
    text-align: center;
    background: #eee;
    color: #000;
  }
`;

function PFPProperty(props) {
  return (
    <div
      style={{ float: "left" }}
      onClick={() => {
        props.onClick && props.onClick();
      }}
    >
      <Tooltip
        placement="right"
        title={
          <TraitItem width={150}>
            <img src={props.img} alt={props.name} />
            <div style={{ padding: "10px 0" }}>{props.name}</div>
          </TraitItem>
        }
      >
        <TraitItem selected={props.selected} width={62}>
          <img src={props.img} alt={props.name} />
          <div>{props.name}</div>
        </TraitItem>
      </Tooltip>
    </div>
  );
}

const TraitsWrapper = styled.div`
  display: flex;
`;
const TraitsList = styled.div`
  overflow: hidden;
  padding: 10px;
`;

function PFPRTraits(props) {
  const currentTraits = TRAITS[props.currentTab] || [];
  const currentTraitSelection = props.pfp[props.currentTab];

  return (
    <TraitsWrapper>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={props.currentTab}
        onChange={props.handleChange}
        sx={{ flex: "0 0 100px" }}
      >
        <Tab label="发型" value="Faxing" />
        <Tab label="眼睛" value="Yanjing" />
        <Tab label="鼻子" value="Bizi" />
        <Tab label="嘴巴" value="Zuiba" />
        <Tab label="装饰" value="Zhuangshi" />
      </Tabs>
      <TraitsList>
        {currentTraits.map((trait) => {
          const selected = currentTraitSelection === trait.key;
          return (
            <PFPProperty
              onClick={() => {
                props.onChange &&
                  props.onChange({
                    ...props.pfp,
                    [props.currentTab]: selected ? null : trait.key,
                  });
              }}
              name={trait.name}
              key={trait.key}
              img={trait.img}
              selected={selected}
            />
          );
        })}
      </TraitsList>
    </TraitsWrapper>
  );
}

const PFPAvatarWrapper = styled.div`
  background: #fff;
  width: 284px;
  height: 284px;
  border: 2px solid #ccc;
  position: relative;
  img {
    width: 280px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }
`;

const loadImage = (src) =>
  new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });

function isWeChat() {
  return /MicroMessenger/i.test(window.navigator.userAgent);
}

function PFPCanvas(props) {
  const canvasRef = useRef(null);
  // for stupid WeChat
  const [imgDataURI, setImgDataURI] = useState(null);

  useEffect(() => {
    (async () => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, 600, 600);
      ctx.beginPath();
      ctx.rect(0, 0, 600, 600);
      ctx.fillStyle = "#fff";
      ctx.fill();

      let images = ["/traits/Lian.jpg"];
      Object.keys(props.pfp).forEach((pfpKey) => {
        if (props.pfp[pfpKey]) {
          images.push(`/traits/${pfpKey}/${props.pfp[pfpKey]}.png`);
        }
      });
      // always move Faxing to the end
      images.push(
        images.splice(
          images.findIndex((img) => img.includes("Faxing")),
          1
        )[0]
      );

      const imagesObj = await Promise.all(images.map(loadImage));

      imagesObj.forEach((image) => {
        ctx.drawImage(image, 0, 0);
      });

      setImgDataURI(canvas.toDataURL("image/png"));
    })();
  }, [props.pfp]);

  return (
    <div>
      <PFPAvatarWrapper>
        <img src={imgDataURI} alt="" />
        <canvas
          style={{ display: "none" }}
          width="600"
          height="600"
          ref={canvasRef}
        />
      </PFPAvatarWrapper>
      <div style={{ display: "flex", alignItems: "center", padding: "5px 0" }}>
        <Checkbox size="small" disabled />
        <span style={{ color: "#aaa" }}>添加激光眼？（即将上线）</span>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          size="small"
          variant="contained"
          onClick={async () => {
            if (isWeChat()) {
              showMessage({
                title:
                  "由于微信浏览器的限制，无法下载图片，请【长摁头像保存为图片】或者右上角用系统浏览器打开使用，谢谢。",
              });
            } else {
              const canvas = canvasRef.current;
              canvas.toBlob((imageBlob) => {
                FileSaver.saveAs(imageBlob, "gclx.png");
              });
            }
          }}
        >
          下载头像
        </Button>
        <Tooltip
          title={
            <div
              style={{
                background: "#000",
                padding: "5px 10px",
                marginTop: 10,
              }}
            >
              随机生成也可以在左侧修改个别部件哦
            </div>
          }
          placement="bottom"
        >
          <Button
            style={{ marginLeft: "auto", marginRight: 10 }}
            onClick={props.onRandom}
            size="small"
            variant="outlined"
          >
            随机生成
          </Button>
        </Tooltip>
        <Button onClick={props.onReset} size="small" variant="outlined">
          重置
        </Button>
      </div>
    </div>
  );
}

function getRandomTraits() {
  let randomTraits = {};
  Object.keys(TRAITS).forEach((traitKey) => {
    randomTraits[traitKey] = _.sample(TRAITS[traitKey]).key;
  });

  if (randomTraits["Zhuangshi"] === "Huzi") {
    randomTraits["Bizi"] = null;
    randomTraits["Zuiba"] = null;
  }
  if (randomTraits["Zhuangshi"] === "Mojing") {
    randomTraits["Yanjing"] = null;
  }

  return randomTraits;
}

const PFPMakerWrapper = styled.div`
  display: flex;
  @media only screen and (max-width: ${padWidth}) {
    flex-direction: column;
  }
`;
const PFPMakerLeft = styled.div`
  flex-basis: 50%;
  background: #fff;
  border: 2px solid #ccc;
  min-height: 504px;
  @media only screen and (max-width: ${padWidth}) {
    flex-basis: auto;
    min-height: auto;
    margin-bottom: 30px;
  }
`;
const PFPMakerRight = styled.div`
  display: flex;
  flex-basis: 50%;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: ${padWidth}) {
    flex-basis: auto;
  }
`;

function PFPTool() {
  const [currentTab, setCurrentTab] = useState("Faxing");
  const [pfp, setPfp] = useState({
    Yanjing: null,
    Bizi: null,
    Zuiba: null,
    Zhuangshi: null,
    Faxing: null,
  });

  return (
    <PFPMakerWrapper>
      <PFPMakerLeft>
        <PFPRTraits
          currentTab={currentTab}
          handleChange={(event, tab) => {
            setCurrentTab(tab);
          }}
          pfp={pfp}
          onChange={(newPfp) => {
            setPfp(newPfp);
          }}
        />
      </PFPMakerLeft>
      <PFPMakerRight>
        <PFPCanvas
          onRandom={() => {
            setPfp(getRandomTraits());
          }}
          onReset={() => {
            setPfp({
              Yanjing: null,
              Bizi: null,
              Zuiba: null,
              Zhuangshi: null,
              Faxing: null,
            });
          }}
          pfp={pfp}
        ></PFPCanvas>
      </PFPMakerRight>
    </PFPMakerWrapper>
  );
}

function PFPMaker() {
  return (
    <Container
      style={{
        background: "#dae7f8",
      }}
      id="pfpmaker"
    >
      <Typography
        style={{ textAlign: "center", marginTop: "5%" }}
        variant="h3"
        gutterBottom
        component="div"
      >
        头像生成器（新增）
      </Typography>

      <Content style={{ padding: "5px" }}>
        <Typography variant="body2" style={{ marginBottom: 20 }}>
          由于本项目只有 1000
          份比较少，有些朋友没有开到自己满意的头像，为了处理相关维权问题，我们加班加点推出头像生成器！
        </Typography>
        <Typography variant="body2" style={{ marginBottom: 30 }}>
          无论您是否持有国产良心 NFT，
          <strong>
            只要您喜欢国产良心，都可以生成头像使用，用了就都是家人
          </strong>
          （当然也有了义务）。 虽然您现在没有钱购买国产良心
          NFT，但是我们相信您富起来只是时间问题，到时候可以再补回来！
        </Typography>
        <div>
          <PFPTool />
        </div>
      </Content>
    </Container>
  );
}

export default PFPMaker;
