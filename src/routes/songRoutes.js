//RUTAS - EXPRESS
const express = require("express");

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
  }}




module.exports = {
  theSongs
}