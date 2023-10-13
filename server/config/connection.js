const mongoose = require('mongoose');
//mongoose.set('strictQuery', false); 
mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://carolwargo:!Newbeginnings2023@cluster0.jplhrrc.mongodb.net/?retryWrites=true&w=majority');


module.exports = mongoose.connection;



