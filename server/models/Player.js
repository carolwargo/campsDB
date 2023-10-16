const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const playerSchema = new Schema(
  {
    playerName: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    playerDateOfBirth: {
      type: Date,
    },
    },
);

module.exports = mongoose.model("Player", playerSchema);