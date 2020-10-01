# api-mongodb

 
 Repositorio de api .

API  mongoDB, usando *Express*, *MongoAtlas*, *Mongoose*.


## ¿Como usar la API?

 ---------------------------------------------------------------------
**CONTRATO**

*general*

##### Coleccion Usuarios
- GET url/users -> devuelve toda la lista de usuarios.

##### Coleccion Canciones
- GET url/songs ->devuelve toda las canciones, sino hay devuelve un error.
- GET url/:name -> devuelve una cancion especifica.
- POST url/songs-> agrego una cancion  a la base de datos con song en el body formato JSON.
- DELETE url/:name  -> eliminar una cancion.
- PUT url/songs -> modifica una cancion.
>>>>>>> 
*para un usuario especifico*
- POST url/:name -> agrego una cancion a favorito.
- DELETE url/:name -> eliminar una cancion favorita.
 ---------------------------------------------------------------------
 ### Cual es la arquitectura que se uso para el codigo?
 -MVC M:model
      V:views
      C:controller
Cada carpeta tienen un *Readme.md* explicando que cosa va en cada uno, esto es para una mejor comprension del codigo.
