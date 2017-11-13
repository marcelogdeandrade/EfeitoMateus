const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://MarceloPedroRedes:marcelopedro1@ds255715.mlab.com:55715/efeito-mateus', { useMongoClient: true });
mongoose.Promise = global.Promise;

var videos = mongoose.model('Videos', { video_id: String });

// Constants
const PORT = 8081;
const HOST = '0.0.0.0';

// App
const app = express();

app.set('views', './views');
app.set('view engine', 'jade');


app.get('/', (req, res) => {
  res.render('home', {
    videos: ['https://www.youtube.com/embed/G4XkoysO_Pk']
  });
});

app.listen(PORT);
console.log(`Running on http://${HOST}:${PORT}`);