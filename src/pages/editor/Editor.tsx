import Header from "../../components/header/header";
import EditorCss from "./EditorCss";

const Editor = () => {
  return (
    <>
      <EditorCss>
        <Header />
        <div className="container">
          <div className="file-text">
            현재 업로드한 파일이 없습니다. <br />
            하단의 버튼을 눌러 파일을 추가해주세요.
          </div>
          <button className="file-bt">+ 파일추가</button>
        </div>
      </EditorCss>
    </>
  );
};

export default Editor;
