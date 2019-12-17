import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Join.css";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  return (
    <div className="sign-container-1">
      <h1 className="sign-text">SIGN IN FOR CHAT</h1>
      <div className="sign-container">
        <input
          placeholder="User Name"
          className="joinInput"
          type="text"
          onChange={event => setName(event.target.value)}
        />
        <input
          placeholder="Password"
          className="joinInput mt-20"
          type="text"
          onChange={event => setRoom(event.target.value)}
        />
        <div class="sign-btn">
          <Link  onClick={e => (!name || !room ? e.preventDefault() : null)} to={`/chat?name=${name}&room=${room}`} >
            <button className={"button mt-20"} type="submit">
              SIGNIN
            </button>
          </Link>
        </div>
        <p>
          Don't have an account <a href="signup.html">sign up</a>
        </p>
      </div>
    </div>
  );
};
export default Join;
