const express = require('express');
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

require('dotenv').config()

const port = process.env.PORT || 3000;

//Conexion de base de datos
const mongoose = require('mongoose');


const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.en81hbh.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

mongoose.connect(uri, 
    { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Base de datos conectada'))
    .catch(e => console.log(e))
//motor de plantillas
app.set('view engine','ejs');
app.set('views',__dirname + '/views');

// app.get('/', (req,res) =>{
//     res.render("index",{titulo:"mi titulo dinamico"})
// })

// app.get('/servicios',(req,res) => {
//     res.render("servicios",{tituloServicios: "Este es un mensaje dinamico de Servicios"})
// })

//Esto es para usar archivos estaticos dentro de la carpeta public
// app.use(express.static(__dirname + "/public"))

app.use('/', require('./router/RutasWeb'));
app.use('/mascotas', require('./router/Mascotas'));

app.use((req, res, next) => {
    res.status(404).render("404",{
        titulo: "404",
        descripcion: "esta es la descrioncion maldicion deja de aparecer mensaje de mrd"
    })
})


//Esto es un middleware para que se reproduzca cuando se pone una ruta desconocida.
// app.use((rez, res, next) => {
//     res.status(404).sendFile(__dirname + "/public/404.html")
// })
// app.get('/', (req, res) => {
//     res.send('Mi respuesta desde express v2')
// })


//Esto es para hacer el routing
// app.get('/servicios', (req,res) => {
//     res.send('Estas en  la pagina de servicios')
// })


app.listen(port, () => {
    console.log('Servidor a su servicio en el puerto', port)
})