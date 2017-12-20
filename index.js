$(document).ready(function() {

	var menuSwitch = false;


	$(window).scroll(function() {

		if ($(window).scrollTop() > 200 && menuSwitch == false) {
			$('.nav-bg').removeClass('nav-slideBackup');
			$('.nav-bg').addClass('nav-slideDown');
			$('.nav-bg').css('display', 'block');
			$('.left li a').css('color', 'black');
			$('#top').css('background', 'black');
			$('#bot').css('background', 'black');
			$('.header-logo').attr('src', 'assets/icons/bonnesailogoblack.svg');
			$('.nav-bg ul li a').css('color', 'black');

		} else if ($(window).scrollTop() < 200 && menuSwitch == false) {
			$('.nav-bg').removeClass('nav-slideDown');
			$('.nav-bg').addClass('nav-slideBackup').fadeOut();
			$('.left li a').css('color', 'white');
			$('#top').css('background', 'white');
			$('#bot').css('background', 'white');
			$('.header-logo').attr('src', 'assets/icons/bonnesailogo.svg');
		}
	});


	$('.burger').click(function() {
		if (menuSwitch == false) {
			menuSwitch = true;

			$('#top').css('animation', 'top-stroke-engage 0.7s cubic-bezier(.49,.01,0,1)');
			$('#bot').css('animation', 'bottom-stroke-engage 0.7s cubic-bezier(.49,.01,0,1)');
			$('.nav-bg #logo-text').css('color', 'white');
			$('#top').css('background', 'white');
			$('#bot').css('background', 'white');
			$('.header-logo').attr('src', 'assets/icons/bonnesailogo.svg');

			setTimeout(function() {
				$('#top').css('transform', 'rotate(45deg)').css('position', 'relative').css('top', '1px');
				$('#bot').css('transform', 'rotate(-45deg)').css('position', 'relative').css('top', '-1px');
			}, 700);

			$('.mobile-menu').css('display', 'block').css('animation', 'expand-right-to-left 0.5s cubic-bezier(.49,.01,0,1)');
			$('.nav-bg').css('display', 'block').css('background', 'none').css('box-shadow', 'none').css('animation', 'none');
			$('.nav-bg ul li a').css('color', 'white');
			$('.menu-links li').css('animation', 'slide-from-right 1s cubic-bezier(.49,.01,0,1)');
		} else {
			menuSwitch = false;

			$('.mobile-menu').css('animation', 'exit-left-to-right 0.5s cubic-bezier(.49,.01,0,1)');
			$('#top').css('transform', '').css('top', '');
			$('#bot').css('transform', '').css('top', '');

			setTimeout(function() {
				$('.mobile-menu').css('display', 'none');
				$('.nav-bg').css('box-shadow', '').css('animation', '');
				$('.nav-bg #logo-text').css('color', 'black');
				$('#top').css('animation', '');
				$('#bot').css('animation', '');
			}, 500);





			$('.nav-bg').css('display', 'none').css('background', 'white');

		}
	});



	$('.header').children().css('opacity', '0');
	$('#header-tiles').css('opacity', '1');


	setTimeout(function() {
		$('.header').children().css('opacity', '');
		$('.nav ul').children().css('animation', 'slide-up 1s cubic-bezier(.49,.01,0,1)');
	}, 200);


	setTimeout(function() {
		$('#scrolldown').css('visibility', 'visible');
		$('#scrolldown').css('animation', 'scroll-down 2s cubic-bezier(.49,.01,0,1)');
	}, 1000);

	setTimeout(function() {

		$('.header h1').css('visibility', 'visible');
		$('.header hr').css('visibility', 'visible');
		$('.header p').css('visibility', 'visible');
		$('#header-iphones').css('visibility', 'visible');
	}, 300);





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


	jQuery(document).ready(function($) {
		//create the slider
		$('.cd-testimonials-wrapper').flexslider({
			selector: ".cd-testimonials > li",
			animation: "slide",
			controlNav: true,
			slideshow: false,
			smoothHeight: true,
			start: function() {
				$('.cd-testimonials').children('li').css({
					'opacity': 1,
					'position': 'relative'
				});
			}
		});
	});

});
