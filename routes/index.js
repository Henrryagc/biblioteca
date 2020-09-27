var express = require('express');
const router = express.Router();
conexion = require("../private/connection.js");
var contador = 0;
/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Biblioteca' });
});*/

const libroModel = require("../models/libro");


router.get('/', function (req, res, next) {
  libroModel
      .obtener()
      .then(productos => {
          res.render("index", {
              productos: productos, title:'Biblioteca', student:false
          });
      })
      .catch(err => {
          console.log(err);
          return res.status(500).send("Error obteniendo productos");
      });
 contador ++;
});

router.post("/listar/book", function (req, res, next) {
  const { idAdmin, nameAdmin } = req.body;
  data = [{ num: idAdmin, nombre: nameAdmin }];
  const { titulo, autor, materia, idioma, editorial, buscar } = req.body;
  var datos = buscar.split(",");
  console.log(req.body);
  var titulo_x = titulo == "on" ? datos[0] + "%" : "%";
  var autor_x = autor == "on" ? datos[1] + "%" : "";
  var materia_x = materia == "on" ? datos[2] + "%" : "";
  var idioma_x = idioma == "on" ? datos[3] + "%" : "";
  var editorial_x = editorial == "on" ? datos[4] + "%" : "";
  // Si todo va bien, seguimos
  libroModel
    .obtenerBooks2(titulo_x, autor_x, materia_x, idioma_x, editorial_x)
    .then((resultados) => {
      res.render("index", { productos: resultados, title:'Biblioteca', student:true });
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).send("Error obtenerBooks");
    });
    contador++;
});
console.log(contador)
/*
router.get('/files/:file(*)', function(req, res, next){
    var filePath = path.join(__dirname, 'files', req.params.file);
  
    res.download(filePath, function (err) {
      if (!err) return; // file sent
      if (err.status !== 404) return next(err); // non-404 error
      // file for download not found
      res.statusCode = 404;
      res.send('Cant find that file, sorry!');
    });
  });*/

module.exports = router;


/*** Para La descarga

var express = require('../../');
var path = require('path');
var app = module.exports = express();

app.get('/', function(req, res){
  res.send('<ul>'
    + '<li>Download <a href="/files/amazing.txt">amazing.txt</a>.</li>'
    + '<li>Download <a href="/files/missing.txt">missing.txt</a>.</li>'
    + '<li>Download <a href="/files/CCTV大赛上海分赛区.txt">CCTV大赛上海分赛区.txt</a>.</li>'
    + '</ul>');
});

// /files/* is accessed via req.params[0]
// but here we name it :file
app.get('/files/:file(*)', function(req, res, next){
  var filePath = path.join(__dirname, 'files', req.params.file);

  res.download(filePath, function (err) {
    if (!err) return; // file sent
    if (err.status !== 404) return next(err); // non-404 error
    // file for download not found
    res.statusCode = 404;
    res.send('Cant find that file, sorry!');
  });
});

// istanbul ignore next 
if (!module.parent) {
    app.listen(3000);
    console.log('Express started on port 3000');
  }
  
 
 
 */