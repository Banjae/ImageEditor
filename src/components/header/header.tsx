import HeaderCss from "./headerCss";
import { IPreiew } from "../../pages/editor/Editor";

interface IHeader {
  preview: IPreiew | null;
  download: () => void;
}

const Header = (props: IHeader) => {
  return (
    <HeaderCss>
      {props.preview !== null ? (
        <>
          <p>{props.preview.name}</p>
          <button className="download-bt" onClick={props.download}>
            <p>다운로드</p>
          </button>
        </>
      ) : (
        <p>선택된 파일이 없습니다.</p>
      )}
    </HeaderCss>
  );
};

export default Header;
