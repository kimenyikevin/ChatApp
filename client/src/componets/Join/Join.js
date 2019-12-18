import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from  "./Join.module.css";
import Input from '../SigniInput/SignInput'

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  return (
    <div className={classes.signContainer1}>
      <h1 className={classes.signText}>SIGN IN FOR CHAT</h1>
      <div className={classes.signContainer}>
        <input
          placeholder="User Name"
          className={classes.joinInput}
          type="text"
          onChange={event => setName(event.target.value)}
        />
        <input
          placeholder="Password"
          type="text"
          onChange={event => setRoom(event.target.value)}
        />
        <div className={classes.signBtn}>
          <Link  onClick={e => (!name || !room ? e.preventDefault() : null)} to={`/chat?name=${name}&room=${room}`} >
            <button type="submit">
              SIGNIN
            </button>
          </Link>
        </div>
        <p>
          Don't have an account <a href='/signup'>sign up</a>
        </p>
      </div>
    </div>
  );
};
export default Join;
