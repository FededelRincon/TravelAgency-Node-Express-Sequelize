import { Viaje } from '../models/Viaje.js';
import { Testimonial } from '../models/Testimoniales.js'

const paginaInicio = async (req, res) => {

    // Consultar 3 viajes del modelo Viaje
        //creo un array y meto las 2 busquedas a la db, y mas mando a correr juntas

    const promiseDB = [];
    promiseDB.push( Viaje.findAll({ limit: 3 }) );
    promiseDB.push( Testimonial.findAll({ limit: 3 }) );

    try {
        const resultado = await Promise.all( promiseDB ); //osea las 2 consultas van juntas aca
        
        res.render('inicio', {
            pagina: 'Inicio',
            clase: 'home',
            viajes: resultado[0], 
            testimoniales: resultado[1]
        });
    } catch (error) {
        console.log(error)        
    }

};

const paginaNosotros = (req, res) => {
    res.render('nosotros', {
        pagina: 'Nosotros'
    });
};

const paginaViajes = async (req, res) => {
    //Consultar BD
    const viajes = await Viaje.findAll();

    console.log(viajes);

    res.render('viajes', {
        pagina: 'Proximos Viajes',
        viajes
    });
};

const paginaTestimoniales = async (req, res) => {

    try {
        const testimoniales = await Testimonial.findAll();

        res.render('testimoniales', {
            pagina: 'Testimoniales',
            testimoniales
        });        
    } catch (error) {
        console.log(error);
    }


};

//Muestra su viaje por su slug
const paginaDetalleViaje = async (req, res) => {

    const { slug } = req.params;

    try {
        const viaje = await Viaje.findOne({ where : { slug: slug } });

        res.render('viaje', {
            pagina: 'Informacion Viaje',
            viaje
        })
    } catch (error) {
        console.log(error);
    }
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
}