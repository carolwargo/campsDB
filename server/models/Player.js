const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const playerSchema = new Schema({
    playerName: {
      type: Schema.Types.ObjectId,
      ref: "Profile",
      required: true,
    },
    playerDateOfBirth: {
      type: Date,
    },
    sessions: [
      {
        type: String,
        trim: true,
      },
    ],
  });

  const Player = model('Player', playerSchema);

  module.exports = Player;
  