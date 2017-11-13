const express = require('express');
const mongoose = require('mongoose');


const mongoUrl = 'mongodb://MarceloPedroRedes:marcelopedro1@ds255715.mlab.com:55715/efeito-mateus'
mongoose.connect(mongoUrl, {
  useMongoClient: true
});
var db = mongoose.connection;

db.createCollection("Videos", function(err, res) {
  if (err) console.log(err);
  console.log(("Collection created!"))
  db.close();
});

// Constants
const PORT = 8081;
const HOST = '0.0.0.0';

// App
const app = express();

app.set('views', './views');
app.set('view engine', 'jade');


app.get('/', (req, res) => {
  res.render('home', {
    title: 'Welcome',
    user: { 'fullname' : 'Marcelo'}
  });
});

app.listen(PORT);
console.log(`Running on http://${HOST}:${PORT}`);