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




module.exports = {
    allSongs,
    songSearchCont,
    songDeleteCont
}