const routerAPI = require('./routes');
const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
//const path = require('path');
//const port = process.env.PORT || 8080;

//app.use(express.static('public'));  //Esto hace que la app pueda publicar cosas estáticas (Esto solo es una prueba)
app.use(express.json());  //Esto se hace para que la app pueda identificar objetos JSON en las actualizaciones (PUT,PATCH)
app.use(cors());

//frontend
//app.use(express.static(path.join(__dirname, 'build')));


//app.get('/*', (req, res) => {
//res.sendFile(path.join(__dirname, 'build', 'index.html'));
//});


routerAPI(app);  //Esto me trae las rutas (de la carpeta routes)

//Para verificar el puerto que está escuchando
app.listen(port, ()=>{
    console.log('Running on port',port);
});
