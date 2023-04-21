import styled from "styled-components";

const SidebarCss = styled.div`
  position: absolute;
  background: #ffffff;
  width: 44px;
  height: 894px;
  border-right: 1px solid #efefef;
  padding: 0 13px;
  z-index: 9;
  transition: all 0.5s ease;
  .side-top {
    position: relative;
    p {
      display: none;
      opacity: 0;
      font-size: 16px;
      font-weight: 700;
      line-height: 19px;
      color: #232324;
    }
    .open-bt {
      position: relative;
      display: flex;
      justify-content: center;
      cursor: pointer;
      span {
        position: absolute;
        width: 18px;
        height: 0px;
        border: 1.5px solid #6d6d6d;
        border-radius: 2px;
        transition: all 0.5s;
        :nth-of-type(1) {
          top: 14px;
        }
        :nth-of-type(2) {
          top: 20px;
        }
        :nth-of-type(3) {
          top: 26px;
        }
      }
      &.active {
        position: absolute;
        right: 10px;
        span {
          :nth-of-type(1) {
            top: -6px;
            transform: translateY(6px) rotate(45deg);
          }
          :nth-of-type(2) {
            opacity: 0;
          }
          :nth-of-type(3) {
            top: -6px;
            transform: translateY(6px) rotate(-45deg);
          }
        }
      }
    }
  }
  .file-list {
    position: absolute;
    display: none;
    top: 55px;
  }
  .file-bt {
    position: absolute;
    display: none;
    bottom: 20px;
    transform: translateX(-100%);
    animation-name: slide;
    animation-duration: 0.5s;
    animation-timing-function: ease;
    animation-fill-mode: forwards;
  }
  &.active {
    width: 240px;
    padding: 20px 12px;
    .side-top {
      display: flex;
      position: relative;
      p {
        display: block;
        opacity: 1;
        position: absolute;
        top: -7px;
        left: 0;
      }
    }
    .file-list {
      display: block;
      position: absolute;
      top: 54px;
      left: 0;
      transform: translateX(0%);
      animation-name: slide;
      animation-duration: 0.5s;
      animation-timing-function: ease;
      animation-fill-mode: forwards;
      .select-div {
        background: #e7e9ff;
      }
      .file {
        width: 240px;
        height: 41px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 12px;
        img {
          width: 14px;
          height: 16px;
          cursor: pointer;
        }
      }
    }
    .file-bt {
      display: block;
      transform: translateX(0%);
      animation-name: slide;
      animation-duration: 0.5s;
      animation-timing-function: ease;
      animation-fill-mode: forwards;
    }
  }

  @keyframes slide {
    from {
      transform: translateX(-100%);
      opacity: 0;
    }
    to {
      transform: translateX(0%);
      opacity: 1;
    }
  }
`;

export default SidebarCss;
