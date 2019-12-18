import React from 'react';

import classes from './Button.module.css';

const button = (props) =>{
    return(
        <a href={props.signin}> <button className={classes.Button}> {props.text} </button></a>
    )
}
    

export default button;