import express from 'express';
import config from 'dotenv';
import socket from 'socket.io';
import http from 'http';
import bodyParser from 'body-parser';
import users from './routers/user';
import  {  addUser, removeUser, getUser, getUsersInRoom  } from './socketUser/User'
import './models/user'

config.config();
const port = process.env.PORT || 3000;
const app = express()
const server = http.createServer(app);
const io = socket(server);

io.on('connection', (socket) =>{
    socket.on('join', ({ name, room }, callback) =>{
       const { error, user } = addUser({ id: socket.id, name, room});

       if(error) return callback(error);
       socket.emit('message', {user: 'admin', text: `${user.name}, welcome to the room ${user.room}`});
       socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined`});

       socket.join(user.room);
       callback();
    });
    socket.on('sendMessage', (message, callback) => {
        const user = getUser(socket.id);
        io.to(user.room).emit('message', { user: user.name, text: message});
        callback();
    })
    socket.on('disconnect', () =>{
        console.log('user left');
    })
})
server.listen(port, () =>  console.log('app running on port ', port))

app.use(express.json())
app.use(bodyParser.json());
app.use(express.static('client'));


app.use('/api/v1', users);


export default app;
