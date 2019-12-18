import express from 'express';
import config from 'dotenv';
import socket from 'socket.io';
import http from 'http';
import bodyParser from 'body-parser';
import users from './routers/user'
import './models/user'
import router from './routers/user';

config.config();
const port = process.env.PORT || 3000;
const app = express()
const server = http.createServer(app);
const io = socket(server);

io.on('connection', (socket) =>{
    console.log('io connection');
    socket.on('join', ({ name, room }, callback) =>{
        console.log(name, room);

    })
    socket.on('disconnect', () =>{
        console.log('user left');
    })
})
server.listen(port, () =>  console.log('app running on port ', port))

app.use(express.json())
app.use(bodyParser.json());
app.use(express.static('public'));

app.use('/api/v1', users);


export default app;
