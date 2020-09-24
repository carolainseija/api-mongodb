//MONGOOSE

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//Coneccion

const uri =
  "mongodb+srv://carolain-seija:crosiljs1@cluster0.dk3mk.mongodb.net/proyectotres?retryWrites=true&w=majority";
mongoose.connect(uri, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
});
const db = mongoose.connection;
//open es un evento e coneccion de mongoose
//on se ejecuta siempre que se necesita
db.on("error", console.error.bind(console, "connection error"));
//este se va a ejecutar una sola vez "once"
db.once("open", function () {
  console.log("MongoDB Connected successfully");
});

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
  allUsersproyect,
};
