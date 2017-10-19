$(document).ready(function() {
        

    $('.header').children().css('opacity', '0');
    $('#header-tiles').css('opacity', '1');


    setTimeout(function() {
        $('.header').children().css('opacity', '');
        $('.header .text').css('visibility', 'visible');
        $('.nav ul').children().css('animation', 'slide-up 2s cubic-bezier(.49,.01,0,1)');
    }, 100);


    $("#scrolldown").click(function() { /*select class that triggers scroll*/
        $('html, body').animate({
            scrollTop: $(".about-us").offset().top - 200/*class you want to scroll to!!*/
        }, 1000); /*animation time length*/
    });

    setTimeout(function(){
        $('#scrolldown').css('visibility', 'visible');
        $('#scrolldown').css('animation', 'scroll-down 2s cubic-bezier(.49,.01,0,1)');
    }, 1400);

    });