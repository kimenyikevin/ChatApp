import React, { useState } from "react";
import classes from "./SignInput.module.css";
import { Redirect } from "react-router-dom";
import PostData from "../../services/PostData";

class SigniInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      userName: "",
      password: "",
      birthDay: "",
      gender: "",
      redirectToReferrer: false
    };
    this.onChange = this.onChange.bind(this);
    this.signup = this.signup.bind(this);
  }
  signup(e) {
    e.preventDefault();
    if (this.state.email) {
      const { redirectToReferrer, ...user } = this.state;
      PostData("signup", user).then(result => {
        let { token } = result;
        if (token) {
          sessionStorage.setItem("userData", JSON.stringify(token));
          this.setState({ redirectToReferrer: true });
        }
        if (!token) {
          alert("please fill the form correctly");
        }
      });
    }
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    if (this.state.redirectToReferrer) {
      return <Redirect to={"/join"} />;
    }
    return (
      <form onSubmit={this.onSubmit}>
        <div className={classes.signContainer}>
          <input
            onChange={this.onChange}
            placeholder="First Name"
            className={classes.joinInput}
            type="text"
            name="firstName"
          />
        </div>
        <div className={classes.signContainer}>
          <input
            value={this.state.lastName}
            onChange={this.onChange}
            placeholder="Last Name"
            className={classes.joinInput}
            type="text"
            name="lastName"
          />
        </div>
        <div className={classes.signContainer}>
          <input
            value={this.state.email}
            onChange={this.onChange}
            placeholder="E-mail"
            className={classes.joinInput}
            type="text"
            name="email"
          />
        </div>
        <div className={classes.signContainer}>
          <input
            value={this.state.username}
            onChange={this.onChange}
            placeholder="user name"
            className={classes.joinInput}
            type="text"
            name="userName"
          />
        </div>
        <div className={classes.signContainer}>
          <input
            value={this.state.password}
            onChange={this.onChange}
            placeholder="Password"
            className={classes.joinInput}
            type="text"
            name="password"
          />
        </div>
        <div className={classes.signContainer}>
          <input
            value={this.state.birthDay}
            onChange={this.onChange}
            placeholder="Birth Day"
            className={classes.joinInput}
            type="text"
            name="birthDay"
          />
        </div>
        <div className={classes.signContainer}>
          <input
            value={this.state.gender}
            onChange={this.onChange}
            placeholder="Gender"
            className={classes.joinInput}
            type="text"
            name="gender"
          />
        </div>
        <div className={classes.signBtn}>
          <button onClick={this.signup}>SIGN UP</button>
        </div>
      </form>
    );
  }
}

export default SigniInput;
