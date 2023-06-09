import ModalCss from "./modalCss";
import { IFiles, IPreiew } from "../../pages/editor/Editor";

interface IModal {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  files: IFiles[];
  setFiles: React.Dispatch<React.SetStateAction<IFiles[]>>;
  selected: string;
  preview: IPreiew | null;
  setPreview: React.Dispatch<React.SetStateAction<IPreiew | null>>;
}

const Modal = (props: IModal) => {
  const cancel = () => {
    props.setModal(false);
  };
  const remove = (item: string) => {
    props.setFiles((prevFiles) =>
      prevFiles.filter((file) => file.name !== item)
    );
    localStorage.setItem(
      "files",
      JSON.stringify(props.files.filter((file) => file.name !== item))
    );

    const prevFiles = props.files.filter((file) => file.name !== item);
    console.log(prevFiles);
    if (prevFiles.length > 0) {
      props.setPreview({ name: prevFiles[0].name, url: prevFiles[0].url });
      localStorage.setItem(
        "preview",
        JSON.stringify({
          name: prevFiles[0].name,
          url: prevFiles[0].url,
        })
      );
    } else {
      props.setPreview(null);
      localStorage.setItem("preview", "");
    }
    props.setModal(false);
  };

  return (
    <ModalCss>
      <div className="modal-box">
        <p>{props.selected} 데이터를 정말 삭제하시겠습니까?</p>
        <div className="modal-bt">
          <button className="cancel-bt" onClick={cancel}>
            취소
          </button>
          <button className="delete-bt" onClick={() => remove(props.selected)}>
            삭제
          </button>
        </div>
      </div>
    </ModalCss>
  );
};

export default Modal;
