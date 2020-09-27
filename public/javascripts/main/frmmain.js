/*function salir() {
    if (confirm("Desea Salir")) {
        location.href = "/employee/login"
        console.log("salir")
    } else {
        console.log("no salir")
    }
}*/

function GoUSer() {
  location.href = "/users";
}
$(".collapse").collapse();

function listarLibros() {
  html = "";
  for (let index = 0; index < 5; index++) {
    html +=
      "<div class='card mb-3'><div class='row no-gutters'><div class='col-md-4'><img src='/images/img/book.png' class='card-img'/></div><div class='col-md-8'><div class='card-body'><h5 class='card-title'>Ciencias</h5><p class='card-text'><ul><li>Titulo</li><li>Autor</li><li>Páginas</li><li>Descargar</li></ul></p><p class='card-text bg-info rounded'><small class='text-muted'><a href='#'>Descargar</a><a href='/book'>Leer </a> </small></p></div></div></div></div>";
  }
  $('#card-contents').html(html);
}

function buscar(ini, tamano) {

}

function getTotalRegss()
{
	/*campo=$('#campo').val();
	operador=$('#operador').val();
	valor=$('#valor').val();
	datos="campo="+campo+"&operador="+operador+"&valor="+valor+"&accion=totalRegs";*/
	$.ajax({
		type:'get',
		url:'/changes/editar/1',
		success:function(html)
		{	
			tr=html; //Total de registros
			paginar(tr);
			$('#tregss').html(html);
		}
    });
    paginar(15);
}

function paginarr(total)
{	//tamanho=$('#tamanho').val(); //Tamanho de paginar
tamanho = 10;
	npag=Math.ceil(total/10);
	//alert(total+" "+tamanho+" "+npag);
	html="";
	ini=0;
	for(i=1;i<=npag;i++)
	{
		html+="<a onclick='buscar("+ini+","+tamanho+")'>"+i+"</a>&nbsp;&nbsp;&nbsp;";
		ini+=tamanho;
	}
	$('#paginarr').html(html);
	buscar(0,tamanho);
}


/******** Eventos Para Los Contenidos de Index */
$(document).ready(function() {
	$("#content-libros").show();
	$("#content-fotos").hide();
	$("#content-computo").hide();
	$("#content-videos").hide();
	$("#content-peliculas").hide();
  });
$("#a-libros").click(function () {
	// oculta/visualiza efectos/contenido
	$("#content-libros").show();
	$("#content-fotos").hide();
	$("#content-computo").hide();
	$("#content-videos").hide();
	$("#content-peliculas").hide();
});

$("#a-fotos").click(function () {
	// oculta/visualiza efectos/contenido
	$("#content-libros").hide();
	$("#content-fotos").show();
	$("#content-computo").hide();
	$("#content-videos").hide();
	$("#content-peliculas").hide();
});

$("#a-computo").click(function () {
	// oculta/visualiza efectos/contenido
	$("#content-libros").hide();
	$("#content-fotos").hide();
	$("#content-computo").show();
	$("#content-videos").hide();
	$("#content-peliculas").hide();
});

$("#a-videos").click(function () {
	// oculta/visualiza efectos/contenido
	$("#content-libros").hide();
	$("#content-fotos").hide();
	$("#content-computo").hide();
	$("#content-videos").show();
	$("#content-peliculas").hide();
});

$("#a-peliculas").click(function () {
	// oculta/visualiza efectos/contenido
	$("#content-libros").hide();
	$("#content-fotos").hide();
	$("#content-computo").hide();
	$("#content-videos").hide();
	$("#content-peliculas").show();
});