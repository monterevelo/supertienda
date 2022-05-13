const routerAPI = require('./routes');
const express = require('express');
const app = express();
const port = 3000;
app.use(express.static('public'));  //Esto hace que la app pueda publicar cosas estáticas
app.use(express.json());  //Esto se hace para que la app pueda identificar objetos JSON en las actualizaciones (PUT,PATCH)

routerAPI(app);

app.listen(port, ()=>{
    console.log('My port is listering '+port);
})
