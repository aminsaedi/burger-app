import React,{useState} from "react";
import './layout.css'

import Toolbar from "../navigation/toolbar/Toolbar";
import SideDrawer from "../navigation/sideDrawer/SideDrawer";

const Layout = ({ children }) => {
  const [showSidebar,setShowSidebar] = useState(false);

  return (
    <React.Fragment>
      <Toolbar onMenuClick={() => setShowSidebar(!showSidebar)} />
      <SideDrawer open={showSidebar} onClose={() => setShowSidebar(false)} />
      <main className="content" >{children}</main>
    </React.Fragment>
  );
};

export default Layout;
