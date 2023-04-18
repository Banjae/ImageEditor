import { useEffect, useState } from "react";
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import EditorCss from "./EditorCss";
import FileBt from "../../components/fileBt/fileBt";

export interface IFiles {
  id: number;
  name: string;
  url: string;
}

const Editor = () => {
  const [open, setOpen] = useState(false);
  const [imgURL, setImgURL] = useState<string | null>(null);
  const [files, setFiles] = useState<IFiles[]>([]);

  const addFile = (file: IFiles) => {
    setFiles((prevFiles) => [...prevFiles, file]);
    localStorage.setItem("files", JSON.stringify([...files, file]));
  };

  useEffect(() => {
    const storage = localStorage.getItem("files");
    if (storage) {
      setFiles(JSON.parse(storage));
    }
  }, []);

  return (
    <>
      <Sidebar
        open={open}
        setOpen={setOpen}
        files={files}
        addFile={addFile}
        setImgURL={setImgURL}
      />
      <EditorCss className={open ? "active" : ""}>
        <Header />
        <div className="container">
          {imgURL !== null ? (
            <div>
              <img src={imgURL} alt="" />
            </div>
          ) : (
            <>
              <div className="file-text">
                현재 업로드한 파일이 없습니다. <br />
                하단의 버튼을 눌러 파일을 추가해주세요.
              </div>
              <div className="file-bt">
                <FileBt addFile={addFile} setImgURL={setImgURL} />
              </div>
            </>
          )}
        </div>
      </EditorCss>
    </>
  );
};

export default Editor;
