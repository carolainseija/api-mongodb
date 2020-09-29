//controlador
const baseDeDatos = require("../model/songModels");

const allSongs = async() => {
    return await baseDeDatos.allSongsproyect();
};

const songSearchCont = async(name) => {
    return await baseDeDatos.songSearchDB(name);
};

const songDeleteCont = async(name) => {
    return await baseDeDatos.songDeleteBD(name);
};


const addSongCont = async(newSong) => {
    if(newSong.name  && newSong.album && newSong.artist) {
        return await baseDeDatos.addSongBD(newSong);
    }else {
        return('denegado');
    }
    
};



module.exports = {
    allSongs,
    songSearchCont,
    songDeleteCont,
    addSongCont
}