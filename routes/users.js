const express = require("express");
const router = express.Router();

/*
var bodyParser = require('body-parser')
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })*/

const libroModel = require("../models/libro");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.render("user", { title: "ADMIN" });
});

router.get("/login", function (req, res, next) {
  res.render("user", { title: "ADMIN" });
});

router.get("/test", function (req, res, next) {
  res.render("test", { title: "test" });
});
/*
router.post("/insertar", function (req, res, next) {
  const titulo = req.body.titulo;
  const  autor  = req.body.autor;
  console.log(titulo, autor)
  if (!titulo || !autor) {
    return res.status(500).send("Error no hay titulo o autor");
  }

  libroModel
    .insertar(titulo, autor)
    .then((idLibroInsertado) => {
      res.redirect("/users");
    })
    .catch((err) => {
      return res.status(500).send("Error insertar libro");
    });
});*/
/*
router.post('/insertar', function (req, res, next) {
  // Obtener el nombre y precio. Es lo mismo que
  // const nombre = req.body.nombre;
  // const precio = req.body.precio;
  const { titulo, autor } = req.body;
  console.log(titulo, autor)
  if (!titulo || !autor) {
      return res.status(500).send("No hay titulo o autor");
  }
 
  // Si todo va bien, seguimos
  libroModel
      .insertar(titulo, autor)
      .then(idProductoInsertado => {
          res.redirect("/users");
      }).catch(err => {
          console.log(err);
          return res.status(500).send("Error insertando producto");
      });
});*/

router.post('/insertar', function (req, res, next) {
  // Obtener el nombre y precio. Es lo mismo que
  // const nombre = req.body.nombre;
  // const precio = req.body.precio;
  const { titulo, autor } = req.body;
  console.log(titulo, autor)
  if (!titulo || !autor) {
      return res.status(500).send("No hay titulo o autor");
  }
 
  // Si todo va bien, seguimos
  libroModel
      .insertar(titulo, autor)
      .then(idProductoInsertado => {
          res.redirect("/users");
      }).catch(err => {
          console.log(err);
          return res.status(500).send("Error insertando producto");
      });
});

router.get('/editar/:id', function (req, res, next) {
  libroModel
      .obtenerPorId(req.params.id)
      .then(producto => {
          if (producto) {
              res.render("changes/editar", {
                  producto: producto,
              });
          } else {
              return res.status(500).send("No existe producto con ese id");
          }
      })
      .catch(err => {
          return res.status(500).send("Error obteniendo producto");
      });
});


module.exports = router;
