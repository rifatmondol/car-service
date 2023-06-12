$(document).ready(function(){
	$('.slider-full.owl-carousel').owlCarousel({
		items: 1,
		autoplay: false,
		loop: true,
		autoplayTimeout: 4000,
		nav: false,
		dots:true,
		animateIn: 'animate__fadeIn',
		animateOut: 'animate__fadeOut',
		autoplayHoverPause: true,
	});
});


 $(document).ready(function(){
		AOS.init({
			duration : 1000
		});
});