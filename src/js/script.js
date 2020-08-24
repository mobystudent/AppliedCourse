$(window).on('load', () => {
	accordion();
	hint();
	slider();
	controlViewSlides();
	burger();
});

function accordion() {
	$(".question__btn").click(function(e) {
		e.preventDefault();

		$(this).toggleClass("question__btn--active");
		$(this).parents(".question__header").next(".question__body").slideToggle();
	})
}

function hint() {
	$(".info").mouseenter(function(){
		$(".info__wrap").addClass("info__wrap--show");
	}).mouseleave(function(){
		$(".info__wrap").removeClass("info__wrap--show");
	});
}

function slider() {
	$('.slider .slider__content').slick({
		variableWidth: true,
		speed: 500,
		easing: 'ease-in-out',
		appendArrows: '.slider__control',
		prevArrow: '.slider__btn--prev',
		nextArrow: '.slider__btn--next',
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					dots: true
				}
			}
		]
	});
}

function controlViewSlides() {
	const slidesCount = $('.slider .slick-track').children().not(".slick-cloned").length;

	$(".slider__num--total").text(slidesCount);
	_sliderArrows();
	_getIndexActiveSlide();
}

function _sliderArrows() {
	$('.slider__btn').click(function(e) {
		e.preventDefault();

		_getIndexActiveSlide();
	});
}

function _getIndexActiveSlide() {
	const indexActiveSlide = $('.slider').find('.slick-active').data("slick-index");

	$('.slider__num--active').text(indexActiveSlide+1);
}

function burger() {
	$(".btn--burger").click(function() {
		$(".btn--burger").toggleClass("btn--burger-active");
		$(".burger").slideToggle();
	});
}
