//RUTAS - EXPRESS
const controller = require("../controller/songController");

//get devuelve toda las canciones
async function theSongs(req, res) {
  try{
    const canciones = await controller.allSongs();
    if(canciones.length > 0) {
        res.status(200);
      res.send(canciones)
    }
    res.status(404).send("no se pudo encontrar nada");
  } catch(e) {
    throw e;
  }};

//devuelve cancion por nombre
async function songForName(req, res) {
  let name = req.params.name;
  try{
    const songSearch = await controller.songSearchCont(name);
    res.send(songSearch);
  } catch (error) {
    res.send('la cancion que busca no se encontro en la base de datos');
    res.status(404);
  }
};

//elimina cancion por nombre
async function searchSongForDelete(req, res) {
  let name = req.params.name;
  try{
    const songForDelete = await controller.songDeleteCont(name);
    res.send(songForDelete);
res.status(200);
  } catch (error) {
    res.send("la cancion que busca ya ah sido eliminada");
    res.status(410);
  }
};

//agrega cancion desde el body
async function addSongForBody(req, res) {
  let newSong = req.body;
  try{
    const addSong = await controller.addSongCont(newSong);
    res.send(addSong);
    res.status(201);
  } catch (error) {
    res.sendStatus(400);
    console.log('la cancion no se puede agregar');
  }
};


//modifica una cancion desde el body
async function modify(req, res) {
  try {
    const nameSong = req.params.name;
    const modi = req.body;
    const modifySongs = await controller.modifySongsCont(nameSong, modi);
      res.status(201).send(modifySongs);
  } catch (e) {
    res.status(400);
    res.send('la cancion no se pudo modificar');
  }
};


module.exports = {
  theSongs,
  songForName,
  searchSongForDelete,
  addSongForBody,
  modify
}