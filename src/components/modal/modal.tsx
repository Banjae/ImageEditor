import ModalCss from "./modalCss";

interface IModal {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  selected: string;
}

const Modal = (props: IModal) => {
  const cancel = () => {
    props.setModal(false);
  };
  const remove = () => {};

  return (
    <ModalCss>
      <div className="modal-box">
        <p>{props.selected} 데이터를 정말 삭제하시겠습니까?</p>
        <div className="modal-bt">
          <button className="cancel-bt" onClick={cancel}>
            취소
          </button>
          <button className="delete-bt" onClick={remove}>
            삭제
          </button>
        </div>
      </div>
    </ModalCss>
  );
};

export default Modal;
