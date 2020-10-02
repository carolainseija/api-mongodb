//MONGOOSE

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//MODELO de Song
let Song = mongoose.model("Song", songSchema);



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



const songDeleteBD = async(ids) => {
  const songDeleteFind = await Users.findByIdAndRemove({_id: ids});
  return songDeleteFind;
}

const userModBD = async(nameMod, songMod) => {
  const songModifyFind  = await Users.findOneAndUpdate({name: nameMod}, songMod);
  songModifyFind.save();

}

const mysongsBD = async (nameUser, songFav) => {
   //envuentro el usuario (nameUser)
   const theUser = await Users.findOne({name: nameUser});
    //encuentro la cancion que quiero (userFav)
    const theSongFav = await Song.findOne({name: songFav});
    //debo agregar la cancion
    const addFav = await Users.aggregate({theSongFav});
  return await Users.find({}).populate('favoriteSongs');
}



module.exports = {
  allUsersproyect,
  addUserBD,
  songDeleteBD,
  userModBD,
  mysongsBD
}
