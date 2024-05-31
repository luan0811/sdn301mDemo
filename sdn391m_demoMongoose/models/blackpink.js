const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const blackpinkSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const Blackpink = mongoose.model("blackpink", blackpinkSchema);
module.exports = Blackpink;
