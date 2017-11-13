var mongoose = require('mongoose')
mongoose.connect('mongodb://MarceloPedroRedes:marcelopedro1@ds255715.mlab.com:55715/efeito-mateus');
// mongoose.connect('mongodb://localhost/efeito-mateus', { useMongoClient: true });
mongoose.Promise = global.Promise

export default mongoose