import { useState, useRef } from "react";
import styled from "styled-components";
import FileSaver from "file-saver";
import _ from "lodash";
import { loadImage } from "canvas";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";

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

function PFPAvatar(props) {
  const pfp = props.pfp;
  return (
    <PFPAvatarWrapper>
      <img src="/traits/Lian.jpg" alt="" />
      {pfp.Bizi && <img src={`/traits/Bizi/${pfp.Bizi}.png`} alt="" />}
      {pfp.Yanjing && <img src={`/traits/Yanjing/${pfp.Yanjing}.png`} alt="" />}
      {pfp.Zuiba && <img src={`/traits/Zuiba/${pfp.Zuiba}.png`} alt="" />}
      {pfp.Zhuangshi && (
        <img src={`/traits/Zhuangshi/${pfp.Zhuangshi}.png`} alt="" />
      )}
      {pfp.Faxing && <img src={`/traits/Faxing/${pfp.Faxing}.png`} alt="" />}
    </PFPAvatarWrapper>
  );
}

function PFPCanvas(props) {
  const canvasRef = useRef(null);

  return (
    <div>
      <PFPAvatar pfp={props.pfp}></PFPAvatar>
      <canvas
        style={{ display: "none" }}
        width="600"
        height="600"
        ref={canvasRef}
      />
      <div
        style={{ display: "flex", justifyContent: "center", padding: "10px 0" }}
      >
        <Button
          size="small"
          variant="contained"
          onClick={async () => {
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

            canvas.toBlob((imageBlob) => {
              FileSaver.saveAs(imageBlob, "gclx.png");
            });
          }}
        >
          下载头像
        </Button>
        <Button
          style={{ marginLeft: "auto", marginRight: 10 }}
          onClick={props.onRandom}
          size="small"
          variant="outlined"
        >
          随机生成
        </Button>
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
        头像生成器
      </Typography>

      <Content style={{ padding: "5px" }}>
        <div>
          <PFPTool />
        </div>
      </Content>
    </Container>
  );
}

export default PFPMaker;
