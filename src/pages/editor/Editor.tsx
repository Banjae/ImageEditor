import { useEffect, useState } from "react";
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import EditorCss from "./EditorCss";
import FileBt from "../../components/fileBt/fileBt";
import Toolbar from "../../components/toolbar/toolbar";

export interface IFiles {
  id: number;
  name: string;
  url: string;
}

export interface IPreiew {
  name: string;
  url: string;
}

const Editor = () => {
  const [open, setOpen] = useState(false);
  const [files, setFiles] = useState<IFiles[]>([]);
  const [preview, setPreview] = useState<IPreiew | null>(null);

  console.log(preview);

  const addFile = (file: IFiles) => {
    setFiles((prevFiles) => [...prevFiles, file]);
    localStorage.setItem("files", JSON.stringify([...files, file]));
  };

  useEffect(() => {
    const storageFile = localStorage.getItem("files");
    storageFile && setFiles(JSON.parse(storageFile));
    const storagePrev = localStorage.getItem("preview");
    storagePrev && setPreview(JSON.parse(storagePrev));
  }, []);

  return (
    <>
      <Sidebar
        open={open}
        setOpen={setOpen}
        files={files}
        setFiles={setFiles}
        addFile={addFile}
        setPreview={setPreview}
      />
      <EditorCss className={open ? "active" : ""}>
        <Header preview={preview} />
        <div className="container">
          {preview !== null ? (
            <>
              <Toolbar />
              <div className="img-file">
                <img src={preview.url} alt="" />
              </div>
            </>
          ) : (
            <>
              <div className="file-text">
                현재 업로드한 파일이 없습니다. <br />
                하단의 버튼을 눌러 파일을 추가해주세요.
              </div>
              <div className="file-bt">
                <FileBt addFile={addFile} setPreview={setPreview} />
              </div>
            </>
          )}
        </div>
      </EditorCss>
    </>
  );
};

export default Editor;
