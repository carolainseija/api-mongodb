//controlador
const baseDeDatos = require("../model/userModels");

const allUsers = async() => {
    return await baseDeDatos.allUsersproyect();
}

module.exports = {
    allUsers
}
