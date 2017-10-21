$(document).ready(function() {
    

    $('.header').children().css('opacity', '0');
    


    setTimeout(function() {
        $('.header').children().css('opacity', '');
        $('.header .text').css('visibility', 'visible');
        $('.nav ul').children().css('animation', 'slide-up 2s cubic-bezier(.49,.01,0,1)');
    }, 100);


    setTimeout(function() {
        $('.header').children().css('opacity', '');
        $('.inputs .one h2').css('visibility', 'visible');
        $('.name-controls #next1').css('visibility', 'visible');
        $('.inputs .one .line-input').css('visibility', 'visible');
        $('.nav ul').children().css('animation', 'slide-up 2s cubic-bezier(.49,.01,0,1)');
    }, 1300);



  


    $('#next1').click(function() {

        if (!$('#name').val()) {
            $('.name-controls #null-prompt').css('display', 'inline-block').fadeIn();
        } else {
            var nameInput = $('#name').val()
            $('input[name="name"]').val(nameInput);
            $('#null-prompt').fadeOut();
            $('.one h2').css('animation', 'send-off 1.3s cubic-bezier(.59,-0.38,0,1)');
            $('.one .line-input').css('animation', 'send-off-faded 1.3s cubic-bezier(.59,-0.38,0,1)');
            $('.name-controls #next1').fadeOut();


            setTimeout(function() {
                hideInput();
            }, 1200);


            function hideInput() {
                $('.one h2').css('display', 'none');
                $('.one .line-input').css('display', 'none');
                $('.two h2').css('visibility', 'visible').css('animation', 'pan-in 2s cubic-bezier(0.19, 1, 0.22, 1)');
                $('.two .line-input').css('visibility', 'visible').css('animation', 'pan-in-faded 2s cubic-bezier(0.19, 1, 0.22, 1)');
                $('#next2').css('visibility', 'visible').css('animation', 'slide-up 2s cubic-bezier(0.19, 1, 0.22, 1)');
            }

            
        }

    });




    $('#next2').click(function() {


        if (!$('#company').val()) {
            console.log("Empty Two");
            $('.company-controls #null-prompt').css('display', 'inline-block').css('visibility', 'visible');
        } else {
            var companyInput = $('#company').val()
            $('input[name="company"]').val(companyInput);
            $('.company-controls #null-prompt').fadeOut();
            $('.two h2').css('animation', 'send-off 1.3s cubic-bezier(.59,-0.38,0,1)');
            $('.two .line-input').css('animation', 'send-off-faded 1.3s cubic-bezier(.59,-0.38,0,1)');
            $('.company-controls #next2').fadeOut();


            setTimeout(function() {
                hideInput2();
            }, 1200);


            function hideInput2() {
                $('.two h2').css('display', 'none');
                $('.two .line-input').css('display', 'none');
                $('.three h2').css('visibility', 'visible').css('animation', 'pan-in 2s cubic-bezier(0.19, 1, 0.22, 1)');
                $('.three .line-input').css('visibility', 'visible').css('animation', 'pan-in-faded 2s cubic-bezier(0.19, 1, 0.22, 1)');
                $('#next3').css('visibility', 'visible').css('animation', 'slide-up 2s cubic-bezier(0.19, 1, 0.22, 1)');
            }

            
        }

    });




    $('#next3').click(function() {
        

        if (!$('#email').val()) {
            $('.email-controls #null-prompt').css('display', 'inline-block').css('visibility', 'visible');
        } else {
            var emailInput = $('#email').val()
            $('input[name="_replyTo"]').val(emailInput);
            $('.email-controls #null-prompt').fadeOut();
            $('.three h2').css('animation', 'send-off 1.3s cubic-bezier(.59,-0.38,0,1)');
            $('.three .line-input').css('animation', 'send-off-faded 1.3s cubic-bezier(.59,-0.38,0,1)');
            $('.email-controls #next3').fadeOut();


            setTimeout(function() {
                hideInput2();
            }, 1200);


            function hideInput2() {
                $('.three h2').css('display', 'none');
                $('.three .line-input').css('display', 'none');
                $('.four h2').css('visibility', 'visible').css('animation', 'pan-in 2s cubic-bezier(0.19, 1, 0.22, 1)');
                $('.four .line-input').css('visibility', 'visible').css('animation', 'pan-in-faded 2s cubic-bezier(0.19, 1, 0.22, 1)');
                $('#next4').css('visibility', 'visible').css('animation', 'slide-up 2s cubic-bezier(0.19, 1, 0.22, 1)');
                $('.budget-controls #null-prompt').css('display', 'inline-block').css('visibility', 'visible').css('animation', 'slide-up 2s cubic-bezier(0.19, 1, 0.22, 1)');
            }

            
        }

    });




    $('#next4').click(function() {
        
            var budgetInput = $('#budget').val()
            $('input[name="budget"]').val(budgetInput);
            $('.budget-controls').children().fadeOut();
            $('.four h2').css('animation', 'send-off 1.3s cubic-bezier(.59,-0.38,0,1)');
            $('.four .line-input').css('animation', 'send-off-faded 1.3s cubic-bezier(.59,-0.38,0,1)');


            setTimeout(function() {
                hideInput2();
            }, 1200);


            function hideInput2() {
                
                $('.four h2').css('display', 'none');
                $('.four .line-input').css('display', 'none');
                $('.five h2').css('visibility', 'visible').css('animation', 'pan-in 2s cubic-bezier(0.19, 1, 0.22, 1)');
                $('.five .line-input').css('visibility', 'visible').css('animation', 'pan-in-faded 2s cubic-bezier(0.19, 1, 0.22, 1)');
                $('#next5').css('visibility', 'visible').css('animation', 'slide-up 2s cubic-bezier(0.19, 1, 0.22, 1)');
            }


    });

    
    $('#next5').click(function() {
        

        if (!$('#about').val()) {
            $('.about-controls #null-prompt').css('display', 'inline-block').css('visibility', 'visible');
        } else {
            var aboutInput = $('#about').val()
            $('input[name="about"]').val(aboutInput);
            $('.about-controls #null-prompt').fadeOut();
            $('.five h2').css('animation', 'send-off 1.3s cubic-bezier(.59,-0.38,0,1)');
            $('.five .line-input').css('animation', 'send-off-faded 1.3s cubic-bezier(.59,-0.38,0,1)');
            $('.about-controls #next5').fadeOut();


            setTimeout(function() {
                hideInput2();
            }, 1200);


            function hideInput2() {
                document.getElementById('form-sub').click();
                $('.five h2').css('display', 'none');
                $('.five .line-input').css('display', 'none');
                $('.sent h2').css('visibility', 'visible').css('animation', 'pan-in 2s cubic-bezier(0.19, 1, 0.22, 1)');
                $('.sent p').css('visibility', 'visible').css('animation', 'pan-in 2s cubic-bezier(0.19, 1, 0.22, 1)');
                $('#next6').css('visibility', 'visible').css('animation', 'slide-up 2s cubic-bezier(0.19, 1, 0.22, 1)');
            }

        

        }


    });


    
    
    
});
    