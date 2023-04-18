import styled from "styled-components";

const ModalCss = styled.div`
  position: fixed;
  z-index: 99;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  .modal-box {
    width: 400px;
    height: 155px;
    padding: 24px;
    background: #ffffff;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    p {
      font-size: 14px;
      font-weight: 400;
      line-height: 150%;
      color: #49494a;
    }
    .modal-bt {
      display: flex;
      justify-content: flex-end;
      gap: 10px;
      .cancel-bt {
        border: 1px solid #979797;
        border-radius: 4px;
        padding: 8px 28px;
        font-size: 14px;
        font-weight: 700;
        line-height: 17px;
        background: transparent;
        color: #979797;
        cursor: pointer;
      }
      .delete-bt {
        border: 1px solid #e96161;
        border-radius: 4px;
        padding: 8px 28px;
        font-size: 14px;
        font-weight: 700;
        line-height: 17px;
        background: transparent;
        color: #e96161;
        cursor: pointer;
      }
    }
  }
`;

export default ModalCss;
