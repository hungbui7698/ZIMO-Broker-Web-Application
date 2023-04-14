import React from "react";
import { useState } from "react";
import { useLoadScript } from "@react-google-maps/api";
import Login from "./components/Login/Login";
import GUIAppProvider from "./components/GUIAppProvider/GUIAppProvider";
import GUIInfraProvider from "./components/GUIInfraProvider/GUIInfraProvider";
import GUIAppUser from "./components/GUIAppUser/GUIAppUser";
const libraries = ["places"];
function App() {
  const [userRole, setUserRole] = useState("EndUser");
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState("");
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyDrTrSM6MnizIsVaXvygHQCCM1WGIHmtAo",
    libraries,
  });
  if (loadError) return "Errorr";
  if (!isLoaded) return "loading";
  return (
    <>
      {login === false && (
        <Login
          setLogin={() => setLogin(true)}
          setUser={(user) => setUser(user)}
          setUserRole={(userRole) => setUserRole(userRole)}
        />
      )}
      {login === true &&
        (userRole === "End User" || userRole === "Infrastructure Provider") && (
          <GUIInfraProvider
            setUserRole={(elem) => setUserRole(elem)}
            setLogin={() => setLogin(false)}
            userRole={userRole}
            user={user}
          />
        )}
      {login === true && userRole === "App Provider" && (
        <GUIAppProvider
          setLogin={() => setLogin(false)}
          user={user}
          userRole={userRole}
        />
      )}
      {login === true && userRole === "App User" && (
        <GUIAppUser
          setLogin={() => setLogin(false)}
          user={user}
          userRole={userRole}
        />
      )}
    </>
  );
}

export default App;
