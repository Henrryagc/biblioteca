function listarLibros() {
  html = "";
  for (let index = 0; index < 5; index++) {
    html +=
      "<div class='card mb-3'><div class='row no-gutters'><div class='col-md-4'><img src='/images/img/book.png' class='card-img'/></div><div class='col-md-8'><div class='card-body'><h5 class='card-title'>Ciencias</h5><p class='card-text'><ul><li>Titulo</li><li>Autor</li><li>Páginas</li><li>Descargar</li></ul></p><p class='card-text bg-info rounded'><small class='text-muted'><a href='#'>Descargar</a><a href='/book'>Leer </a> </small></p></div></div></div></div>";
  }
  $("#card-content").html(html);
}

//var items = $(".list-wrapper .list-item");
var items = $(".mylista .card1");
var numItems = items.length;
var perPage = 5;
items.slice(perPage).hide();
//#pagination-container
$("#paginar").pagination({
  items: numItems,
  itemsOnPage: perPage,
  prevText: "<",
  nextText: ">",
  onPageClick: function (pageNumber) {
    var showFrom = perPage * (pageNumber - 1);
    var showTo = showFrom + perPage;
    items.hide().slice(showFrom, showTo).show();
  },
});
