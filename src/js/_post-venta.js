// JavaScript para la página de Post-venta.html

$(document).ready(function(){
	
	/* Para agregar la clase "ocultar" al nav auxiliar, al reducir < 992px la ventana del navegador */
	$(function(){
		$(window).resize(function(){
			if ($(window).width() < 992)
			{
				$("div#nav-aux-post-venta").addClass("ocultar");					
			}
			else
			{
				$("div#nav-aux-post-venta").removeClass("ocultar");					
			}
		});
	});
	
	/* Para que se oculte el menú de post-venta cuando se esté cercano al footer */	
	$(function(){
		$("#section5").scroll(function(){
			if ($("#section5").scrollTop() > 100)
			{
				$("#nav-aux-post-venta").fadeOut();
					
			}
			else
			{
				$("#nav-aux-post-venta").fadeIn();
					
			}
		});
	});
	
	$(function(){
		$(window).scroll(function(){
			if ($(window).scrollTop() > 2000)
			{
				$("#nav-aux-post-venta-mobile").fadeOut();
					
			}
			else
			{
				$("#nav-aux-post-venta-mobile").fadeIn();
					
			}
		});
	});
	
	/* Para que al pasar el mouse por la sección se active el botón del menú auxiliar */		
	$(function(){
			$('#Descripcion1, #Descripcion2, #Descripcion3').mouseover(function(){
				$('#nav-aux-post-venta a.active').removeClass('active');
				$('a.link-naux-1').addClass('active');
			});
		
			$('#Servicios').mouseover(function(){
				$('#nav-aux-post-venta a.active').removeClass('active');
				$('a.link-naux-2').addClass('active');
			});
			
			$('.FAQ').mouseover(function(){
				$('#nav-aux-post-venta a.active').removeClass('active');
				$('a.link-naux-3').addClass('active');
			});
			
	});
	
	
	/* Efecto Parallax */
	/*$(window).scroll(function(){
		var barra = $(window).scrollTop();
		var posicion =  (barra * 0.10); //<--- este es el valor que se edita para la velocidad del efecto con el scroll
		
		$('section#Descripcion1').css({ //<-- Colocar el elemento al que se aplica (trabajado previamente con css)
			'background-position': '0 -' + posicion + 'px'
		});
		
		$('section#Descripcion3').css({ //<-- Colocar el elemento al que se aplica (trabajado previamente con css)
			'background-position': '0 -' + posicion + 'px'
		});
 
	});*/
	
	
});//cierre de todo el código