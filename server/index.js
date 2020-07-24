require('dotenv').config();

const express = require('express'),
      massive = require('massive'),
      session = require('express-session'),
      authCtrl = require('./authController'),
      eventCtrl = require('./eventController'),
      mailCtrl = require('./mailController'),
      {SERVER_PORT, SESSION_SECRET, DB_URI} = process.env,
      app = express();


app.use(express.json());

app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: SESSION_SECRET,
  cookie: {maxAge: 1000 * 60 * 60 * 24 * 7}
}));

massive({
    connectionString: DB_URI,
    ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db);
    console.log('db connected')
}).catch(err => console.log(err));


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



app.listen(SERVER_PORT, () => console.log(`Crushing it on port ${SERVER_PORT}`));