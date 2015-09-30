// uso de jquery
$(document).ready(function(){

    $("#suma").click(suma);

});

function suma() {
    var x = $("#valor1").val();
    var y = $("#valor2").val();
    var suma = parseFloat(x) + parseFloat(y); //parseInt
    $("#res").html(suma);
}

function resta() {
    var x = $("#valor1").val();
    var y = $("#valor2").val();
    var suma = parseFloat(x) - parseFloat(y);
    $("#res").html(suma);
}