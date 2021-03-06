const express = require('express')
const path = require('path')
const socketio= require('socket.io')
const http = require('http')




//initialization of app object
const app = express();

//Create a server bia http
const server = http.createServer(app)

// inititate the variable io with server for connecion
const io = socketio(server)

// we give a path for frontend
app.use('/', express.static(path.join(__dirname, 'Frontend')))

//sed server cuz it  the same thing 
// app.listen(2345,() => console.log('Website hosted on port 2345'));


//For listening the client side 
io.on('connection',(socket)=>{
    console.log(" we got a forword from Client "+ socket.id)
    // var id =socket.id
    socket.on('Faculty_Ques', (questionArray)=>{        
        console.log("test",questionArray);
        var clients = 0;
        // socket.broadcast.emit('msg',{ description: clients + ' clients connected!'});

        socket.broadcast.emit('msg',questionArray);     
    });        
})


server.listen(4000,()=> console.log('Website hosted on port 4000'));