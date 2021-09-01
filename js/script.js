
(function ($) {
	new WOW().init();
	"use strict";
	$(document).ready(function () {

		$('.banner-carousel').on('initialized.owl.carousel changed.owl.carousel', function (e) {
			if (!e.namespace) {
				return;
			}
			var carousel = e.relatedTarget;
			$('.banner-counter').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);
		}).owlCarousel({
			items: 3,
			loop: true,
			autoplay: true,
			autoplayTimeout: 4000,
			autoplaySpeed: 2000,
			dots: false,
			nav: true,
			navText: ["<img src='images/icon-left.svg'>", "<img src='images/icon-right.svg'>"],
			margin: 30,
			mouseDrag: true,
			smartSpeed: 1000,
			responsive: {
				// breakpoint from 0 up
				0: {
					items: 1,
					nav: true
				},
				576: {
					items: 1,
					nav: true
				},
				// breakpoint from 480 up
				768: {
					items: 1
				},
				// breakpoint from 768 up
				992: {
					items: 1
				}
			}
		});

		$('.service-carousel').on('initialized.owl.carousel changed.owl.carousel', function (e) {
			if (!e.namespace) {
				return;
			}
			var carousel = e.relatedTarget;
			$('.service-counter').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);
		}).owlCarousel({
			items: 3,
			loop: true,
			autoplay: false,
			autoplayTimeout: 4000,
			autoplaySpeed: 1000,
			dots: false,
			nav: true,
			navText: ["<img src='images/icon-left.svg'>", "<img src='images/icon-right.svg'>"],
			margin: 30,
			mouseDrag: true,
			smartSpeed: 1000,
			responsive: {
				// breakpoint from 0 up
				0: {
					items: 1,
					nav: true
				},
				576: {
					items: 1,
					nav: true
				},
				// breakpoint from 480 up
				768: {
					items: 1
				},
				// breakpoint from 768 up
				992: {
					items: 3
				}
			}
		});

		var a = 0;
		$(window).scroll(function () {

			var oTop = $('#counter').offset().top - window.innerHeight;
			if (a == 0 && $(window).scrollTop() > oTop) {
				$('.counter-value').each(function () {
					var $this = $(this),
						countTo = $this.attr('data-count');
					$({
						countNum: $this.text()
					}).animate({
						countNum: countTo
					},

						{

							duration: 7000,
							easing: 'swing',
							step: function () {
								$this.text(Math.floor(this.countNum));
							},
							complete: function () {
								$this.text(this.countNum);
								//alert('finished');
							}

						});
				});
				a = 1;
			}

		});

		$(document).on('click', 'a[href^="#"]', function (e) {
			var menuheight, navbar, header;
			// header = jQuery("header").outerHeight();
			navbar = jQuery(".navbar").innerHeight();
			menuheight = header + navbar;
			e.preventDefault();
			$('html, body').stop().animate({
				scrollTop: $($(this).attr('href')).offset().top - navbar
			}, 1500, 'linear');
		});

		$('.custom-navbar>li>a').on('click', function () {
			$('.navbar-collapse').collapse('hide');
		});
	});
	$(document).click(function (event) {
		$('.navbar-collapse').collapse('hide');
	});

	// $(window).bind('scroll', function () {
	// 	if ($(window).scrollTop() > 50) {
	// 		$("#primary-header").addClass('navbar-fixed');
	// 	}
	// 	else {
	// 		$("#primary-header").removeClass('navbar-fixed');
	// 	}
	// });
	if ($(window).width() < 767) {
	
	} else {
	}
}(jQuery));


