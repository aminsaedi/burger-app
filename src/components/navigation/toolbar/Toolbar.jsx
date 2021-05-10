import React from "react";
import "./toolbar.css";
import Logo from "../../logo/Logo";
import NavigationItems from "../navigationItems/navigationItems";
import SideDrawerTogller from '../sideDrawerTogller/SideDrawerTogller'
const Toolbar = ({onMenuClick}) => {
  return (
    <header className="toolbar">
      <nav className="toolbar__navigation">
        <NavigationItems />
      </nav>
      <Logo height="80%" />
      <SideDrawerTogller onClick={onMenuClick} />
    </header>
  );
};

export default Toolbar;
