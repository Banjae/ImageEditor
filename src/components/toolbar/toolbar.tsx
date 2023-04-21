import ToolbarCss from "./toolbarCss";

const Toolbar = () => {
  return (
    <ToolbarCss>
      <div className="toolbar-bt">
        <img src={`${process.env.PUBLIC_URL}/images/Cut.png`} />
      </div>
      <div className="toolbar-bt">
        <img src={`${process.env.PUBLIC_URL}/images/Rotate.png`} />
      </div>
      <div className="toolbar-bt">
        <img src={`${process.env.PUBLIC_URL}/images/UpDown.png`} />
      </div>
      <div className="toolbar-bt">
        <img src={`${process.env.PUBLIC_URL}/images/LeftRight.png`} />
      </div>
      <div className="toolbar-bt">
        <img src={`${process.env.PUBLIC_URL}/images/Bright.png`} />
      </div>
      <div className="toolbar-bt">
        <img src={`${process.env.PUBLIC_URL}/images/Chroma.png`} />
      </div>
      <div className="toolbar-bt">
        <img src={`${process.env.PUBLIC_URL}/images/Contrast.png`} />
      </div>
      <div className="toolbar-txt">
        <p>초기화</p>
      </div>
    </ToolbarCss>
  );
};

export default Toolbar;
