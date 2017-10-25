$(document).ready(function() {



    $(window).scroll(function() {
        console.log($(window).scrollTop());
        if ($(window).scrollTop() > 200) {
            $('.nav-bg').removeClass('nav-slideBackup');
            $('.nav-bg').addClass('nav-slideDown');
            $('.nav-bg').css('display', 'block');
            $('.left li a').css('color', 'black');
            $('#top').css('background', 'black');
            $('#bot').css('background', 'black');
            $('.header-logo').attr('src', 'assets/icons/bonnesailogoblack.svg');
        } else {
            $('.nav-bg').removeClass('nav-slideDown');
            $('.nav-bg').addClass('nav-slideBackup').delay(2000).css('display', 'none');
            $('.left li a').css('color', 'white');
            $('#top').css('background', 'white');
            $('#bot').css('background', 'white');
            $('.header-logo').attr('src', 'assets/icons/bonnesailogo.svg');
        }
      });
    


    $('.header').children().css('opacity', '0');
    $('#header-tiles').css('opacity', '1');


    setTimeout(function() {
        $('.header').children().css('opacity', '');
        $('.nav ul').children().css('animation', 'slide-up 2s cubic-bezier(.49,.01,0,1)');
    }, 1600);


    setTimeout(function(){
        $('#scrolldown').css('visibility', 'visible');
        $('#scrolldown').css('animation', 'scroll-down 2s cubic-bezier(.49,.01,0,1)');
    }, 3500);

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


    $("#back-to-top").click(function() { /*select class that triggers scroll*/
        $('html, body').animate({
            scrollTop: 0 /*class you want to scroll to!!*/
        }, 1000); /*animation time length*/
    });




    });