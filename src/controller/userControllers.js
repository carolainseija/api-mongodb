//controlador
const baseDeDatos = require("../model/userModels");

const allUsers = async() => {
    return await baseDeDatos.allUsersproyect();
}



const addUserCont = async(newUser) => {
    
        return await baseDeDatos.addUserBD(newUser);
};

const songDeleteCont = async(ids) => {
    return await baseDeDatos.songDeleteBD(ids);
};

const modifyUseCont = async(nameMod, songMod) => {
    
return await baseDeDatos.userModBD(nameMod, songMod);
};

const favorites = async(nameUser, songFav)=> {
   
    return await baseDeDatos.mysongsBD(nameUser, songFav);

};

module.exports = {
    allUsers,
    addUserCont,
    songDeleteCont,
    modifyUseCont,
    favorites
}
