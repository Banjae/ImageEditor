import styled from "styled-components";

const EditorCss = styled.div`
  margin-left: 44px;
  width: calc(100% - 44px);
  .container {
    height: calc(894px - 42px);
    background: #ebebeb;
    position: relative;
    .file-text {
      position: absolute;
      top: 369px;
      left: 528px;
      height: 42px;
      width: 224px;
      font-size: 14px;
      font-weight: 400;
      line-height: 150%;
      text-align: center;
      color: #979797;
    }
    .file-bt {
      position: absolute;
      top: 431px;
      left: 532px;
      height: 33px;
      width: 216px;
      background: #ffffff;
      border-radius: 4px;
      border: 1px solid #efefef;
      cursor: pointer;
    }
  }
`;

export default EditorCss;
