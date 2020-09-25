//controlador
const baseDeDatos = require("../model/songModels");

const allSongs = async() => {
    return await baseDeDatos.allSongsproyect();
}

const songSearchCont = async(name) => {
    return await baseDeDatos.songSearchBd(name);
}


const addSongCont = async(newSong) => {
if(newSong.name && newSong.album && newSong.duration && newSong.artist)
    return await baseDeDatos.addSongBd(newSong);
}
module.exports = {
    allSongs,
    songSearchCont,
    addSongCont
}
