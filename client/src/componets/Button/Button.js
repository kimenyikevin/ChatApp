import React from 'react';

import classes from './Button.module.css';

const button = (props) =>{
   let links = {
       signup: '/signup',
       signin: '/signin'
   }
    return(
        <a href={props.signin}> <button className={classes.Button}> {props.text} </button></a>
    )
}
    

export default button;