//RUTAS - EXPRESS
const express = require("express");
const controller = require("../controller/songController");

var app = express();
app.use(express.json());

//get devuelve toda las canciones
app.route("/songs").get(async (req, res) => {
  try {
    const canciones = await controller.allSongs();
    if (canciones.length > 0) {
      res.status(200);
      res.send(canciones);
    }
    res.status(404).send("no se pudo encontrar nada");
  } catch (e) {
    throw e;
  }
});

//get devuelve una cancon especifica
app.route("/:nameSong").get(async (req, res) => {
  try {
    const name = req.params.nameSong;
    let songSearch = await controller.songSearchCont(name);
    res.send(songSearch);
    res.status(200);
  } catch (error) {
    res.sendStatus(404);
    console.log("la cancion que busca no se encontro en la base de datos");
  }
});

//post Agrega una cancion desde el body a la base de datos
app.route('/addList')
.post(async(req, res) => {
try{
  const newSong = req.body;
const addSongBaseDate = controller.addSongCont(newSong);
res.send(addSongBaseDate);
} catch(error) {
  res.send("No se pudo agregar cancion a su base de datos");
  res.status(400);
}
});

app.listen(3000);
console.log("puerto 3000");
