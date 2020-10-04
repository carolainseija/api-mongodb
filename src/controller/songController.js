//controlador
const model = require("../model/songModels");

const allSongs = async() => {
    return await model.allSongsproyect();
};

const songSearchCont = async(name) => {
if(songSearchCont.length > 0){
    return await model.songSearchDB(name);
}else {
    return ('no se encontro nada');
}
};

const songDeleteCont = async(name) => {
    return await model.songDeleteBD(name);
};

const addSongCont = async(newSong) => {
    if(newSong.name  && newSong.album && newSong.duration && newSong.artist) {
        return await model.addSongBD(newSong);
    }else {
        return('imposible seguir con su peticion,algo salio mal');
    }
};

const modifySongsCont = async(nameSong, modi) => {
    return await model.modifySongsBD(nameSong, modi);
};


module.exports = {
    allSongs,
    songSearchCont,
    songDeleteCont,
    addSongCont,
    modifySongsCont
}