import FileBt from "../fileBt/fileBt";
import Modal from "../modal/modal";
import SidebarCss from "./sidebarCss";

interface ISidebar {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = (props: ISidebar) => {
  return (
    <SidebarCss className={props.open ? "active" : ""}>
      <div className="side-top">
        <p>파일 목록</p>
        <div
          className={`open-bt ${props.open ? "active" : ""}`}
          onClick={() => {
            props.setOpen(!props.open);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div>
        {/* <Modal /> */}
      </div>
      <div className="file-bt">
        <FileBt />
      </div>
    </SidebarCss>
  );
};

export default Sidebar;
