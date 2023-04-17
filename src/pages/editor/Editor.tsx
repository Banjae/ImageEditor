import { useState } from "react";
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import EditorCss from "./EditorCss";
import FileBt from "../../components/fileBt/fileBt";

const Editor = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [files, setFiles] = useState([]);

  return (
    <>
      <Sidebar open={open} setOpen={setOpen} />
      <EditorCss className={open ? "active" : ""}>
        <Header />
        <div className="container">
          <div className="file-text">
            현재 업로드한 파일이 없습니다. <br />
            하단의 버튼을 눌러 파일을 추가해주세요.
          </div>
          <div className="file-bt">
            <FileBt />
          </div>
        </div>
      </EditorCss>
    </>
  );
};

export default Editor;
