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


  /*
  async function myFavoriteSong(req, res) {
    
    try{
      const favs = await controller.favorites();
    res.status(4004).send('algo salio mal');
    } catch(e) {
      throw e;
    }
      
  }*/

  //addUsers
  async function addUsers(req, res) {
    const newUser = req.body;
    try{
     
      const addUser = await controller.addUserCont(newUser);
      res.send(addUser);
  
    } catch (error) {
      res.sendStatus(404);
      console.log('usuario invalido');
    }
  };

  //deleteUsers
  async function deleteUsers(req, res) {
    let ids = req.body._id;
  try{
   
    const songForDelete = await controller.songDeleteCont(ids);
    res.send(songForDelete);

  } catch (error) {
    res.sendStatus(404);
    console.log("no se pudo");
  }
  };

 
module.exports = {
  theUsers,
  addUsers,
  deleteUsers
}
