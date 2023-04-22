import { useState } from "react";
import ToolbarCss from "./toolbarCss";
import Controlbar from "../controlbar/controlbar";

interface IToolbar {
  previewRef: React.RefObject<HTMLImageElement>;
}

const Toolbar = (props: IToolbar) => {
  const [imageStyle, setImageStyle] = useState({});

  const [rotateAngle, setRotateAngle] = useState(0);
  const rotate = () => {
    setRotateAngle((prevAngle) => prevAngle - 90);
    const currentAngle = rotateAngle - 90;
    if (props.previewRef.current)
      props.previewRef.current.style.transform = `rotate(${currentAngle}deg)`;
  };

  const [scaleY, setScaleY] = useState(1);
  const upDown = () => {
    setScaleY((prevScaleY) => -prevScaleY);
    if (props.previewRef.current)
      props.previewRef.current.style.transform = `scaleY(${scaleY})`;
  };

  const [scaleX, setScaleX] = useState(1);
  const leftRight = () => {
    setScaleX((prevScaelX) => -prevScaelX);
    if (props.previewRef.current)
      props.previewRef.current.style.transform = `scaleX(${scaleX})`;
  };

  const [showBright, setShowBright] = useState(false);
  const [showChroma, setShowChroma] = useState(false);
  const [showContrast, setShowContrast] = useState(false);

  // 명도 조절
  const [brightLevel, setBrightLevel] = useState(100);
  const bright = () => {
    setShowBright(!showBright);
    setShowChroma(false);
    setShowContrast(false);
    // if (props.previewRef.current)
    //   props.previewRef.current.style.filter = `brightness(${value}%)`;
  };

  // 채도 조절
  const [chromaLevel, setChormaLevel] = useState(100);
  const chroma = () => {
    setShowBright(false);
    setShowChroma(!showChroma);
    setShowContrast(false);
  };

  // 대비 조절
  const [contrastLevel, setContrastLevel] = useState(100);
  const contrast = () => {
    setShowBright(false);
    setShowChroma(false);
    setShowContrast(!showContrast);
  };

  const reset = () => {
    if (props.previewRef.current) props.previewRef.current.style.transform = "";
  };

  return (
    <ToolbarCss>
      <div className="toolbar-bt">
        <img src={`${process.env.PUBLIC_URL}/images/Cut.png`} />
      </div>
      <div className="toolbar-bt" onClick={rotate}>
        <img src={`${process.env.PUBLIC_URL}/images/Rotate.png`} />
      </div>
      <div className="toolbar-bt" onClick={upDown}>
        <img src={`${process.env.PUBLIC_URL}/images/UpDown.png`} />
      </div>
      <div className="toolbar-bt" onClick={leftRight}>
        <img src={`${process.env.PUBLIC_URL}/images/LeftRight.png`} />
      </div>
      <div
        className={`toolbar-bt ${showBright ? "clicked" : ""}`}
        onClick={bright}
      >
        <img src={`${process.env.PUBLIC_URL}/images/Bright.png`} />
        {showBright && <Controlbar title="명도" value={brightLevel} />}
      </div>
      <div
        className={`toolbar-bt${showChroma ? " click" : ""}`}
        onClick={chroma}
      >
        <img src={`${process.env.PUBLIC_URL}/images/Chroma.png`} />
        {showChroma && <Controlbar title="채도" value={chromaLevel} />}
      </div>
      <div
        className={`toolbar-bt${showContrast ? " click" : ""}`}
        onClick={contrast}
      >
        <img src={`${process.env.PUBLIC_URL}/images/Contrast.png`} />
        {showContrast && <Controlbar title="대비" value={contrastLevel} />}
      </div>
      <div className="toolbar-txt" onClick={reset}>
        <p>초기화</p>
      </div>
    </ToolbarCss>
  );
};

export default Toolbar;
