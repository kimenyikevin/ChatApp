import React, { useState } from "react";
import classes from  "./SignInput.module.css";

const  Input = (props) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  return (
      <div className={classes.signContainer}>
        <input
          placeholder={props.placeholder}
          className={classes.joinInput}
          type="text"
          onChange={event => setName(event.target.value)}
        />
      </div>
  );
};
export default Input;
