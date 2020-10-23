//MONGOOSE
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { Song } = require("./songModels");

//ESQUEMA
let usersSchema = new Schema({
  name: { type: String },
  lastName: { type: String },
  mail: { type: String },
  age: { type: String },
  favoriteSongs: [{ type: Schema.Types.ObjectId, ref: "Song" }],
});
//MODELO
let Users = mongoose.model("Users", usersSchema);

//FUNCIONES
const allUsersproyect = async () => {
  const theUsers = await Users.find().populate('favoriteSongs');
  return theUsers;
};

const addUserBD = async (newUser) => {
  var saveUs = new Users(newUser);
  await saveUs.save();
  return "nuevo usuario:" + " " + saveUs;
};

const userDeleteBD = async (ids) => {
  const userDeleteFind = await Users.findByIdAndRemove({ _id: ids });
  return "Este archivo ya no existe, fue eliminado:" + " " + userDeleteFind;
};

const userModBD = async (nameMod, userMod) => {
  const songModifyFind = await Users.findOneAndUpdate(
    { name: nameMod },
    userMod
  );
  songModifyFind.save();
  return "Cancion Modificada:" + " " + songModifyFind;
};

const addFavoriteSongBD = async (nameUser, nameSong) => {
  //encuentro el usuario (nameUser)
  const user = await Users.findOne({ name: nameUser });
  //agrego la cancion al usuario
  console.log(user);
  user.favoriteSongs.push(nameSong);
  await user.save();
};

const deleteFavSongDB = async (songForDelete, userParams) => {
  const userWitchSong = await Users.findOne({name: userParams});
  userWitchSong.favoriteSongs.delete(songForDelete);
  await userWitchSong.save();
}




module.exports = {
  allUsersproyect,
  addUserBD,
  userDeleteBD,
  userModBD,
  addFavoriteSongBD,
  deleteFavSongDB
};
