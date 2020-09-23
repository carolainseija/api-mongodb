//RUTAS - EXPRESS
const express = require("express");
const controller = require('../controller/songController');

var app = express();
app.use(express.json());


//get devuelve toda las canciones
app.route("/")
  .get(async(req, res) => {
    try{
      const canciones = await controller.allSongs();
      if(canciones.length > 0) {
          res.status(200);
        res.send(canciones)
      }
      res.status(404).send("no se pudo encontrar nada");
    } catch(e) {
      throw e;
    }
  })


  app.listen(3000);
  console.log("puerto 3000");
