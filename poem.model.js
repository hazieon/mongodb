//"use strict"

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PoemSchema = new Schema({
  title: {
    type: String,
    required: true, //require this field
    unique: true, //ensure this is unique
  },
  author: String,
  detail: { poemNumber: Number, season: String, theme: String },
  added: { type: Date, default: Date.now }, //set a default value or key}
  keyChars: Array,
  anthology: Boolean,
  //   poem: { type: Schema.ObjectId, ref: "poem" },
  poemEng: String,
  PoemJp: String,
});

module.exports = mongoose.model("Poem", PoemSchema);
