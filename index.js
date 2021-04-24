import express from 'express';
import router from './routes/index.js';

//instancia
const app = express();

// Definir puerto
const port = process.env.PORT || 4000;

//agregar Router
app.use('/', router);


app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`)
})




















