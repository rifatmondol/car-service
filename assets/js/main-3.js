$(document).ready(function(){
	$('.testimonial-slider .row.owl-carousel').owlCarousel({
		items: 1,
		autoplay: false,
		loop: true,
		margin: 10,
		autoplayTimeout: 3000,
		nav: true,
		dots:false,
		autoplayHoverPause: true,
		navText: ["<i class='fas fa-chevron-left'>", "<i class='fas fa-chevron-right'>"]
	});
});


