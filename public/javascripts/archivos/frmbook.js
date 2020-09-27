// Conseguimos el id del campo en el cual se vera el pdf
const viewer = $("#view");
// funcion para detectar si la vista esta lista
$(document).ready(function () {
  // buscamos el nombre del libro para abrir el pdg desde el path construido
  var bookName = $("#bookName").val();
  var path = "/package/documents/"+bookName;
  console.log(bookName);
  //var path = "/package/documents/" + "Ingenieria_del_software.pdf";
  // Enviar el path y el id para visualizar el documento pdf
  PDFObject.embed(path, viewer);
});
/*
var bookName = $('#bookName').val();
//var path = "/package/documents/"+bookName;
console.log(bookName)
var path = "/package/documents/"+'Ingenieria_del_software.pdf';
PDFObject.embed(path, viewer);*/
