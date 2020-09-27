var express = require("express");
const router = express.Router();
let isTrue = false;
/* GET home page. */
const adminModel = require("../models/admin");
const libroModel = require("../models/libro");
const connection = require("../private/connection.js");
router.get("/", function (req, res, next) {
  isTrue = false;
  const { idAdmin, nameAdmin } = req.body;
  data = [{ num: idAdmin, nombre: nameAdmin }];
  res.render("content/admin/main", {data:data})
});

router.get("/login", function (req, res, next) {
  isTrue = false;
  res.render("auth/admin/loginAdmin", { isTrue: isTrue });
});

router.post("/validar", function (req, res, next) {
  console.log("\n ", req.body, "\n");
  const { user, password } = req.body;
  adminModel
    .obtenerPor(user, password)
    .then((resultados) => {
        try {
          if (resultados.usuario != "" ) {
            res.redirect('/admin');            
          }
        } catch (error) {
          console.log(error);
          res.redirect("/admin/login");  
        }          
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).send("Error Obtener usuario");
    });
});

router.post("/insertar", function (req, res, next) {
  const {
    a_nombres,
    a_apellidos,
    a_dni,
    a_usuario,
    a_contrasena,
    a_correo,
    a_celular,
  } = req.body;

  if (
    !a_nombres ||
    !a_apellidos ||
    !a_dni ||
    !a_usuario ||
    !a_contrasena ||
    !a_correo ||
    !a_celular
  ) {
    return res.status(500).send("No campos vacios");
  }
  // Si todo va bien, seguimos
  adminModel
    .insertar(
      a_nombres,
      a_apellidos,
      a_dni,
      a_usuario,
      a_contrasena,
      a_correo,
      a_celular
    ).then((idInsertado) => {
      if (idInsertado > 0) {
        adminModel.insertarUsuario(a_usuario, a_contrasena, idInsertado)
        .then(idInsertado => {
          res.redirect("/admin/login");
        }).catch(err => {
            return res.status(500).send("Error insertando producto");
        });
      }      
    }).catch((err) => {
      return res.status(500).send("Error insertando admin");
    });
});

router.get("/edit", function (req, res, next) {
  const {
    a_nombres,
    a_apellidos,
    a_dni,
    a_usuario,
    a_contrasena,
    a_correo,
    a_celular,
  } = req.body;

  res.render('content/admin/admin/edit', {data:[1,1,1]})
  // Si todo va bien, seguimos
  /*adminModel
    .insertar(
      a_nombres,
      a_apellidos,
      a_dni,
      a_usuario,
      a_contrasena,
      a_correo,
      a_celular
    ).then((idInsertado) => {

    }).catch((err) => {
      return res.status(500).send("Error insertando admin");
    });*/
});
/********************* OPERACIONES --CRUD-- EN BOOK  */

router.get("/book/see", function (req, res, next) {
  const { idAdmin, nameAdmin } = req.body;
  data = [{ num: idAdmin, nombre: nameAdmin }];
  console.log(req.body);
  // Si todo va bien, seguimos
  libroModel
    .obtenerBooks(
      (titulo_x = "%"),
      (autor_x = ""),
      (materia_x = ""),
      (idioma_x = ""),
      (editorial_x = "")
    )
    .then((resultados) => {
      res.render("content/admin/book/see", { data: data, books: resultados });
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).send("Error obtenerBooks");
    });
});

router.post("/book/see", function (req, res, next) {
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
    .obtenerBooks(titulo_x, autor_x, materia_x, idioma_x, editorial_x)
    .then((resultados) => {
      res.render("content/admin/book/see", { data: data, books: resultados });
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).send("Error obtenerBooks");
    });
});
router.get("/book/eliminar/:id", function (req, res, next) {
  libroModel
    .eliminar(req.params.id)
    .then(() => {
      res.redirect("/admin/book/see");
    })
    .catch((err) => {
      return res.status(500).send("Error eliminando libro");
    });
});
router.get("/book/editar/:id", function (req, res, next) {
  libroModel
    .obtenerPorId(req.params.id)
    .then((producto) => {
      console.log(producto)
      if (producto) {
        res.render("content/admin/book/edit", {
          producto: producto,
        });
      } else {
        return res.status(500).send("No existe producto con ese id");
      }
    })
    .catch((err) => {
      return res.status(500).send("Error obteniendo producto");
    });
});
router.get("/book/insertar", function (req, res, next) {
  adminModel
    .getMaterias()
    .then((resultados) => {
      res.render("content/admin/book/insert",{ data: resultados });
    })
    .catch((err) => {
      return res.status(500).send("Error insertando producto");
    });
  
  /*
  // Si todo va bien, seguimos
  productosModel
      .insertar(nombre, precio)
      .then(idProductoInsertado => {
          //res.render("content/admin/book/insert");
      }).catch(err => {
          return res.status(500).send("Error insertando producto");
      });*/
});

router.post("/book/insertar", function (req, res, next) {
  const {
    titulo,
    autor,
    idioma,
    editorial,
    paginas,
    isbn,
    tipoMateria,
  } = req.body;

  if (req.files) {
    var file = req.files.filepdf;
    var filename = file.name;
    filename = filename.replace(/\W/g, '').toLowerCase();
    if (filename.length > 30) {
      filename = filename.slice(0, 30); 
      filename = filename + ".pdf";
      console.log('nombreArchivo: ',filename)
    }
    file.mv("./public/package/documents/" + filename, function (err) {
      if (err) {
        console.log("Error guardar archivo: ", err);
      }
    });
  }
  // Si todo va bien, seguimos
  libroModel
    .insertarLibro(titulo, autor, idioma, editorial, paginas, isbn, tipoMateria, filename)
    .then((idProductoInsertado) => {
      console.log('LibroInsetado ',idProductoInsertado);
      res.redirect("/admin/book/insertar");
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).send("Error insertando producto");
    });
});

router.post("/actualizar/", function (req, res, next) {
  // Obtener el nombre y precio. Es lo mismo que
  // const nombre = req.body.nombre;
  // const precio = req.body.precio;
  const { id, nombre, precio } = req.body;
  if (!nombre || !precio || !id) {
    return res.status(500).send("No hay suficientes datos");
  }
  // Si todo va bien, seguimos
  productosModel
    .actualizar(id, nombre, precio)
    .then(() => {
      res.redirect("/productos");
    })
    .catch((err) => {
      return res.status(500).send("Error actualizando producto");
    });
});

/********************* OPERACIONES --CRUD-- EN Peliculas  */
router.get("/movie/see", function (req, res, next) {
  res.render("content/admin/movie/movie");
});


module.exports = router;
