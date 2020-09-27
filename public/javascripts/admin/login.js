$("#msgLogin").hide();
$("#a-recuperar").click(function () {
  $("#msgLogin").show();
  setTimeout(function() {$("#msgLogin").hide(); }, 4500);
});

console.log('hello from login')