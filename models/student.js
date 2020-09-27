const conexion = require("../private/connection.js");
module.exports = {
  insertar(a_nombres, a_apellidos, a_dni, a_correo, a_celular) {
    return new Promise((resolve, reject) => {
      conexion.query(
        `INSERT INTO administrador(
          nombres,
          apellidos,
          dni,
          correo,
          celular )
      VALUES
          (?, ?, ?, ?, ?)`,
        [a_nombres, a_apellidos, a_dni, a_correo, a_celular],
        (err, resultados) => {
          if (err) reject(err);
          else resolve(resultados.insertId);
        }
      );
    });
  },
  insertarUsuario(a_usuario, a_contrasena, idAdministrador) {
    return new Promise((resolve, reject) => {
      conexion.query(
        `insert into usuario
              (usuario, contrasena,idAdministrador)
              values
              (?, ?, ?)`,
        [a_usuario, a_contrasena, idAdministrador],
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
        `select id, nombre, precio from productos`,
        (err, resultados) => {
          if (err) reject(err);
          else resolve(resultados);
        }
      );
    });
  },
  obtenerPor(usuario,contrasena) {
    return new Promise((resolve, reject) => {
      conexion.query(
        `select usuario from usuarioEstudiante where usuario=? AND contrasena=?`,
        [usuario,contrasena],
        (err, resultados) => {
          if (err) reject(err);
          else resolve(resultados[0]);
        }
      );
    });
  },
  getMaterias() {
    return new Promise((resolve, reject) => {
      conexion.query(
        `select *
        from (
          select idUsuario as num , usuario as nombre from usuario
          union all
         select idTipoMateria, nombre from tipoMateria
        ) alldata`
        /*`select idTipoMateria, nombre from tipoMateria`*/,        
        (err, resultados) => {
          if (err) reject(err);
          else resolve(resultados);
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
        `delete from productos
              where id = ?`,
        [id],
        (err) => {
          if (err) reject(err);
          else resolve();
        }
      );
    });
  },
};

console.log("Hello from models-student");
