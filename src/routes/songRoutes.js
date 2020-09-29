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
    res.sendStatus(404);
    console.log("la cancion que busca no se encontro en la base de datos");
  }
};
//elimina cancion por nombre
async function searchSongForDelete(req, res) {
  let name = req.params.name;
  try{
   
    const songForDelete = await controller.songDeleteCont(name);
    res.send(songForDelete);

  } catch (error) {
    res.sendStatus(404);
    console.log("la cancion que busca para eliminar no se encontro en la base de datos");
  }
};



module.exports = {
  theSongs,
  songForName,
  searchSongForDelete
}