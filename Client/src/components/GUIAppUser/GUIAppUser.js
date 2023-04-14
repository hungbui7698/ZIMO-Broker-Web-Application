import React, { useState } from "react";
import MainHeader from "../MainHeader/MainHeader";
import MainFooter from "../MainFooter/MainFooter";
import AULeftSideMenu from "../LeftsideMenu/AULeftSideMenu";
import AUMainBody from "./AUMainBody/AUMainBody";

function GUIAppUser(props) {
  const [menu, setMenu] = useState("AppGroupManagement");
  return (
    <>
      <MainHeader
        setLogin={() => props.setLogin(false)}
        user={props.user}
        userRole={props.userRole}
      />
      <AULeftSideMenu menu={menu} setMenu={e=>setMenu(e)}></AULeftSideMenu>
      <AUMainBody menu={menu} user={props.user}/>
      <MainFooter />
    </>
  );
}

export default GUIAppUser;
