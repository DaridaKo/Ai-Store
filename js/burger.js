$(document).ready(function(){
	// $('.slider__body').slick({
	// 	arrows:false,
	// 	dots:true,
	// 	adaptiveHeight:true,
	// 	infinite:true,
	// 	autoplay:true,
	// 	autoplaySpeed:2000
	// });
	$('.header__burger').click(function(){
		$('.header__burger, .header__menu, .header').toggleClass('active');
		$('body').toggleClass('lock');
	});

	$(function fixedH(){
	const header = $('.header');
	const background = $('.background');
	let backgroundH = background.innerHeight();
	let scrollPos = $(window).scrollTop();

	checkScroll(scrollPos, backgroundH);

	$(window).on("scroll resize", function(){
		let scrollPos = $(window).scrollTop();
		let backgroundH = background.innerHeight();

		checkScroll(scrollPos, backgroundH);
	});

	function checkScroll(scrollPos, backgroundH){
		if (scrollPos > backgroundH) {
			header.addClass('fixed');
		} else{
			header.removeClass('fixed');
		}
	}
});
});