//MONGOOSE

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//Coneccion
mongoose.connect(
  "mongodb+srv://carolain-seija:crosiljs1@cluster0.dk3mk.mongodb.net/proyectotres?retryWrites=true&w=majority",
  { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function () {
  console.log("MongoDB Connected successfully");
});

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

const songSearchBd = async (name) => {
  
  const songName = await Song.find({name: name});
  return songName;
};

module.exports = {
    allSongsproyect,
    songSearchBd
};
