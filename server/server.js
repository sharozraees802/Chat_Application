const express = require("express");
const socketio = require("socket.io");
const http = require("http");

const PORT = process.env.PORT || 5000;

const router = require("./Router/router");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on("connection", (socket) => {
  console.log("we have new connection");
  socket.on("discoonect", () => {
    console.log("user had left");
  });
});

app.use(router);

server.listen(PORT, () => console.log(`server has started on port ${PORT}`));
