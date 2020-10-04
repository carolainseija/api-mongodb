//MONGOOSE

const mongoose = require("mongoose");
const Schema = mongoose.Schema;


//ESQUEMA
let songSchema = new Schema({
  name: { type: String },
  album: {type: String},
  artist: { type: String },
});
//MODELO
const Song = mongoose.model("Song", songSchema);

//FUNCIONES
//devuele toda las canciones
const allSongsproyect = async () => {
  const theSongs = await Song.find();
  return theSongs;
};

const songSearchDB = async(name) => {
  const songFind = await Song.find({name: name});
  return songFind;

};
const songDeleteBD = async(name) => {
  const songDeleteFind = await Song.findOneAndDelete({name: name});
  return('este archivo ya no existe:' + " " + songDeleteFind);
 
};
const addSongBD = async(newSong) => {
 var saveSong =  new Song(newSong);
 await saveSong.save();
 return('cancion agregada con exito' + " " +  saveSong);
}

const modifySongsBD = async(nameSong, modi) => {
  const saveSongModify = await Song.findOneAndUpdate({name: nameSong}, modi);
  saveSongModify.save();
}



module.exports = {
  allSongsproyect,
  songSearchDB,
  songDeleteBD,
  addSongBD,
  modifySongsBD,
  Song
};
