$(document).ready(function() {
    
    
        $('#next1').click(function() {
    
            if (!$('#name').val()) {
                $('#null-prompt').css('display', 'inline-block').css('animation', 'pan-in 2s cubic-bezier(.49,.01,0,1);')
            } else {
    
                $('#null-prompt').fadeOut();
                $('.input-name').css("animation", "pan-in 2s cubic-bezier(.49,.01,0,1);")
                $('#next1').css("animation", "pan-in 2s cubic-bezier(.49,.01,0,1);")
    
    
                setTimeout(function() {
                    hideInput();
                }, 900);
    
                function hideInput() {
                    $('.input-name').css("display", "none");
                    $('#next1').css("display", "none");
    
    
                }
    
                setTimeout(function() {
                    showServices();
                }, 950);
    
                function showServices() {
                    $('.input-services').css('animation', 'panin 1.5s ease-in-out');
                    $('#next2').css("display", "inline-block").css('animation', 'panin 1.5s ease-in-out');
    
    
                }
            }
    
        });
    
    
        $('#next2').click(function() {
    
            if (!$('#website').is(':checked') && !$('#app').is(':checked')) {
                $('#unchecked-prompt').css('display', 'inline-block').css('animation', 'panup 0.6s ease-in-out')
            } else {
    
                $('#unchecked-prompt').fadeOut();
    
                $('.input-services').css("animation", "panout 1s ease-out")
                $('#next2').css("animation", "panout 1s ease-out")
    
    
    
                setTimeout(function() {
                    hideInput();
                }, 1000);
    
                function hideInput() {
                    $('.input-services').css("display", "none");
                    $('#next2').css("display", "none");
    
    
                }
    
                setTimeout(function() {
                    showServices();
                }, 1000);
    
                function showServices() {
                    $('.input-budget').css('display', 'block').css('animation', 'panin 1.5s ease-in-out');
                    $('#next3').css("display", "inline-block").css('animation', 'panin 1.5s ease-in-out');
                    $('#optional-prompt').css("display", "inline-block").css('animation', 'panin 1.5s ease-in-out');
    
    
    
                }
            }
    
        });
    
    
        $('#next3').click(function() {
    
    
            $('.input-budget').css("animation", "panout 1s ease-out");
            $('#next3').css("animation", "panout 1s ease-out");
            $('#optional-prompt').css("animation", "panout 1s ease-out").css('display', 'none');
    
    
            setTimeout(function() {
                hideInput();
            }, 1000);
    
            function hideInput() {
                $('.input-budget').css("display", "none");
                $('#next3').css("display", "none");
    
    
            }
    
            setTimeout(function() {
                showServices();
            }, 1000);
    
            function showServices() {
                $('.input-email').css('display', 'block').css('animation', 'panin 1.5s ease-in-out');
                $('#next4').css("display", "inline-block").css('animation', 'panin 1.5s ease-in-out');
    
    
    
            }
    
    
        });
    
    
    
        $('#next4').click(function() {
    
            if (!$('#email').val()) {
                $('#empty-prompt').css('display', 'inline-block').css('animation', 'panup 0.6s ease-in-out')
            } else {
    
                $('#empty-prompt').fadeOut();
                $('.input-email').css("animation", "panout 1s ease-out")
                $('#next4').css("animation", "panout 1s ease-out")
    
    
                setTimeout(function() {
                    hideInput();
                }, 900);
    
                function hideInput() {
                    $('.input-email').css("display", "none");
                    $('#next4').css("display", "none");
    
    
                }
    
                setTimeout(function() {
                    showServices();
                }, 1000);
    
                function showServices() {
                    $('.input-message').css('display', 'block').css('animation', 'panin 1.5s ease-in-out');
                    $('#next5').css("display", "inline-block").css('animation', 'panin 1.5s ease-in-out');
    
    
                }
            }
    
    
        });
    
    
        $('#next5').click(function() {
    
    
            $('.input-message').css("animation", "panout 1s ease-out");
            $('#next5').css("animation", "panout 1s ease-out");
    
    
            setTimeout(function() {
                hideInput();
            }, 1000);
    
            function hideInput() {
                $('.input-message').css("display", "none");
                $('#next5').css("display", "none");
    
    
            }
    
            setTimeout(function() {
                showServices();
            }, 1000);
    
            function showServices() {
                $('.sent').css('display', 'block').css('animation', 'panin 1.5s ease-in-out');
    
            }
        });
    
    
    
    });
    