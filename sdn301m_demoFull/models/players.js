const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const playerSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      required: true,
    },
    club: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
var Players = mongoose.model("worldcup2022", playerSchema);
module.exports = Players;
