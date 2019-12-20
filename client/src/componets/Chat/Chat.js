import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import InfoBar from '../InforBar/InforBar';
import Input from '../Input/Input';
import classes from './Chat.module.css';
import Users from '../Users/Users'
import Messages from '../Message/Message'

let socket;
const Chat = ({ location }) => {
    const [userName, setuserName] = useState('');
    const [password, setpassword] = useState('');
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const endPont = 'localhost:5000/';
    useEffect(() => {
        const { userName, password } = queryString.parse(location.search);
        socket = io(endPont)
        setuserName(userName);
        setpassword(password);
        socket.emit('join', { userName, password}, () =>{
        });
        return () => {
            socket.emit('disconnect');
            socket.off();
        }
    }, [endPont, location.search]);

    useEffect(() => {
        socket.on('message', (message) => {
          setMessages([...messages, message ]);
        });

    
        socket.on('passwordData', ({ users }) => {
          setUsers(users);
        })
    
        return () => {
          socket.emit('disconnect');
    
          socket.off();
        }
      }, [messages])
    
      const sendMessage = (event) => {
        event.preventDefault();
        
        if(message) {
          socket.emit('sendMessage', message, () => setMessage(''));
        }
      }
    return (
      <div className={classes.dashContainer}>
      <div className={classes.leftDash}>
          <div className={classes.menu}>
              <h2><a href="/">CHATAPP</a></h2>
              <h3><a href="/join">SIGN OUT</a></h3>
          </div>
        <input type="text" placeholder="Search.."  />
        <div className={`${classes.listUsers} ${classes.active}`} >
            <Users room ={ userName }/>
        </div>
      </div>
      <div className={classes.rightDash}>
          <InfoBar userName={userName} />
          <Messages messages={messages} userName={userName} />
          <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
    </div>
    )
}
export default Chat;