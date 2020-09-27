function Hello() {
  console.log("hello from about user frm admin");
}


// Ocultar el inicio
/*$(document).ready(function() {
  $("#main-content").hide();
  $("#book-content").show();
  $("#movie-content").hide();
  $("#video-content").hide();
  $("#photo-content").hide();
  $("#edit-content").hide();
});*/
/** Eventos (click) en el header administrador */
// header : inicio
$("#a-main").click(function () {
  // oculta/visualiza efectos/contenido
  $("#main-content").show();
  $("#a-main").attr("class", "nav-link active border-bottom");
  $("#a-book").attr("class", "nav-link");
  $("#a-movie").attr("class", "nav-link");
  $("#a-video").attr("class", "nav-link");
  $("#a-photo").attr("class", "nav-link");
  $("#a-cuenta").attr("class", "nav-link dropdown-toggle");
  $("#book-content").hide();
  $("#movie-content").hide();
  $("#video-content").hide();
  $("#photo-content").hide();
  $("#edit-content").hide();
});
// header : Libros
$("#a-book").click(function () {
  // oculta/visualiza efectos/contenido
  $("#main-content").hide();
  $("#book-content").show();
  $("#a-main").attr("class", "nav-link");
  $("#a-book").attr("class", "nav-link active border-bottom");
  $("#a-movie").attr("class", "nav-link");
  $("#a-video").attr("class", "nav-link");
  $("#a-photo").attr("class", "nav-link");
  $("#a-cuenta").attr("class", "nav-link dropdown-toggle");
  $("#movie-content").hide();
  $("#video-content").hide();
  $("#photo-content").hide();
  $("#edit-content").hide();
});
// header : Peliculas
$("#a-movie").click(function () {
  // oculta/visualiza efectos/contenido
  $("#main-content").hide();
  $("#book-content").hide();
  $("#movie-content").show();
  $("#a-main").attr("class", "nav-link");
  $("#a-book").attr("class", "nav-link");
  $("#a-movie").attr("class", "nav-link active border-bottom");
  $("#a-video").attr("class", "nav-link");
  $("#a-photo").attr("class", "nav-link");
  $("#a-cuenta").attr("class", "nav-link dropdown-toggle");
  $("#video-content").hide();
  $("#photo-content").hide();
  $("#edit-content").hide();
});
// header : Videos
$("#a-video").click(function () {
  // oculta/visualiza efectos/contenido
  $("#main-content").hide();
  $("#book-content").hide();
  $("#movie-content").hide();
  $("#video-content").show();
  $("#a-main").attr("class", "nav-link");
  $("#a-book").attr("class", "nav-link");
  $("#a-movie").attr("class", "nav-link");
  $("#a-video").attr("class", "nav-link active border-bottom");
  $("#a-photo").attr("class", "nav-link");
  $("#a-cuenta").attr("class", "nav-link dropdown-toggle");
  $("#photo-content").hide();
  $("#edit-content").hide();
});
// header : Fotos
$("#a-photo").click(function () {
  // oculta/visualiza efectos/contenido
  $("#main-content").hide();
  $("#book-content").hide();
  $("#movie-content").hide();
  $("#video-content").hide();
  $("#photo-content").show();
  $("#a-main").attr("class", "nav-link");
  $("#a-book").attr("class", "nav-link");
  $("#a-movie").attr("class", "nav-link");
  $("#a-video").attr("class", "nav-link");
  $("#a-photo").attr("class", "nav-link active border-bottom");
  $("#a-cuenta").attr("class", "nav-link dropdown-toggle");
  $("#edit-content").hide();
});

// header : Cuenta Editar Datos
$("#a-edit").click(function () {
  // oculta/visualiza efectos/contenido
  $("#main-content").hide();
  $("#book-content").hide();
  $("#movie-content").hide();
  $("#video-content").hide();
  $("#photo-content").hide();
  $("#edit-content").show();
  $("#a-main").attr("class", "nav-link");
  $("#a-book").attr("class", "nav-link");
  $("#a-movie").attr("class", "nav-link");
  $("#a-video").attr("class", "nav-link");
  $("#a-photo").attr("class", "nav-link");
  $("#a-cuenta").attr("class", "nav-link dropdown-toggle border-bottom");
});
/** Fin eventos (click) header administrador */


function ClickMe(name='Hola',params=1,some) {
  console.log(name,params,some)
}

