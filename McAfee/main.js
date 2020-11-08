$(document).ready(function(){
    setTimeout(function(){
        $("div#cookies").fadeIn(1000);
    },1000);
    $("div#cookies button[name='cancelar_cookie']").click(function(){
        $("div#cookies").fadeOut(1000);
    });
    $("div#cookies button[name='aceptar_cookie']").click(function(){
        $("div#cookies").html("<center><h3>Gracias por aceptar nuestras cookies</h3></center>");
        setTimeout(function(){
            $("div#cookies").fadeOut(1000);
        },1000);
    });
});