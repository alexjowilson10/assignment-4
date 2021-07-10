$(document).ready(function() {


    var size = $("#futbol").css("width");

    var width = size;

    $("#futbol").click(function() {

        console.log("LOLZ");
    });

    var i = 0;

    $("#stop").click(function() {
        i++;
        if(i % 2 != 0)
        {
            $("#futbol").fadeOut();
            $("#stop").html('Appear!'); // change text on button click 
        }
        else{
            $("#futbol").show();
            $("#stop").html('Disappear!'); // change text on button click 
        }
    });


});