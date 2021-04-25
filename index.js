import express from 'express';
import router from './routes/index.js';

//instancia
const app = express();

// Definir puerto
const port = process.env.PORT || 4000;

//Habilitar PUG (equivalente a HBS o EJS) (HBS seria lo mas parecido a react)
app.set('view engine', 'pug');

//obtener el año actual
app.use( (req, res, next) => {
    const year = new Date();
    res.locals.actualYear =year.getFullYear();     
    next();
})

//Definir carpeta publica
app.use(express.static('public'));

//agregar Router
app.use('/', router);

app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`)
})




















