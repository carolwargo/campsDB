const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/tech-friends');

module.exports = mongoose.connection;



//const mongoose = require('mongoose');
//mongoose.set('strictQuery', false); 
//mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/campsDB');


//module.exports = mongoose.connection;



