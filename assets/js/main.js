$(document).ready(function(){

    function limpiarErrores() {
        $("#nombre-help").html("")
        $("#email-help").html("")
        $("#telefono-help").html("")
        $("#mensaje-help").html("")
        $("#lbl-nombre").removeClass("text-primary")
        $("#lbl-email").removeClass("text-primary")
        $("#lbl-telefono").removeClass("text-primary")
        $("#lbl-mensaje").removeClass("text-primary")
    }

    $("#btn-limpiar").click(function(){
        limpiarErrores();
        $("#txt-nombre").val("")
        $("#txt-email").val("")
        $("#txt-telefono").val("")
        $("#txt-mensaje").val("")
        $("#alert-send").addClass("d-none")
    })

    $("#formulario").submit(function(evento) {
        evento.preventDefault();
        limpiarErrores();
        var nombre = $("#txt-nombre").val();
        var email = $("#txt-email").val();
        var telefono = $("#txt-telefono").val();
        var mensaje = $("#txt-mensaje").val();

        var valido = true;
        if(nombre == "") {
            valido = false
            $("#nombre-help").html("Ingresa tu Nombre")
        }
        if(email == "") {
            valido = false
            $("#email-help").html("Ingresa tu Correo")
        }

        if(telefono == "") {
            valido = false
            $("#telefono-help").html("Ingresa tu Teléfono")
        }

        if(mensaje == "") {
            valido = false
            $("#mensaje-help").html("Ingresa tu Mensaje")
        }

        if(valido) {
            $("#alert-send").removeClass("d-none")
        }
    })

});