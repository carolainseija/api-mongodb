//RUTAS - EXPRESS
const express = require("express");
const controller = require('../controller/userControllers');

var app = express();
app.use(express.json());


//get devuelve toda las canciones
app.route("/")
  .get(async(req, res) => {
    try{
      const usuarios = await controller.allUsers();
      if(usuarios.length > 0) {
          res.status(200);
        res.send(usuarios)
      }
      res.status(404).send("no se pudo encontrar nada");
    } catch(e) {
      throw e;
    }
  })


  app.listen(3000);
  console.log("puerto 3000");
