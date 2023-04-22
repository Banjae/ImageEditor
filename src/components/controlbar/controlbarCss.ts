import styled from "styled-components";

const ControlbarCss = styled.div`
  position: absolute;
  top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  .control {
    width: 150px;
    height: 25px;
    background: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    .bar {
      position: relative;
      width: 125px;
      height: 0px;
      border: 2px solid #aeaeae;
      border-radius: 2px;
    }
    .move-bt {
      position: absolute;
      top: calc(-15px / 2);

      transform: translateX(-50%);
      width: 15px;
      height: 15px;
      background: #7c86de;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
      border-radius: 100%;
      &:hover {
        cursor: pointer;
      }
    }
  }
  .percent {
  }
`;

export default ControlbarCss;
