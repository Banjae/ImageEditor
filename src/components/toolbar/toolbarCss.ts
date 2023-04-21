import styled from "styled-components";

const ToolbarCss = styled.div`
  background: rgba(255, 255, 255, 0.4);
  border: 1px solid #e4e4e4;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 10px 20px;
  .toolbar-bt {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25px;
    height: 25px;
  }
  .toolbar-txt {
    display: flex;
    align-items: center;
    text-align: center;
    font-weight: 600;
    font-size: 12px;
    line-height: 100%;
    width: 40px;
    height: 28px;
    color: #6d6d6d;
  }
`;

export default ToolbarCss;
