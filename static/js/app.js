

$('.icone-mobile').click(function(){
    $('.menu-mobile').slideToggle( "slow" );

});

$('.menu-mobile i').click(function(){
    $('.menu-mobile').slideToggle( "slow" );

});

$('.menu-mobile nav a').click(function(){
	console.log('oi');
    $('.menu-mobile').slideToggle( "slow" );

});

var distanciaTopHeader = $("#sobre-nos").offset().top; //posição do topo inicial do objeto
function smoothHeader() {
	console.log(distanciaTopHeader);
	console.log($(window).scrollTop())

	if($(window).scrollTop() >= distanciaTopHeader) {
		console.log("oi");
		$("#header-smooth").fadeIn(3000);
	}

	else {
		$("#header").removeClass("fixed");
	}
}

/* Função aprendida no curso de scrollSuave no vídeo gratuito disponibilizado no Youtube pelo
canal Origamid */

lastId = $('#sobre-nos');
function scrollSuave(){
	$('#header nav a').click(function(e){
		e.preventDefault();
		var secaoId = $(this).attr('href'),
			distanciaTopSecao = $(secaoId).offset().top,
			menuHeight = $('#header').innerHeight();
			console.log(secaoId);
			console.log(distanciaTopSecao);
		$('html, body').animate({
			scrollTop: distanciaTopSecao - menuHeight //como coloca no topo a secao, o menu cobre, por isso subtrai a altura do menu
		}, 500);
	});
}

window.addEventListener('load', function() {
	scrollSuave();
	smoothHeader()
});