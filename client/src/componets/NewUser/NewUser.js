import React, {Component} from 'react';
import Button from '../Button/Button'
import Input from '../SigniInput/SignInput';
import SigniInput from '../SigniInput/SignInput'
import classes from './NewUser.module.css'


class signUp extends Component {
    render() {
     return(
        <div className={classes.signContainer1}>
          <h1 class={classes.signText}>SIGN UP FOR CHAT</h1>
          <div class={classes.signContainer}>
             <SigniInput placeholder="First Name"/>
             <SigniInput placeholder="Last Name"/>
             <SigniInput placeholder="E-mail"/>
             <SigniInput placeholder="User Name"/>
             <SigniInput placeholder="Password"/>
             <SigniInput placeholder="Comfirm Password"/>
             <SigniInput placeholder="Date of Birth"/>
             <SigniInput placeholder="Gender"/>
          <div className={classes.signBtn}>
              <Button text= 'SIGN UP' />
          </div>
          <p>Already have an account <a href='/join'>Login</a></p>
          </div>
        </div>
     )
    };
   
}

export default signUp;