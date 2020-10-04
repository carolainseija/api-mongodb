//RUTAS - EXPRESS
const express = require("express");
const controller = require("../controller/userControllers");

//get devuelve toda los usuarios
async function theUsers(req, res) {
  try {
    const usuarios = await controller.allUsers();
    if (usuarios.length > 0) {
      res.status(200);
      res.send(usuarios);
    }
    res.status(404).send("no se pudo encontrar nada");
  } catch (e) {
    throw e;
  }
}

//addUsers
async function addUsers(req, res) {
  const newUser = req.body;
  try {
    const addUser = await controller.addUserCont(newUser);
    res.send(addUser);
    res.status(201);
  } catch (error) {
    res.status(400);
    res.send(
      "No es posible agregar usuario, verifica si esta validando bien todo los campos requeridos"
    );
  }
}

//delete users con id
async function deleteUsers(req, res) {
  let ids = req.body._id;
  try {
    const userForDelete = await controller.userDeleteCont(ids);
    res.send(userForDelete);
    res.status(200);
  } catch (error) {
    res.sendStatus(410);
  }
}

//put modifica  usuarios
async function modifyUser(req, res) {
  try {
    const nameMod = req.params.name;
    const userMod = req.body;
    const modiUser = await controller.modifyUseCont(nameMod, userMod);
    res.send(modiUser);
    res.status(201);
  } catch (error) {
    res.send("el usuario no se pudo modificar");
    res.status(400);
  }
}

//agrega una cancion favorita a un usuario especifico
async function addFavoriteSong(req, res) {
  try {
    const nameUser = req.params.user;
    const nameSong = req.params.song;
    const favs = await controller.addFavoriteSongCont(nameUser, nameSong);
    res.status(201).send(favs);
  } catch (e) {
    throw e;
  }
}

module.exports = {
  theUsers,
  addUsers,
  deleteUsers,
  modifyUser,
  addFavoriteSong,
};
