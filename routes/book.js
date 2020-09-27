var express = require("express");
var router = express.Router();
conexion = require("../private/connection.js");
const libroModel = require("../models/libro");
/* GET users listing. */
router.get("/name/:id", function (req, res, next) {
  const { id } = req.params;
  console.log('id: ',id);
  res.render("content/bookContent", { title: "Book", bookName:id });
});
/*
router.get('/', function (req, res, next) {
  libroModel
      .obtener()
      .then(productos => {
          res.render("content/indexContent", {
              productos: productos,
          });
      })
      .catch(err => {
          return res.status(500).send("Error obteniendo productos");
      });

});*/

router.get("/items/:page", (req, res) => {
  const db = require("../private/connection.js"),
    Pagination = require("../models/pagination"),
    // Get current page from url (request parameter)
    page_id = parseInt(req.params.page),
    currentPage = page_id > 0 ? page_id : currentPage,
    //Change pageUri to your page url without the 'page' query string
    pageUri = "/book/items/";

  /*Get total items*/
  db.query("SELECT COUNT(id) as totalCount FROM productos", (err, result) => {
    // Display 10 items per page
    const perPage = 10,
      totalCount = result[0].totalCount;

    // Instantiate Pagination class
    const Paginate = new Pagination(totalCount, currentPage, pageUri, perPage);
    console.log("totalcount ", totalCount);
    /*Query items*/
    db.query(
      "SELECT * FROM productos LIMIT " +
        Paginate.perPage +
        " OFFSET " +
        Paginate.start,
      (err, result) => {
        data = {
          items: result,
          pages: Paginate.links(),
        };
        console.log(data)
        // Send data to view
        res.render("changes/editar", data);
      }
    );
  });
});
/*
router.get("/", function (req, res, next) {
  res.render("content/bookContent", { title: "Book" });
});*/

module.exports = router;
