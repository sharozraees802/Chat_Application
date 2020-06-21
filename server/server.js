const express = require("express");
const socketio = require("socket.io");
const http = require("http");

const{ addUser, removeUser, getUser, getUserinRoom } = require('./users'); 

const PORT = process.env.PORT || 5000;

const router = require("./Router/router");
const { use } = require("./Router/router");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on("connection", (socket) => {
  socket.on("join", ({ name, room }, callback) => {
   const {error ,user}=addUser({id:socket.id,name,room});

   if(error) return callback(error);
  socket.emit('message',{user:'admin',text:`${user.name},welcome  to the room ${user.room}`});
  socket.broadcast.to(user.room).emit('message',{user:'admin',text:`${user.name}, has joined!`});
   socket.join(user.room);
   callback()
  });

  socket.on("discoonect", () => {
    console.log("user had left");
  });
});

app.use(router);

server.listen(PORT, () => console.log(`server has started on port ${PORT}`));
