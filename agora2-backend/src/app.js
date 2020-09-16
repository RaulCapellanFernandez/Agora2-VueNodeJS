var express = require('express');
var app = express();
var cors = require('cors')

var bodyParser =  require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors())

require("./database/connection.js");//DDBB Connection
//require("./addVariables.js")();//Introduce variables en la base de datos BBDD

app.get('/', function (req, res) {
  res.send('Funcion para el backend');
});

app.get('/asignatura/:id', function (req, res) {
  var id  = req.params.id;
  require("./listAsignaturas.js")(id).then((response) => {
    res.json(response);
  })
  .catch((error) => {
    console.log(error)
  })
  .then(() => {})
});

app.get('/recurso/:id', function (req, res) {
  var id  = req.params.id;
  require("./listRecurso.js")(id).then((response) => {
    res.json(response);
  })
  .catch((error) => {
  console.log(error)
  })
  .then(() => {})
});

app.get('/trabajo/:id', function (req, res) {
  var id  = req.params.id;
  require("./listTrabajo.js")(id).then((response) => {
    res.json(response);
  })
  .catch((error) => {
    console.log(error)
  })
  .then(() => {})
});

app.get('/alumtrabajo/:id', function (req, res) {
  var id  = req.params.id;
  require("./listaAlumtrabajo.js")(id).then((response) => {
    res.json(response);
  })
  .catch((error) => {
    console.log(error)
  })
  .then(() => {})
});

app.get('/loggin/:id', function (req, res) {
  var id = req.params.id;
  var varUsr = [];
  require("./loggin")(id).then((response) => {
    //console.log(response)
    const usr = response;
    varUsr.push(usr);
    res.json(varUsr);
  })
  .catch((error) => {
    res.send("No funciona");
    console.log(error)
  })
  .then(() => {})
});


app.post('/examUpload', function (req, res) {
 var examenbbdd = {
    name: req.body.nombre,
    nota: req.body.nota,
    fecha: req.body.fecha,
    asign: req.body.asignatura,
    exam: req.body.examen
  }
  require("./uploadExam.js")(examenbbdd);
  res.send("Subido a la BBDD");
});

app.post('/examUpdate', function (req, res) {
  var examenbbdd = {
    name: req.body.nombre,
    nota: req.body.nota,
    fecha: req.body.fecha,
    asign: req.body.asignatura,
    exam: req.body.examen,
    trabajo: req.body.trabajo,
    alum: req.body.dni
   }
   require("./updateExam.js")(examenbbdd);
   console.log(examenbbdd);
   res.send(examenbbdd);
 });

 app.post('/examDelete', function (req, res) {
  var examenbbdd = {
    trabajo: req.body.trabajo
   }
   require("./deleteExam.js")(examenbbdd);
   console.log(examenbbdd);
   res.send(examenbbdd);
 });


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
