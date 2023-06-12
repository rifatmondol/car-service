$(document).ready(function(){
	$('.second-slider-main.owl-carousel').owlCarousel({
		items: 1,
		autoplay: false,
		loop: false,
		autoplayTimeout: 3000,
		nav: true,
		dots:false,
		animateIn:'animate__fadeInLeft',
		autoplayHoverPause: true,
		navText: ["<i class='fas fa-chevron-left'>", "<i class='fas fa-chevron-right'>"]
	});
});

