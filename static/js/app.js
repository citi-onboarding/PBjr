

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

function smoothHeader() {
	
	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
		$('#header').addClass('on-scroll');
		$('#header .logo-colorida').css('display', 'block');
		$('#header .logo').css('display', 'none');
		$('#header a').css('color', 'var(--preto)');
		$('.icone-mobile i').css('color', 'var(--preto)');

	} else {
		$('#header').removeClass('on-scroll');
		$('#header .logo').css('display', 'block');
		$('#header .logo-colorida').css('display', 'none');
		$('#header a').css('color', 'white');
		$('.icone-mobile i').css('color', 'white');
	}
	
}

window.addEventListener('load', function() {
	scrollSuave();
});

window.onscroll = function() { 
	smoothHeader()
 };
