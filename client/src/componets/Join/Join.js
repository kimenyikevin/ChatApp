import React, { useState, Component } from "react";
import {Redirect} from 'react-router-dom';
import classes from  "./Join.module.css";
import PostData from '../../services/PostData'


class Join extends Component {
  constructor(){
    super();
   
    this.state = {
     userName: '',
     password: '',
     redirectToReferrer: false
    };

    this.login = this.login.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  

  login() {
    if(this.state.userName && this.state.password){
      const { redirectToReferrer, ...user} = this.state
      PostData('login', user).then((result) => {
       const { token } = result;
       if( token ){         
        this.setState({redirectToReferrer: true});
       }
       if (!token) {
        alert("please check your information correctly");
      }
      });
    }
    
   }

  onChange(e){
    this.setState({[e.target.name]:e.target.value});
   }

  render(){
    if (this.state.redirectToReferrer) {
      return (<Redirect to={`/chat?userName=${this.state.userName}&password=${this.state.password}`}/>)
    }
    return (
      <div className={classes.signContainer1}>
        <h1 className={classes.signText}>SIGN IN FOR CHAT</h1>
        <div className={classes.signContainer}>
          <input
            placeholder="User Name"
            name="userName"
            className={classes.joinInput}
            type="text"
            onChange={this.onChange}
          />
          <input
            placeholder="Password"
            name="password"
            type="text"
            onChange={this.onChange}
          />
          <div className={classes.signBtn}>
              <button type="submit" onClick={this.login}>
                SIGNIN
              </button>
          </div>
          <p>
            Don't have an account <a href='/signup'>sign up</a>
          </p>
        </div>
      </div>
    );
  }
};
export default Join;
