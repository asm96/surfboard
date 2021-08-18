const slider = $('.products').bxSlider({
  pager: false,
  controls: false
});

$(".product-slider__arrow_direction_prev").click(e => {
  e.preventDefault();
  slider.goToPrevSlide();
})
$(".product-slider__arrow_direction_next").click(e => {
  e.preventDefault();
  slider.goToNextSlide();
})