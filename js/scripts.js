$('document').ready(function(){
    $("#contacto").click(function () {
        $('html,body').animate({
            scrollTop: $("#contactoSeccion").offset().top
        }, 1500);
    });
    
    $("#volver").click(function () {
        $('html,body').animate({
            scrollTop: $("#inicio").offset().top
        }, 1500);
    });
});