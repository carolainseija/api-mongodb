//MONGOOSE

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/*Song = mongoose.model('Song');*/



//ESQUEMA
let usersSchema = new Schema({
  name: { type: String },
  lastName: { type: String },
  mail: {type: String}
  
});
//MODELO
let Users = mongoose.model("Users", usersSchema);

//FUNCIONES

const allUsersproyect = async () => {
  const theUsers = await Users.find();
  return theUsers;
};

const addUserBD = async(newUser) => {
  var saveUs =  new Users(newUser);
  await saveUs.save();
 }

/*
const mysongsBD = async () => {
  return await Users.find({}).populate('favoriteSongs');
}
*/
const songDeleteBD = async(ids) => {
  const songDeleteFind = await Users.findByIdAndRemove({_id: ids});
  return songDeleteFind;
}
 


module.exports = {
  allUsersproyect,
  addUserBD,
  songDeleteBD
}
