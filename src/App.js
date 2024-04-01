import React, { useState } from "react";
import "./App.css";
// import logoImage from './assets/logo.png'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [userMsg, setUserMsg] = useState(false);
  const [passwordMsg, setPasswordMsg] = useState(false);

  function submitfun(e) {
    e.preventDefault();

    const isUserCorrect = user === "admin";
    const isPasswordCorrect = password === "1234";

    setUserMsg(!isUserCorrect);
    setPasswordMsg(!isPasswordCorrect);

    if (isUserCorrect) {
      setUserMsg(false);
    }
    if (isPasswordCorrect) {
      setPasswordMsg(false);
    }
    if (isUserCorrect && isPasswordCorrect) {
      alert("Admin Form submitted successfully!");
      setUser("");
      setPassword("");
    }
  }

  return (
    <>
      <div className="main-container">
        <div className="logo">
          {/* <img src={logoImage} alt="Logo" /> */}
        </div>
        <div className="container_1">
          <h1>Welcome to</h1>
          <span className="kitGlobal">KIT Global Technologies.</span>
          <p className="kitPara">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
            itaque accusantium odio, soluta, corrupti aliquam quibusdam tempora
            at cupiditate quis eum maiores libero veritatis? Dicta facilis sint
            aliquid ipsum atque?
          </p>
        </div>
          <form className="formClass" onSubmit={(e) => submitfun(e)}>
            <div className="logInSelection">
              <div className="loginCheckbox">
                <input
                  className="userCheckbox"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label className="emp_adm_Label" htmlFor="flexRadioDefault1">
                  Admin
                </label>
              </div>
              <div className="loginCheckbox">
                <input
                  className="userCheckbox"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                />
                <label className="emp_adm_Label" htmlFor="flexRadioDefault2">
                  Employee
                </label>
              </div>
            </div>
            <div className="inputFields">
              <div className="userField">
                <label className="userLabel mb-2 mt-3" htmlFor="username">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  className="userInput px-4"
                  value={user}
                  autoComplete="username"
                  onChange={(e) => setUser(e.target.value)}
                />
                {userMsg ? (
                  <div className="text-danger">Incorrect Username</div>
                ) : (
                  <></>
                )}
              </div>
              <div className="userField">
                <label className="userLabel mb-2 mt-3" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="userInput px-4"
                  value={password}
                  autoComplete="current-password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                {passwordMsg ? (
                  <div className="text-danger">Incorrect Password</div>
                ) : (
                  <></>
                )}
              </div>
            </div>
            <div className="rememberme">
              <input
                className="remembermeCheck"
                type="checkbox"
                value=""
                id="defaultCheck1"
              />
              <label className="remembermeLabel" htmlFor="defaultCheck1">
                Remember Me
              </label>
            </div>
            <button className="submitBtn">Submit</button>
          </form>
        </div>
    </>
  );
}
export default App;

