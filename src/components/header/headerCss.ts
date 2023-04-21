import styled from "styled-components";

const HeaderCss = styled.div`
  background: #6d6d6d;
  width: 100%;
  height: 42px;
  padding: 6px 20px;
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  color: #dfdfdf;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .download-bt {
    width: 118px;
    height: 28px;
    background: #ffffff;
    border-radius: 4px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    p {
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 100%;
      color: #49494a;
    }
  }
`;

export default HeaderCss;
