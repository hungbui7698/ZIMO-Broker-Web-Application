import React from "react";
import "./Login.css";
const Login = (props) => {
  const login = () => {
    props.setLogin(true);
    var user = document.getElementById("user").value;
    var userRole = document.getElementById("userRole").value;
    props.setUser(user);
    props.setUserRole(userRole);
  };
  return (
    <div className="view-login">
      <h1>ZIMO</h1>
      <h2>Zero-touch Infrastructure Management and Orchestration</h2>
      <label>Please input your username...</label>
      <br />
      <input type="text" id="user" placeholder="Your Username" />
      <br />
      <select id="userRole">
        <option value="App User">App User</option>
        <option value="Infrastructure Provider">Infra Provider</option>
        <option value="App Provider">App Provider</option>
      </select>
      <button onClick={login} className="submit-btn">
        Login
      </button>
    </div>
  );
};
export default Login;
