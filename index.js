$(document).ready(function() {
    
    

    console.log('read');
    $('.header').children().css('opacity', '0');
    $('#header-tiles').css('opacity', '1');


    setTimeout(function() {
        $('.header').children().css('opacity', '');
        $('.nav ul').children().css('animation', 'slide-up 2s cubic-bezier(.49,.01,0,1)');
        $('#scrolldown').children().css('animation', 'slide-up 2s cubic-bezier(.49,.01,0,1)');
    }, 1600);

    setTimeout(function() {
        $('.header h1').css('visibility', 'visible');
        $('.header hr').css('visibility', 'visible');
        $('.header p').css('visibility', 'visible');
        $('#header-iphones').css('visibility', 'visible');
    }, 2300);



    


    $("#scrolldown").click(function() { /*select class that triggers scroll*/
        $('html, body').animate({
            scrollTop: $(".quote").offset().top - 200 /*class you want to scroll to!!*/
        }, 1000); /*animation time length*/
    });

    });