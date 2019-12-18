import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import InfoBar from '../InforBar/InforBar';
import Input from '../Input/Input';
import './Chat.css';
import Users from '../Users/Users'

let socket;
const Chat = ({ location }) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const endPont = 'localhost:5000';
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
      <div class="dash-container">
      <div class="left-dash">
          <div class="menu">
              <h2><a href="/">CHATAPP</a></h2>
              <h3><a href="/join">SIGN OUT</a></h3>
          </div>
        <input type="text" placeholder="Search.."  />
        <div class="list-users active">
            <Users room ={ room }/>
        </div>
      </div>
      <div className="right-dash">
          <InfoBar room={room} />
          <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
    </div>
    )
}
export default Chat;