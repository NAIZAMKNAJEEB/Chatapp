const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const cors = require('cors');
app.use(cors());
const io = new Server(server,{
    cors: {
        origin: "https://chatapp-main-0uhk.onrender.com",
        methods: ["GET", "POST"],
    },
});


server.listen(3001, () => {
    console.log('listening on *:3001');
});
io.on("connection", (socket) => {
    console.log(socket.id);
    
    
    socket.on('sent', (data) => {
            console.log(data);
           
            
            io.emit('sent', data);
    })

    //socket.emit('connect',()=>{
        
    //})
    
    socket.on('disconnect',()=>{
        console.log(`disconnected: ${socket.id}`);
    });
});
