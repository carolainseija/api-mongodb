//controlador
const baseDeDatos = require("../model/songModels");

const allSongs = async() => {
    return await baseDeDatos.allSongsproyect();
}

module.exports = {
    allSongs
}
