//MONGOOSE

const mongoose = require("mongoose");
const Schema = mongoose.Schema;



//ESQUEMA
let usersSchema = new Schema({
  name: { type: String },
  artist: { type: String },
});
//MODELO
let Users = mongoose.model("Users", usersSchema);

//FUNCIONES

const allUsersproyect = async () => {
  const theUsers = await Users.find();
  return theUsers;
};

module.exports = {
  allUsersproyect
}
