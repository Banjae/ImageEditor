import FileBtCss from "./fileBtCss";
import { IFiles, IPreiew } from "../../pages/editor/Editor";

interface IFile {
  addFile: (file: IFiles) => void;
  setPreview: React.Dispatch<React.SetStateAction<IPreiew | null>>;
}

const FileBt = (props: IFile) => {
  const fileHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];

      const reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onloadend = () => {
        const newFile: IFiles = {
          id: Date.now(),
          name: file.name,
          url: reader.result as string,
        };
        props.addFile(newFile);
        props.setPreview({ name: file.name, url: reader.result as string });
        localStorage.setItem(
          "preview",
          JSON.stringify({ name: file.name, url: reader.result as string })
        );
      };
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
