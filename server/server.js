import express from 'express';
import config from 'dotenv';
import socket from 'socket.io';
import bodyParser from 'body-parser';
import users from './routers/user'
import './models/user'

config.config();

const app = express()

app.use(express.json())
app.use(bodyParser.json());
app.use(express.static('public'));


const port = process.env.PORT || 3000;
const server = app.listen(port, () => console.log('app running on port ', port))

app.use('/api/v1', users);

const io = socket(server);
io.on('connection', (socket) =>{

socket.on('chat', (data) =>{
    io.sockets.emit('chat', data);
});

socket.on('typing', (data) => {
    socket.broadcast.emit('typing', data);
})
});

