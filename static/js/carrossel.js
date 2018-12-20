$(document).ready(function(){
  $('.slider-ejs').slick({
    infinite: true,
    slidesToShow: 5,
	  slidesToScroll: 5,
    arrows: true,
    dots: true,
    prevArrow: '<div id="Seta-esquerda"> <img src="static/imagens/icones/back.svg"> </div>',
    nextArrow: '<div id="Seta-direita"> <img src="static/imagens/icones/next.svg"> </div>',
    responsive: [
      {
        breakpoint: 1180,
        settings: {
          arrows: true,
          dots: true,
          slidesToShow: 4,
          slidesToScroll: 4,

        }
      },
      {
        breakpoint: 1052,
        settings: {
          arrows: true,
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },

      {
        breakpoint: 743,
        settings: {
          arrows: true,
          dots: false,
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },

      {
        breakpoint: 505,
        settings: {
          arrows: true,
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
    
  });

  $('.slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: true,
    dots:false,
	  prevArrow: $(".prev"),
    nextArrow: $(".next"),
    responsive: [
        {
          breakpoint: 1251,
          settings: {
            arrows: true,
            slidesToShow: 4,
            slidesToScroll: 4,

          }
        },
        {
          breakpoint: 1052,
          settings: {
            arrows: true,
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },

        {
          breakpoint: 743,
          settings: {
            arrows: true,
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },

        {
          breakpoint: 505,
          settings: {
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    

	});

});