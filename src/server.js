//Server principla.
const mongoose = require("mongoose");
const userRoutes = require('./routes/userRoutes');
const songRoutes = require('./routes/songRoutes');
const express = require("express");
var server = express();
server.use(express.json());

//CONEXION
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

//usuarios
server.get('/users' , userRoutes.theUsers);

//canciones
server.get('/songs', songRoutes.theSongs);
server.get('/songs/:name', songRoutes.songForName);
server.delete('/delete/:name', songRoutes.searchSongForDelete);
server.post('/addList', songRoutes.addSongForBody);





//puerto
server.listen(3000);
console.log("puerto 3000");