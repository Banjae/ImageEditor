import styled from "styled-components";

const FileBtCss = styled.div`
  height: 33px;
  width: 216px;
  background: #ffffff;
  border-radius: 4px;
  border: 1px solid #efefef;
  label {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    cursor: pointer;
    color: #49494a;
    font-size: 14px;
    font-weight: 500;
    line-height: 17px;
  }
  input[type="file"] {
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    overflow: hidden;
    border: 0;
  }
`;

export default FileBtCss;
