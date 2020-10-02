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

  //delete users con id
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

//put modifica canciones
async function modifyUser(req, res){
  try{
const nameMod = req.params.name;
const songMod = req.body;
const modiUser = await controller.modifyUseCont(nameMod, songMod);
res.send(modiUser);

  }catch(error){
    res.send('no');

  }
};


async function myFavoriteSong(req, res) {
    
  try{
    const nameUser = req.params.user;
    const songFav = req.params.song;
    const favs = await controller.favorites(nameUser, songFav);
  res.status(4004).send(favs);
  } catch(e) {
    throw e;
  }
    
}





module.exports = {
  theUsers,
  addUsers,
  deleteUsers,
  modifyUser,
  myFavoriteSong
}
