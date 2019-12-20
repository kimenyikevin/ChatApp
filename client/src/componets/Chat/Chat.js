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
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const endPont = 'https://chatapp019.herokuapp.com/';
    useEffect(() => {
        const { name, room} = queryString.parse(location.search);
        socket = io(endPont)
        setName(name);
        setRoom(room);
        socket.emit('join', { name, room}, () =>{
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

    
        socket.on('roomData', ({ users }) => {
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
            <Users room ={ room }/>
        </div>
      </div>
      <div className={classes.rightDash}>
          <InfoBar room={room} />
          <Messages messages={messages} name={name} />
          <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
    </div>
    )
}
export default Chat;