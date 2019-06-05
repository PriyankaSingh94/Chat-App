const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const mongoose = require('mongoose')

var app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)
mongoose.connect('mongodb://localhost:27017/chatapp', { useNewUrlParser: true })
mongoose.Promise = global.Promise;

app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '../dist')))

const Message = require('./models/message')

io.on('connection', (socket) => {
  console.log('user');
  let user = '';

  socket.on('new user', (data) => {
    user = data;
    socket.broadcast.emit('user connected', user);
    Message.find().then(rec => {
      if (rec) {
        socket.emit('all messages', rec);
      } else {
        res.send([])
      }
    })
  })

  socket.on('new message', (data) => {
    const msg = new Message({
      msg_id: mongoose.Types.ObjectId(),
      msg: data,
      user: user
    });
    msg.save().then(rec => {
      if (rec) {
        io.emit('message recived', rec);
      } else {
        res.send([])
      }
    })
  })

  socket.on('disconnect', (data) => {
    socket.broadcast.emit('user disconnected', user);
  })
  
})

server.listen(3000, () => console.log('server started listening'))
