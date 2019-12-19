import React, { useState } from "react";
import classes from  "./SignInput.module.css";
import PropTypes from 'prop-types';


class SigniInput extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      firstname:'',
      lastname:'',
      email:'',
      username: '',
      password:'',
      birthday:'',
      gender:''
      
    }
   this.onChange = this.onChange.bind(this);
   this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e){
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e){
    e.preventDefault();
    this.props.userSignupRequest(this.state);
  }
  render(){
    return (
       <form onSubmit ={this.onSubmit}>
                        <div className={classes.signContainer}>
        <input
          value= {this.state.firstname}
          onChange={this.onChange}
          placeholder="First Name"
          className={classes.joinInput}
          type="text"
          name="firstname"
        />
      </div>
      <div className={classes.signContainer}>
        <input
          value= {this.state.lastname}
          onChange={this.onChange}
          placeholder="Last Name"
          className={classes.joinInput}
          type="text"
          name="lastname"
        />
      </div>
      <div className={classes.signContainer}>
        <input
          value= {this.state.email}
          onChange={this.onChange}
          placeholder="E-mail"
          className={classes.joinInput}
          type="text"
          name="email"
        />
      </div>
               <div className={classes.signContainer}>
        <input
          value= {this.state.username}
          onChange={this.onChange}
          placeholder="user name"
          className={classes.joinInput}
          type="text"
          name="username"
        />
      </div>
      <div className={classes.signContainer}>
        <input
          value= {this.state.password}
          onChange={this.onChange}
          placeholder="Password"
          className={classes.joinInput}
          type="text"
          name="password"
        />
      </div>
      <div className={classes.signContainer}>
        <input
          value= {this.state.birthday}
          onChange={this.onChange}
          placeholder="Birth Day"
          className={classes.joinInput}
          type="text"
          name="birthday"
        />
      </div>
      <div className={classes.signContainer}>
        <input
          value= {this.state.gender}
          onChange={this.onChange}
          placeholder="Gender"
          className={classes.joinInput}
          type="text"
          name="gender"
        />
      </div>
      <div className={classes.signBtn}>
        <button>SIGN UP</button>
          </div>
      </form>
  )
  }
};

SigniInput.propTypes = {
  userSignupRequest: PropTypes.func.isRequired
}
export default SigniInput;
