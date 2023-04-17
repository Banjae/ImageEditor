import styled from "styled-components";

const SidebarCss = styled.div`
  position: fixed;
  background: #ffffff;
  width: 44px;
  height: 894px;
  border-right: 1px solid #efefef;
  padding: 13px;
  z-index: 9;
  transition: all 0.4s ease;
  .open-bt {
    position: relative;
    display: flex;
    justify-content: center;
    cursor: pointer;
    height: 100%;
    span {
      position: absolute;
      width: 18px;
      height: 0px;
      border: 2px solid #6d6d6d;
      border-radius: 2px;
      transition: all 0.4s;
      :nth-of-type(1) {
        top: 10px;
      }
      :nth-of-type(2) {
        top: 16px;
      }
      :nth-of-type(3) {
        top: 22px;
      }
    }
    &.active {
      span {
        :nth-of-type(1) {
          top: 22px;
          transform: translateY(-6px) rotate(45deg);
        }
        :nth-of-type(2) {
          opacity: 0;
        }
        :nth-of-type(3) {
          top: 10px;
          transform: translateY(6px) rotate(-45deg);
        }
      }
    }
  }
  &.active {
    width: 240px;
  }
`;

export default SidebarCss;
