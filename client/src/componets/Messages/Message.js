import React from 'react';

import  classes from './Message.module.css';


const Message = ({ message: { text, user }, userName }) => {
  let isSentByCurrentUser = false;
  const trimmedName = userName.trim().toLowerCase()
  if(user === trimmedName) {
    isSentByCurrentUser = true;
  }
  return (
    isSentByCurrentUser
      ? (
        <div className={`${classes.messageContainer} ${classes.justifyEnd} ` }>
          <p className={`${classes.sentText} ${classes.pr_10}`}>{userName}</p>
          <div className={`${classes.messageBox} ${classes.backgroundBlue}`}>
      <p className={`${classes.messageText} ${classes.colorWhite}`}>{text}</p>
          </div>
        </div>
        )
        : (
          <div className={`${classes.messageContainer} ${classes.justifyStart}`}>
            <div className={`${classes.messageBox} ${classes.backgroundLight}`}>
        <p className={`${classes.messageText} ${classes.colorDark}`}>{text}</p>
            </div>
            <p className={`${classes.sentText} ${classes.pl_10 }`}>{user}</p>
          </div>
        )
  );
}

export default Message;