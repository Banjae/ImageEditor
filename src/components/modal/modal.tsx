import ModalCss from "./modalCss";

const Modal = () => {
  return (
    <ModalCss>
      <div className="modal-box">
        <p>(파일명) 데이터를 정말 삭제하시겠습니까?</p>
        <div className="modal-bt">
          <button className="cancel-bt">취소</button>
          <button className="delete-bt">삭제</button>
        </div>
      </div>
    </ModalCss>
  );
};

export default Modal;
