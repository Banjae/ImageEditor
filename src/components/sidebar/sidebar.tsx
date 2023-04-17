import { useState } from "react";
import SidebarCss from "./sidebarCss";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <SidebarCss className={open ? "active" : ""}>
      <div
        className={`open-bt ${open ? "active" : ""}`}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </SidebarCss>
  );
};

export default Sidebar;
