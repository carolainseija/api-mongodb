const express = require("express");


var app = express();
app.use(express.json());


//get devuelve todo los usuarios
app.route("/")
  .get(async(req, res) => {
    res.send('todo ok');
  })


  app.listen(3000);
  console.log("puerto 3000");