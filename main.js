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

    // typing animation script 
    var typed = new Typed(".typing", {
        strings: ["Soccer Player &#9917;", "Computer Science Major &#128104;&#8205;&#128187;", "Messi fan &#127462;&#127479; &#127942;"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-2", {
        strings: ["Soccer Player", "Computer Science Major &#128104;&#8205;&#128187;", "Messi fan &#127462;&#127479; &#127942;"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });


});