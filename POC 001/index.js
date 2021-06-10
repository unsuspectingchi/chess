const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const path = require("path");
const io = new Server(server);

app.use(express.static(path.join(__dirname, "public")));

io.on("connection", (socket) => {
  console.log("A user has connected.");

  socket.on("disconnect", () => {
    console.log("A user has disconnected.");
  });

  socket.on("test", (message) => {
    console.log(message);
  });
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
