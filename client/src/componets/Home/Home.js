import React, { Component } from "react";
import classes from "./App.module.css";
import Navigation from "../nav/nav";
import SignUp from "../Signup/SignUp";
import Signin from "../SignIn/SignIn";

class App extends Component {
  render() {
    let links = [
      { label: "HOME", link: "/", active: true },
      { label: "SIGNUP", link: "/signup" },
      { label: "LOGIN", link: "/join" }
    ];

    return (
      <div className={classes.App}>
        <Navigation links={links} />
        <main>
          <h1>CHATAPP</h1>
          <div className={classes.text}>
            <h3>HAVE BETTER CHAT</h3>
          </div>
          <p>We help you communicate with your friends </p>
          <div className={classes.container}>
            <SignUp />
            <Signin />
          </div>
        </main>
        <footer>
          <div className={classes.footer}>
            <p>ChatApp ©2019,All Right reserved </p>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
