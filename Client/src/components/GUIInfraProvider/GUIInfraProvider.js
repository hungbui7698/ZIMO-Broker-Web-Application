import React, { useState } from "react";
import MainHeader from "../MainHeader/MainHeader";
import MainFooter from "../MainFooter/MainFooter";
import IPMainBody from "./IPMainBody/IPMainBody";
import LeftSideMenu from "../LeftsideMenu/LeftsideMenu";
function GUIInfraProvider(props) {
  const [menu, setMenu] = useState("Overview");
  return (
    <>
      <MainHeader
        setLogin={() => props.setLogin(false)}
        user={props.user}
        userRole={props.userRole}
      />
      <LeftSideMenu menu={menu} setMenu={(elem) => setMenu(elem)}></LeftSideMenu>
      <IPMainBody userRole={props.userRole} user={props.user} menu={menu} />
      <MainFooter></MainFooter>
    </>
  );
}

export default GUIInfraProvider;
