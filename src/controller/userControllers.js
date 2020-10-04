//controlador
const model = require("../model/userModels");

const allUsers = async() => {
    return await model.allUsersproyect();
}

const addUserCont = async(newUser) => {  
        return await model.addUserBD(newUser);
};

const userDeleteCont = async(ids) => {
    return await model.userDeleteBD(ids);
};

const modifyUseCont = async(nameMod, userMod) => {
return await model.userModBD(nameMod, userMod);
};

const addFavoriteSongCont = async(nameUser, nameSong)=> {
    return await model.addFavoriteSongBD(nameUser, nameSong);
};

module.exports = {
    allUsers,
    addUserCont,
    userDeleteCont,
    modifyUseCont,
    addFavoriteSongCont
}
