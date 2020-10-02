//Server principla.
const mongoose = require("mongoose");
const userRoutes = require('./routes/userRoutes');
const songRoutes = require('./routes/songRoutes');
const express = require("express");
var server = express();
server.use(express.json());
//cors
const cors = require('cors');
server.use(cors());

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
server.post('/users', userRoutes.addUsers);
server.delete('/users', userRoutes.deleteUsers);
server.put('/:name', userRoutes.modifyUser);


//canciones
server.get('/songs', songRoutes.theSongs);
server.get('/:name', songRoutes.songForName);
server.delete('/:name', songRoutes.searchSongForDelete);
server.post('/songs', songRoutes.addSongForBody);
server.put('/:name', songRoutes.modify);


//agrega canciones a un usuario

server.post('/users/:user/:song', userRoutes.myFavoriteSong);








//puerto
server.listen(process.env.PORT);
console.log("puerto 3000");