import React from 'react';

import Button from '../Button/Button';

const signUp = (props) =>{
    const b = 'GET STARTED FOR FREE';
 return (
    <div >
    <h3>FOR THE FIRST TIME SIGNUP</h3>
    <Button text={b} signin={'/signup'}/>
</div>
 )
}

export default signUp;