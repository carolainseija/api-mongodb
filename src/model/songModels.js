//MONGOOSE

const mongoose = require("mongoose");
const Schema = mongoose.Schema;


//ESQUEMA
let songSchema = new Schema({
  name: { type: String },
  artist: { type: String },
});
//MODELO
let Song = mongoose.model("Song", songSchema);

//FUNCIONES
//devuele toda las canciones
const allSongsproyect = async () => {
  const theSongs = await Song.find();
  return theSongs;
};

const songSearchDB = async(name) => {
  const songFind = Song.find({name: name});
  return songFind;
};





module.exports = {
  allSongsproyect,
  songSearchDB
};
