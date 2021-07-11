$(document).ready(function() {

    /* Function for disappearing/reappearing ball */
    var i = 0;
    $("#stop").click(function() {
        i++;
        if(i % 2 != 0)
        {
            $("#futbol").fadeOut();
            $("#stop").html('APPEAR'); // change text on button click 
        }
        else{
            $("#futbol").show();
            $("#stop").html('DISAPPEAR'); // change text on button click 
        }
    });

    var j = 0;
    /* Function to get ball to go faster/slower */
    $("#speed").click(function(){
        j++;
        // speed it up! 
        if(j % 2 != 0)
        {
            document.getElementById("futbol").style.animationDuration = "1s";
            $("#speed").html('SLOW');
        }
        else{
            
            document.getElementById("futbol").style.animationDuration = "6s";
            $("#speed").html('FAST');
        }
    });


});