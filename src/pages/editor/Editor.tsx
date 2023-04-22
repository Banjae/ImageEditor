import { useEffect, useRef, useState } from "react";
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import EditorCss from "./EditorCss";
import FileBt from "../../components/fileBt/fileBt";
import Toolbar from "../../components/toolbar/toolbar";
import html2canvas from "html2canvas";

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

  // 다운로드 Html2Canvas
  const previewRef = useRef<HTMLImageElement>(null);

  const download = () => {
    previewRef.current !== null &&
      html2canvas(previewRef.current).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.setAttribute("download", "Image.png");
        link.setAttribute("href", imgData);
        link.click();
      });
  };

  // 이미지 사이즈 조절
  const [zoom, setZoom] = useState(1);

  const zoomIn = () => {
    setZoom((zoom) => zoom + 0.1);
  };

  const zoomOut = () => {
    zoom > 0.5 && setZoom((zoom) => zoom - 0.1);
  };

  return (
    <>
      <Sidebar
        open={open}
        setOpen={setOpen}
        files={files}
        setFiles={setFiles}
        addFile={addFile}
        preview={preview}
        setPreview={setPreview}
      />
      <EditorCss className={open ? "active" : ""}>
        <Header preview={preview} download={download} />
        <div className="container">
          {preview !== null ? (
            <>
              <Toolbar previewRef={previewRef} />
              <div className="editor-zone">
                <div className="image" style={{ transform: `scale(${zoom})` }}>
                  <img src={preview.url} alt="preview" ref={previewRef} />
                </div>
                <div className="zoom">
                  <div className="zoom-bt" onClick={zoomOut}>
                    <img
                      src={`${process.env.PUBLIC_URL}/images/zoom-out.png`}
                    />
                  </div>
                  <div className="zoom-bt" onClick={zoomIn}>
                    <img src={`${process.env.PUBLIC_URL}/images/zoom-in.png`} />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="file-text">
                현재 업로드한 파일이 없습니다. <br />
                하단의 버튼을 눌러 파일을 추가해주세요.
              </div>
              <div className="file-bt">
                <FileBt
                  files={files}
                  addFile={addFile}
                  setPreview={setPreview}
                />
              </div>
            </>
          )}
        </div>
      </EditorCss>
    </>
  );
};

export default Editor;
