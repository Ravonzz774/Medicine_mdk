$('.slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    variableWidth: true,
    infinite: true,
    speed: 1000,
    nextArrow: document.querySelector('.slider-right-arrow'),
    prevArrow: document.querySelector('.slider-left-arrow ')
});