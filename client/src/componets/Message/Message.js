import React from 'react';

import ScrollToBottom from 'react-scroll-to-bottom';

import Message from '../Messages/Message';

import  classes from './Message.module.css';

const Messages = ({ messages, userName }) => (
  <ScrollToBottom className={classes.messages}>
    {messages.map((message, i) => <div key={i}><Message message={message} userName={userName}/></div>)}
  </ScrollToBottom>
);

export default Messages;