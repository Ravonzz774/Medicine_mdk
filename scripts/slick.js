$(".slider-services").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  infinite: true,
  speed: 1000,
  nextArrow: document.querySelector(".slider-right-arrow-services"),
  prevArrow: document.querySelector(".slider-left-arrow-services"),
  responsive: [
    {
      breakpoint: 1180,
      settings: {
        slidesToShow: 2,
      },
    },

    {
      breakpoint: 880,
      settings: {
        slidesToShow: 1,
        variableWidth: true,
      },
    },
  ],
});


$(".slider-testimonials").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
    speed: 1000,
    nextArrow: document.querySelector(".slider-right-arrow-testimonials"),
    prevArrow: document.querySelector(".slider-left-arrow-testimonials"),
    responsive: [
      {
        breakpoint: 1180,
        settings: {
          slidesToShow: 2,
        },
      },
  
      {
        breakpoint: 880,
        settings: {
          slidesToShow: 1,
          variableWidth: true,
        },
      },
    ],
  });
  