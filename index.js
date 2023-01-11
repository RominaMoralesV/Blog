
const express = require('express');
const app = express();
const mysql = require('mysql2');

//motor de plantilla
const hbs = require('hbs');

//encontrar archivos
const path = require('path');

//enviar mails
const nodemailer = require('nodemailer');
const { appendFile, read } = require('fs');
const { threadId } = require('worker_threads');
const { compileFunction } = require('vm');



//variables de entorno
require('dotenv').config();

//configuramos el puerto
const APP_PORT = process.env.APP_PORT

// servidor a la escucha de las peticiones
app.listen(APP_PORT, ()=>{
    console.log(`Servidor trabajando en 
    el puerto: ${APP_PORT}`);

})

//middelware funciones que dan info a json

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));

//configuramos el motor de plantillas de HBS
app.set('view engine', 'hbs');
//configuramos la ubicacion de las plantillas
app.set('views', path.join(__dirname, 'views'));
//configuramos los parciales de los motores de plantillas
hbs.registerPartials(path.join(__dirname, 'views/partials'));

//Conexión a la Base de Datos

//COMENTO TODO PARA SUBIR EL ARCHIVO PARA DEPLOY EN GLITCH

/* 
const conexion = mysql.createConnection({
     host: process.env.MYSQL_HOST,
     user: process.env.MYSQL_USER,
     password: process.env.MYSQL_PASSWORD,
     database: process.env.MYSQL_DATABASE,
     port: process.env.MYSQL_PORT
 })

 conexion.connect((err) =>{
     if(err) throw err;
     console.log(`Conectado a la Database ${process.env.MYSQL_DATABASE}`);

    })
*/

//Rutas de mi pagina
app.get('/', (req, res) => {
    res.render('index', {
        titulo: 'Home'
    })
})

//paginas de mi web

//pagina index o home!
app.get('/index.hbs', (req, res) =>{
    res.render('index', {
        titulo: 'index'
    }) 
})
//pagina paises - africa de la barra de navegacion
app.get('/africa.hbs', (req, res) =>{
    res.render('africa', {
        titulo: 'africa'
    }) 
})

//pagina paises - america de la barra de navegacion
app.get('/america.hbs', (req, res) =>{
    res.render('america', {
        titulo: 'america'
    }) 
})
//pagina paises - asia de la barra de navegacion
app.get('/views/asia.hbs', (req, res) =>{
    res.render('asia', {
        titulo: 'asia'
    }) 
})

//pagina paises - europa de la barra de navegacion
app.get('/europa.hbs', (req, res) =>{
    res.render('europa', {
        titulo: 'europa'
    }) 
})
//pagina paises - oceania de la barra de navegacion
app.get('/oceania.hbs', (req, res) =>{
    res.render('oceania', {
        titulo: 'oceania'
    }) 
})
//pagina paises - Japon 
app.get('/japon.hbs', (req, res) =>{
    res.render('japon', {
        titulo: 'japon'
    }) 
})

//pagina contacto de la barra de navegacion 
app.get('/contacto.hbs', (req, res) =>{
    res.render('contacto', {
        titulo: 'contacto'
    }) 
})

app.post('/contacto.hbs', (req, res) =>{
    const nombre = req.body.nombre;
    const email = req.body.email;
    const comentario = req.body.comentario;

    //Funcion para enviar Mails
    async function envioMail(){
        //Configuracion cuenta de envio
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_APP,
                pass: process.env.PASSWORD_APP
            }
        });
        //Envio del mail
        let info = await transporter.sendMail({
            from: process.env.EMAIL_APP,
            to: `${email}`,
            subject: "Gracias por suscribirte a nuestro blog",
            html:`Gracias por visitar nuestro Blog!`
        })
    }
    let datos = {
        nombre: nombre,
        email: email,
        comentario: comentario
    }
    //COMENTO TODO PARA SUBIR EL ARCHIVO PARA DEPLOY EN GLITCH
   /* let sql = "INSERT INTO contacto set ?";
    conexion.query(sql, datos, function(err){
        if (err) throw err;
            console.log(`1 Registro insertado`);
            //Email
            envioMail().catch(console.error);
            res.render('index')
        }) */

        
        //opcion uno para comentar que tenemos la base de datos sin conexion para deploy - funciona correctamente
        /*res.json({
            prueba: 'probando sin conexion a la DB'
        })*/

        //opcion dos para comentar que tenemos la base de datos sin conexion para deploy - funciona correctamente
        res.render('sindb')
})






