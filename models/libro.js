const conexion = require("../private/connection.js");
module.exports = {
  insertarLibro(
    titulo,
    autor,
    idioma,
    editorial,
    paginas,
    isbn,
    idTipoMateria,
    filename
  ) {
    return new Promise((resolve, reject) => {
      conexion.query(
        `INSERT INTO libro ( titulo, autor, idioma, editorial, paginas, isbn, 
          idTipoMateria, codLibro ) VALUES ( ?, ?, ?, ?, ?, ?, ?, ? )`,
        [
          titulo,
          autor,
          idioma,
          editorial,
          paginas,
          isbn,
          idTipoMateria,
          filename,
        ],
        (err, resultados) => {
          if (err) reject(err);
          else resolve(resultados.insertId);
        }
      );
    });
  },
  obtener() {
    return new Promise((resolve, reject) => {
      conexion.query(
        `SELECT
            titulo,
            autor,
            idioma,
            paginas,
            nombre,
            codLibro
        FROM
            libro
        INNER JOIN tipoMateria ON libro.idTipoMateria = tipoMateria.idTipoMateria
        LIMIT 10`,
        (err, resultados) => {
          if (err) reject(err);
          else resolve(resultados);
        }
      );
    });
  },
  obtenerBooks(titulo_x, autor_x, materia_x, idioma_x, editorial_x) {
    return new Promise((resolve, reject) => {
      conexion.query(
        `SELECT
        idLibro,
        titulo,
        autor,
        idioma,
        editorial,
        paginas,
        isbn,
        nombre,
        libro.fechaRegistro
    FROM
        libro
    INNER JOIN tipoMateria ON libro.idTipoMateria = tipoMateria.idTipoMateria
    WHERE titulo LIKE ? || autor LIKE ? || nombre LIKE ? || idioma LIKE ? || editorial LIKE ?
    LIMIT 20;`,
        [titulo_x, autor_x, materia_x, idioma_x, editorial_x],
        (err, resultados) => {
          if (err) reject(err);
          else resolve(resultados);
        }
      );
    });
  },
  obtenerBooks2(titulo_x, autor_x, materia_x, idioma_x, editorial_x) {
    return new Promise((resolve, reject) => {
      conexion.query(
        `SELECT
        titulo,
        autor,
        idioma,
        paginas,
        nombre,
        codLibro
    FROM
        libro
    INNER JOIN tipoMateria ON libro.idTipoMateria = tipoMateria.idTipoMateria
    WHERE titulo LIKE ? || autor LIKE ? || nombre LIKE ? || idioma LIKE ? || editorial LIKE ?
    LIMIT 20;`,
        [titulo_x, autor_x, materia_x, idioma_x, editorial_x],
        (err, resultados) => {
          if (err) reject(err);
          else resolve(resultados);
        }
      );
    });
  },
  obtenerPorId(id) {
    return new Promise((resolve, reject) => {
      conexion.query(
        `select idLibro from libro where idLibro = ?`,
        [id],
        (err, resultados) => {
          if (err) reject(err);
          else resolve(resultados[0]);
        }
      );
    });
  },
  actualizar(id, nombre, precio) {
    return new Promise((resolve, reject) => {
      conexion.query(
        `update productos
              set nombre = ?,
              precio = ?
              where id = ?`,
        [nombre, precio, id],
        (err) => {
          if (err) reject(err);
          else resolve();
        }
      );
    });
  },
  eliminar(id) {
    return new Promise((resolve, reject) => {
      conexion.query(
        `delete from libro
              where idLibro = ?`,
        [id],
        (err) => {
          if (err) reject(err);
          else resolve();
        }
      );
    });
  },
};

console.log("Hello from models-libro");
