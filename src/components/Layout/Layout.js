import React from "react";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <div>Toolbar, SideDrawer, BackDrop</div>
      <main>{children}</main>
    </React.Fragment>
  );
};

export default Layout;
