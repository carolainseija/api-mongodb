## ROUTAS
-
Aca van las vistas/ routas
Las vistas, como su nombre nos hace entender, contienen el código de nuestra aplicación que va a producir la visualización de las interfaces de usuario, o sea, el código que nos permitirá renderizar los estados de nuestra aplicación en HTML. En las vistas nada más tenemos los códigos HTML y PHP que nos permite mostrar la salida.

En la vista generalmente trabajamos con los datos, sin embargo, NO se realiza un acceso directo a éstos. Las vistas requerirán los datos a los modelos y ellas se generará la salida, tal como nuestra aplicación requiera.
*Aqui va EXPRESS*


### Codigo de ejemplo:

```js
//requiero express  y uso formato Json
const express = require("express");
var app = express();
app.use(express.json());

//aca llamo a las peticiones http:
app.route("/")
  .get(async(req, res) => {
    res.send('todo ok');
  })

//puerto donde quiero que se escuche:
  app.listen(puerto);
```

