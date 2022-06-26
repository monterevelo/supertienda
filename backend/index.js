const routerAPI = require('./routes');
const express = require('express');
var cors = require('cors');
const app = express();
const port = 5000;

app.use(express.static('public'));  //Esto hace que la app pueda publicar cosas estáticas (Esto solo es una prueba)
app.use(express.json());  //Esto se hace para que la app pueda identificar objetos JSON en las actualizaciones (PUT,PATCH)
app.use(cors());

routerAPI(app);  //Esto me trae las rutas (de la carpeta routes)

//Para verificar el puerto que está escuchando
app.listen(port, ()=>{
    console.log('My port is listening '+port);
})
