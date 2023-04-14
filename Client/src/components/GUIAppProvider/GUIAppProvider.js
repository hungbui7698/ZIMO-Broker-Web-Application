import React, { useState } from "react";
import MainHeader from "../MainHeader/MainHeader";
import MainFooter from "../MainFooter/MainFooter";
import APLeftSideMenu from "../LeftsideMenu/APLeftSideMenu";

import APMainBody from "./APMainBody/APMainBody";
function GUIAppProvider(props) {
  const [menu, setMenu] = useState("CloudFlavour");
  return (
    <>
      <MainHeader
        setLogin={() => props.setLogin(false)}
        user={props.user}
        userRole={props.userRole}
      />
      <APLeftSideMenu setMenu={e=>setMenu(e)} menu={menu}></APLeftSideMenu>
      <APMainBody menu={menu} user={props.user}/>
      <MainFooter />
    </>
  );
}

export default GUIAppProvider;
