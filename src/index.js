/*llamando a epxpress*/

const express = require('express')
const app = express();
const port = 3000;

/** * @router title - las importacion de las rutas */

app.get('/inicio',(req,res)=> {
   res.send("hello word");
})

app.listen(port,() => {
  console.log('servidor activado')
})
