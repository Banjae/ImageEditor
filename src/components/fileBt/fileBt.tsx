import FileBtCss from "./fileBtCss";
import { IFiles, IPreview } from "../../pages/editor/Editor";

interface IFile {
  files?: IFiles[];
  setFiles?: React.Dispatch<React.SetStateAction<IFiles[]>>;
  setPreview?: React.Dispatch<React.SetStateAction<IPreview[]>>;
}

const FileBt = (props: IFile) => {
  const fileHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        const url = reader.result as string;
        console.log(file.name);
        if (props.setPreview) props.setPreview([{ name: file.name, url: url }]);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <FileBtCss>
      <label htmlFor="file">+ 파일 추가</label>
      <input type="file" accept="image/*" id="file" onChange={fileHandler} />
    </FileBtCss>
  );
};

export default FileBt;
