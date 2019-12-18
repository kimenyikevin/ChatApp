import React, {Component} from 'react';
import Button from '../Button/Button'


class signUp extends Component {
    render() {
     return(
         <div>
        <div className="sign-container-1">
          <h1 class="sign-text">SIGN UP FOR CHAT</h1>
          <div class="sign-container">
            <input type="text" placeholder="First Name" /><br />
            <input type="text" placeholder="Last Name" /><br />
            <input type="text" placeholder="E-mail" /><br />
            <input type="text" placeholder="User Name" /><br />
            <input type="text" placeholder="Password" /><br />
            <input type="text" placeholder="Comfirm Password" /><br /><br/>
           <div class="date">
              <label for="">Birth Day</label>
              <select name="" id="">

              </select>
              <select name="" id="">
                      <option value="months">months</option>
              </select>
              <select name="" id="">
                      <option value="years">years</option>
              </select>
              <label for="">Gender</label>
              <select name="" id="">
                  <option value="Gender">Male</option>
                  <option value="Female">Female</option>
              </select>
          </div> 
          <div class="sign-btn">
              <Button text= 'SIGN UP' />
          </div>
          <p>Already have an account <a href='/join'>Login</a></p>
          </div>
        </div>
      <footer>
        <div class="footer-copyright">
          <p>ChatApp ©2019,All Right reserved</p>
        </div>
      </footer>
      </div>
     )
    };
   
}

export default signUp;