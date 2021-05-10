import React from "react";

import "./sideDrawer.css";
import Logo from "../../logo/Logo";
import NavigationItems from "../navigationItems/navigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";

const SideDrawer = ({ open, onClose }) => {
  // let attachedClasses = ["sideDrawer" , ""]
  return (
    <React.Fragment>
      <Backdrop visible={open} onClick={onClose} />
      <div
        className={
          open ? "sideDrawer sideDrawer--open" : "sideDrawer sideDrawer--close"
        }
      >
        <Logo height="11%" />
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </React.Fragment>
  );
};

export default SideDrawer;
