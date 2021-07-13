$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }
        else{
            $('.scroll-up-btn').removeClass("show");
        }
    });


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
    
    var i = 0;
    /* See more button on About Section */
    $("#messi").click(function(){
        i++;

        if(i % 2 != 0)
        {
            $("#copa").attr("src", "images/balon.JPG");
            $("#lolz").html("6 Balon d'Ors... 7th one coming this year"); // change text on button click 
        }
        else{
            $("#copa").attr("src", "images/Messi_Argentina_Copa_America_Trophy_1625971376302_1625971405676.webp");
            $("#lolz").html("Copa America 2021"); // change text on button click 

        }
    });


    /* card effects */
    $("#card-1").click(function(){
        $('#project').css('background-color', '#EE82EE');
    }); 

    $("#card-2").click(function(){
        $('#project').css('background-color', '#FF4500');
    });

    $("#card-3").click(function(){
        $('#project').css('background-color', '#3CB371');
    });



    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

    // typing animation script 
    var typed = new Typed(".typing", {
        strings: ["Soccer Player &#9917;", "Computer Science Major &#128104;&#8205;&#128187;", "Messi fan &#127462;&#127479; &#127942;"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-2", {
        strings: ["2021"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });





    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active")
        $('.menu-btn i').toggleClass("active")
    });

    // owl carousel script
    $('.owl-carousel').owlCarousel({
       margin: 20,
       loop: true,
       autoplayTimeOut: 2000,
       autoplayHoverPause: true,
       responsive: {
           0:{
               items: 1,
               nav: false
           },
           600:{
               items: 2,
               nav: false
           },
           1000:{
               items: 3,
               nav: false
           }
       } 
    });
});