import React from 'react';

import Button from '../src/componets/Button/Button';

const signUp = (props) =>{
    const b = 'SIGNIN';
 return (
    <div>
    <h3>HAVE AN ACCOUNT SIGN IN</h3>
    <Button text={b} signin={'/join'}/>
</div>
 )
}

export default signUp;