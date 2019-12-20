import express from 'express';
import config from 'dotenv';
import socket from 'socket.io';
import http from 'http';
import cors from 'cors';
import bodyParser from 'body-parser';
import users from './routers/user';
import userInfo from './service/service'
import  {  addUser, removeUser, getUser, getUsersInRoom  } from './socketUser/User';
import './models/user';

config.config();
const port = process.env.PORT || 3000;
const app = express();
app.use(express.json())
app.use(bodyParser.json());
app.use(cors());

const server = http.createServer(app);
const io = socket(server);

io.on('connection', (socket) =>{
    socket.on('join', ({ userName, password }, callback) =>{
       const { error, user } = addUser({ id: socket.id, userName, password});
       if(error) return callback(error);
       socket.emit('message', {user: 'admin', text: `${user.userName}, welcome!`});
       socket.broadcast.to(user.password).emit('message', { user: 'admin', text: `${user.userName} has joined`});

       socket.join(user.password);

       io.to(user.password).emit('passworddata', { password : user.password, users: getUsersInRoom(user.password)})
       callback();
    });
    socket.on('sendMessage', (message, callback) => {
        const user = getUser(socket.id);
        io.to(user.password).emit('message', { user: user.userName, text: message});
        io.to(user.password).emit('userNameData', { userName: user.password, users: getUsersInRoom(user.password)});
        callback();
    })
    socket.on('disconnect', () =>{
        const user = removeUser(socket.id);

        if(user){
            io.to(user.password).emit('message', {user: 'admin', text: `${user.userName} has left`})
        }
    })
})
app.use('/api/v1', users);
server.listen(port, () =>  console.log('app running on port ', port))

export default app;
