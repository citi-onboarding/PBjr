

$('.menu-movel, .menu-movel2').click(function(){
    $('.menu-mobile').slideToggle( "slow" );

});

$('.menu-mobile #fechar').click(function(){
    $('.menu-mobile').slideToggle( "slow" );

});

$('.menu-mobile nav a').click(function(){
    $('.menu-mobile').slideToggle( "slow" );

});

$('#modal-secao').click(function(){
    $('#modal-secao').fadeOut(250);
});

	
/* Função aprendida no curso de scrollSuave no vídeo gratuito disponibilizado no Youtube pelo
canal Origamid */

lastId = $('#sobre-nos');
function scrollSuave(){
	$('#header a, .menu-mobile a, .Botão-banner a, .chamada a, .seja-parceiro a, .logo a, .logo-colorida a').click(function(e){
		e.preventDefault();
		var secaoId = $(this).attr('href'),
			distanciaTopSecao = $(secaoId).offset().top,
			menuHeight = $('#header').innerHeight();
		$('html, body').animate({
			scrollTop: distanciaTopSecao - menuHeight + 1 //como coloca no topo a secao, o menu cobre, por isso subtrai a altura do menu
		}, 800);
	});
}

function smoothHeader() {
	
	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
		$('#header').addClass('on-scroll');
		$('#header .logo-colorida').css('display', 'block');
		$('#header .logo').css('display', 'none');
		$('#header a').css('color', 'var(--preto)');
		$('.menu-movel i').css('color', 'var(--preto)');
	
	} 
	
	else {
		$('#header').removeClass('on-scroll');
		$('#header .logo').css('display', 'block');
		$('#header .logo-colorida').css('display', 'none');
		$('#header a').css('color', 'white');
		$('.menu-movel i').css('color', 'white');
	}
}

function setarCampo() {


	$('#suporte').click( function() {
		$("#assunto-campo").val("[ Produto de Suporte ]");
	});

	$('#expansao').click( function() {
		$("#assunto-campo").val("[ Produto de Expansão ]");
	});

	$('#ser-parceiro').click( function() {
		$("#assunto-campo").val("[ Quero ser um Parceiro ]");
	});

	
}

$('.imagem-empresa').click(function(e) {
	$('#modal-secao').css('display', 'block');
	const infos = ['logo', 'email', 'descricao', 'site', 'local'];
	infos.forEach(function(info){
		if(info === 'logo') {
			$(`#${info}-empresa-junior`).attr('src', e.target.getAttribute(`data-${info}`));
			return ;
		}
		$(`#${info}-empresa-junior`).html(e.target.getAttribute(`data-${info}`));
	});
});

window.addEventListener('load', function() {
	scrollSuave();
	setarCampo();
});

window.onscroll = function() { 
	smoothHeader()
 };
