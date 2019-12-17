import React, { useState, useEffect } from 'react';
import queryString from 'querystring';
import io from 'socket.io-client';

let socket;
const Chat = ({ location }) => {
    const[name, setName] = useState('');
    const [room, setRoom] = useState('');
    const endPont = 'localhost:5000';
    useEffect(() => {
        const data = queryString.parse(location.search);
        const params = new URLSearchParams(location.search)
        console.log(params.get(""))
        console.log(data)

         const { name, room } = data;
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
    return (
        <h1>Chat</h1>
    )
}
export default Chat;