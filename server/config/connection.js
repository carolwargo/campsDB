const mongoose = require('mongoose');
//mongoose.set('strictQuery', false); 
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/campsDB');


module.exports = mongoose.connection;



