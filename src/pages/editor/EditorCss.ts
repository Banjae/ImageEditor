import styled from "styled-components";

const EditorCss = styled.div`
  margin-left: 44px;
  width: calc(100% - 44px);
  transition: all 0.4s ease;
  .container {
    height: calc(894px - 42px);
    background: #fafafa;
    position: relative;
    .editor-zone {
      height: calc(894px - 42px - 50px);
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: auto;
      .image {
      }
      .zoom {
        position: absolute;
        bottom: 30px;
        right: 30px;
        width: 66px;
        height: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 16px;
        .zoom-bt {
          width: 25px;
          height: 25px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }
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
      .editor-zone {
        .image {
          img {
          }
        }
      }
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
