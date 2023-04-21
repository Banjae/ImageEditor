import styled from "styled-components";

const EditorCss = styled.div`
  margin-left: 44px;
  width: calc(100% - 44px);
  transition: all 0.4s ease;
  .container {
    height: calc(894px - 42px);
    background: #fafafa;
    position: relative;
    .img-file {
      img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
    .file-text {
      position: absolute;
      top: 327px;
      left: 484px;
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
      top: 389px;
      left: 488px;
    }
  }
  &.active {
    margin-left: 240px;
    width: calc(100% - 240px);
    .container {
      .file-text {
        left: 408px;
      }
      .file-bt {
        left: 412px;
      }
    }
  }
`;

export default EditorCss;
