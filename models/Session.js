const mongoose = require('mongoose');

const { Schema } = mongoose;

const sessionSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },

  price: {
    type: Number,
    required: true,
    min: 0.99
  },

  playerName: {
    type: String,
    required: false,
    trim: true
  },

 
});

const Session = mongoose.model('Session', sessionSchema);

module.exports = Session;
