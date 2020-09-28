//controlador
const baseDeDatos = require("../model/songModels");

const allSongs = async() => {
    return await baseDeDatos.allSongsproyect();
};

const songSearchCont = async(name) => {
    return await baseDeDatos.songSearchDB(name);
};




module.exports = {
    allSongs,
    songSearchCont
}