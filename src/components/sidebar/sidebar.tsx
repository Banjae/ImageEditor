import FileBt from "../fileBt/fileBt";
import Modal from "../modal/modal";
import SidebarCss from "./sidebarCss";
import { IFiles, IPreiew } from "../../pages/editor/Editor";
import { useState } from "react";

interface ISidebar {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  files: IFiles[];
  setFiles: React.Dispatch<React.SetStateAction<IFiles[]>>;
  addFile: (file: IFiles) => void;
  setPreview: React.Dispatch<React.SetStateAction<IPreiew | null>>;
}

const Sidebar = (props: ISidebar) => {
  const [modal, setModal] = useState(false);
  const [selected, setSelected] = useState("");
  const openModal = (fileName: string) => {
    setSelected(fileName);
    setModal(true);
  };
  const preview = () => {};
  return (
    <SidebarCss className={props.open ? "active" : ""}>
      <div className="side-top">
        <p>파일 목록</p>
        <div
          className={`open-bt ${props.open ? "active" : ""}`}
          onClick={() => {
            props.setOpen(!props.open);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <ul className="file-list">
        {props.files.map((file) => (
          <li key={file.id} className="file" onClick={preview}>
            <p>{file.name}</p>
            <img
              src={`${process.env.PUBLIC_URL}/images/Union.png`}
              alt="delete"
              onClick={() => openModal(file.name)}
            />
          </li>
        ))}
      </ul>
      <div className="file-bt">
        <FileBt addFile={props.addFile} setPreview={props.setPreview} />
      </div>
      {modal && (
        <Modal
          setModal={setModal}
          selected={selected}
          files={props.files}
          setFiles={props.setFiles}
        />
      )}
    </SidebarCss>
  );
};

export default Sidebar;
