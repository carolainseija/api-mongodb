//RUTAS - EXPRESS
const express = require("express");
const controller = require('../controller/userControllers');



//get devuelve toda los usuarios

async function theUsers(req, res) {
  try{
    const usuarios = await controller.allUsers();
    if(usuarios.length > 0) {
        res.status(200);
      res.send(usuarios)
    }
    res.status(404).send("no se pudo encontrar nada");
  } catch(e) {
    throw e;
  }}



 
module.exports = {
  theUsers
}
