const { Schema, model } = require("mongoose");

let MusicSchema = new Schema({
  Guild: String,
  Channel: String,
  Message: String,
  voiceChannel: String,
});

module.exports = model("Music", MusicSchema);
