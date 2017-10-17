$(document).ready(function() {
        


    $("#scrolldown").click(function() { /*select class that triggers scroll*/
        $('html, body').animate({
            scrollTop: $(".about-us").offset().top - 200/*class you want to scroll to!!*/
        }, 1000); /*animation time length*/
    });

    });