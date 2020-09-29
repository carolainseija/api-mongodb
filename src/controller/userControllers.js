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

module.exports = {
    allUsers,
    addUserCont,
    songDeleteCont
}
