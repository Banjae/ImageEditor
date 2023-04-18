import { useState } from "react";
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import EditorCss from "./EditorCss";
import FileBt from "../../components/fileBt/fileBt";

export interface IFiles {
  id: number;
  name: string;
  file: File;
  url: string;
}

export interface IPreview {
  name: string;
  url: string;
}

const Editor = () => {
  const [open, setOpen] = useState(false);
  const [preview, setPreview] = useState<IPreview[]>([]);
  const [files, setFiles] = useState<IFiles[]>([]);

  console.log(preview);

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
            <FileBt files={files} setFiles={setFiles} setPreview={setPreview} />
          </div>
        </div>
      </EditorCss>
    </>
  );
};

export default Editor;
