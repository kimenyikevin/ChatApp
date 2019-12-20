import express from 'express';
import config from 'dotenv';
import socket from 'socket.io';
import http from 'http';
import cors from 'cors';
import path from 'path';
import bodyParser from 'body-parser';
import users from './routers/user';
import webpack, { Compiler } from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware  from 'webpack-hot-middleware';
// import webpackConfig from  '../webpack.config';
import  {  addUser, removeUser, getUser, getUsersInRoom  } from './socketUser/User';
import './models/user';

config.config();
const port = process.env.PORT || 3000;
const app = express();
// const compiler = webpack(webpackConfig);
app.use(express.json())
app.use(bodyParser.json());
app.use(cors());
// app.use(webpackMiddleware(compiler));
app.use(express.static(path.join(__dirname, 'build')))
// app.use(webpackHotMiddleware(compiler, {
//     hot: true,
//     publicPath: webpackConfig.output.publicPath,
//     noInfo: true
// }));



const server = http.createServer(app);
const io = socket(server);

io.on('connection', (socket) =>{
    socket.on('join', ({ name, room }, callback) =>{
       const { error, user } = addUser({ id: socket.id, name, room});

       if(error) return callback(error);
       socket.emit('message', {user: 'admin', text: `${user.name}, welcome to the room ${user.room}`});
       socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined`});

       socket.join(user.room);

       io.to(user.room).emit('roomdata', { room : user.room, users: getUsersInRoom(user.room)})
       callback();
    });
    socket.on('sendMessage', (message, callback) => {
        const user = getUser(socket.id);
        io.to(user.room).emit('message', { user: user.name, text: message});
        io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room)});
        callback();
    })
    socket.on('disconnect', () =>{
        const user = removeUser(socket.id);

        if(user){
            io.to(user.room).emit('message', {user: 'admin', text: `${user.name} has left`})
        }
    })
})
app.use(  (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use('/api/v1', users);
app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, 'build', '../public/index.html'))
})
server.listen(port, () =>  console.log('app running on port ', port))

export default app;
