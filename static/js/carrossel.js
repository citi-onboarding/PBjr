$(document).ready(function(){
  $('.carrossel').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: true,
    dots: true,
    prevArrow: '<div id="Seta-esquerda"> <img src="static/imagens/icones/back.svg"> </div>',
    nextArrow: '<div id="Seta-direita"> <img src="static/imagens/icones/next.svg"> </div>',
    responsive: [
    	{
    		breakpoint: 1024,
    		settings:{
    		    infinite: true,
			    slidesToShow: 4,
			    slidesToScroll: 4,
			    arrows: true,
			    dots: false
    		}
    	},
        {
            breakpoint: 800,
            settings:{
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 3,
                arrows: true,
                dots: false
            }
        },
    	{
    		breakpoint: 600,
    		settings:{
    			infinite: true,
			    slidesToShow: 2,
			    slidesToScroll: 2,
			    arrows: true,
			    dots: false
    		}
    	},
    	{
    		breakpoint: 480,
    		settings:{
    			infinite: true,
			    slidesToShow: 1,
			    slidesToScroll: 1,
			    arrows: true,
			    dots: false
    		}
    	}
    ]
  });
});