//controlador
const baseDeDatos = require("../model/userModels");

const allUsers = async() => {
    return await baseDeDatos.allUsersproyect();
}

/*
const favorites = async()=> {
    return await baseDeDatos.mysongsBD();
}*/

const addUserCont = async(newUser) => {
    
        return await baseDeDatos.addUserBD(newUser);
};

const songDeleteCont = async(ids) => {
    return await baseDeDatos.songDeleteBD(ids);
};

const modifyUseCont = async(nameMod, songMod) => {
return await baseDeDatos.userModBD(nameMod, songMod);
};

module.exports = {
    allUsers,
    addUserCont,
    songDeleteCont,
    modifyUseCont
}
