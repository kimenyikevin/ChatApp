import React from 'react';

import classes from './Button.module.css';

const button = (props) =>(
    <button className={classes.Button}><a href="./pages/signup.html"> {props.text} </a></button>
);

export default button;