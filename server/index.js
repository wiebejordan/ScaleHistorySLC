require('dotenv').config({path:'./.env'});

const express = require('express'),
      massive = require('massive'),
      session = require('express-session'),
      authCtrl = require('./authController'),
      eventCtrl = require('./eventController'),
      mailCtrl = require('./mailController'),
      chatCtrl = require('./chatController'),
      postCtrl = require('./postController'),
      {SERVER_PORT, SESSION_SECRET, DB_URI} = process.env,
      app = require('express')(),
      server = require('http').createServer(app),
      socket = require('socket.io'),
      io = socket(server, {
        pingTimeout: 60000,
      });

      const path = require('path');

app.use(express.json());



app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: 'SESSION _SECRET',
  cookie: {maxAge: 1000 * 60 * 60 * 24 * 7}
}));

massive({
    connectionString: DB_URI,
    ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db);
    console.log('db connected')
}).catch(err => console.log('db not connected', err));


//login/register endpoints
app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)
app.post('/auth/logout', authCtrl.logout)
app.delete('/auth/delete/:player_id', authCtrl.deleteUser)

//session endpoints
app.get('/auth/me', authCtrl.keepUser)

//event register endpoints
app.post('/api/playerregister', eventCtrl.playerregister)
app.put('/api/addside/:user_id', eventCtrl.addSide)

//command room endpoints
app.get('/api/alliedplayers', eventCtrl.getAllies);
app.get('/api/axisplayers', eventCtrl.getAxis);

//mail endpoints
app.post('/api/email/:email', mailCtrl.email);
app.post('/api/GG2021reg/:email', mailCtrl.GG2021regEmail);

//blog post endpoints
app.get('/api/blogposts', postCtrl.getPosts);
app.get('/api/blogpost/:postid', postCtrl.getSinglePost);
app.post('/api/post/', postCtrl.newPost);

//chat endpoints
app.get('/api/alliedmessages', chatCtrl.getAlliedMessages);
app.post('/api/postalliedmessage', chatCtrl.postAlliedMessage);
app.get('/api/axismessages', chatCtrl.getAxisMessages);
app.post('/api/postaxismessage', chatCtrl.postAxisMessage);
//socket 

const history = []
 

io.on('connection', (socket) => {
  
  socket.on('allies-message', ({name, message}) => {
      io.emit('allies-message', {name, message})
  })
  socket.on('axis-message', ({name, message}) => {
    io.emit("axis-message", {name, message})
  })
  socket.on('global-message', ({name, message}) => {
    io.emit('global-message', {name, message})
  })
  
}) 

app.use(express.static(`${__dirname}/../build`))

app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

server.listen(SERVER_PORT, () => console.log(`Crushing it on port ${SERVER_PORT}`));
