$(document).ready(function() {

    $(document).keypress(function(e) {
        if(e.which == 13) {
            window.location.href = "index.html";
        }
    });


    $( ".rules" ).click(function() {
        window.location.href = "index.html";
    });

});