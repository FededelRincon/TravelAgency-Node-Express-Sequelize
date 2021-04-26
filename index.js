import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';

//instancia
const app = express();

//conectar la base de datos
db.authenticate()
    .then( () => console.log('Base de datos conectada'))
    .catch( error => console.log(error));


// Definir puerto
const port = process.env.PORT || 4000;

//Habilitar PUG (equivalente a HBS o EJS) (HBS seria lo mas parecido a react)
app.set('view engine', 'pug');

//obtener el año actual
app.use( (req, res, next) => {
    const year = new Date();
    res.locals.actualYear =year.getFullYear();   
    res.locals.nombresitio = "Agencia de Viajes";  
    next();
})

//Definir carpeta publica
app.use(express.static('public'));

//agregar Router
app.use('/', router);

app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`)
})




















