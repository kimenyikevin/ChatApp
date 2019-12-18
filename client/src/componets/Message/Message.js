import React from 'react';

import ScrollToBottom from 'react-scroll-to-bottom';

import Message from '../Messages/Message';

import  classes from './Message.module.css';

const Messages = ({ messages, name }) => (
  <ScrollToBottom className={classes.messages}>
    {messages.map((message, i) => <div key={i}><Message message={message} name={name}/></div>)}
  </ScrollToBottom>
);

export default Messages;