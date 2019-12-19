import React, {Component} from 'react';
import Button from '../Button/Button'
import Input from '../SigniInput/SignInput';
import SigniInput from '../SigniInput/SignInput'
import classes from './NewUser.module.css'
import { connect } from 'react-redux';
import { userSignupRequest } from '../../actions/SignupActions';
import PropTypes from 'prop-types';


class signUp extends Component {
    render() {
       const { userSignupRequest } = this.props
     return(
        <div className={classes.signContainer1}>
          <h1 class={classes.signText}>SIGN UP FOR CHAT</h1>
          <div class={classes.signContainer}>
             <SigniInput userSignupRequest={userSignupRequest}/>
          <p>Already have an account <a href='/join'>Login</a></p>
          </div>
        </div>
     )
    };
   
}

signUp.propTypes = {
   userSignupRequest: PropTypes.func.isRequired
 }

export default connect(null, { userSignupRequest }) (signUp);