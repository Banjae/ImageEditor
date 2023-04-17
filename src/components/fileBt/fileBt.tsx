import FileBtCss from "./fileBtCss";

const FileBt = () => {
  return (
    <FileBtCss>
      <label htmlFor="file">+ 파일 추가</label>
      <input type="file" accept="image/*" id="file" />
    </FileBtCss>
  );
};

export default FileBt;
