var swiper = new swiper(".home",{
	spaceBetween: 30,
	centeredSlides: true,
	autoplay: {
		delay: 5000,
		disableonInteractio: false,
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
});