//MONGOOSE

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//Coneccion
mongoose.connect(
  "mongodb+srv://carolain-seija:crosiljs1@cluster0.dk3mk.mongodb.net/proyectotres?retryWrites=true&w=majority",
  { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
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
    allUsersproyect
};
