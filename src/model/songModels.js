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



module.exports = {
  allSongsproyect
};
