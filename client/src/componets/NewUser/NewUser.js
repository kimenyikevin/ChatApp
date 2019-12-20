import React, {Component} from 'react';
import SigniInput from '../SigniInput/SignInput'
import classes from './NewUser.module.css'



class signUp extends Component {
    render() {
     return(
        <div className={classes.signContainer1}>
          <h1 class={classes.signText}>SIGN UP FOR CHAT</h1>
          <div class={classes.signContainer}>
             <SigniInput/>
          <p>Already have an account <a href='/join'>Login</a></p>
          </div>
        </div>
     )
    };

}


export default signUp;