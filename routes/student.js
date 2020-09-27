const express = require("express");
const router = express.Router();

/*
var bodyParser = require('body-parser')
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })*/

const studentModel = require("../models/student");
const libroModel = require("../models/libro");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.render("user", { title: "ADMIN" });
});

router.get("/login", function (req, res, next) {
  res.render("auth/student/login", { title: "ADMIN" });
});

router.get("/test", function (req, res, next) {
  res.render("test", { title: "test" });
});


router.post("/validar", function (req, res, next) {
  console.log("\n ", req.body, "\n");
  const { user, password } = req.body;
  studentModel
    .obtenerPor(user, password)
    .then((resultados) => {
        try {
          console.log(resultados)
          if (resultados.usuario != "" ) {
            // Si todo va bien, seguimos
            libroModel
            .obtenerBooks2('%', '', '', '', '')
            .then((resultados) => {
              res.render("index", { productos: resultados, title:'Biblioteca', student:true });
            })
            .catch((err) => {
              console.error(err);
              return res.status(500).send("Error obtenerBooks");
            });            
          }
        } catch (error) {
          console.log(error);
          res.redirect("/student/login");  
        }          
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).send("Error Obtener usuario");
    });
});

module.exports = router;
