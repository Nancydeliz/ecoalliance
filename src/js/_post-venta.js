// JavaScript para la página de Post-venta.html

$(document).ready(function(){
	
	/* Para que se oculte el menú de post-venta cuando se esté cercano al footer */	
	$(function(){
		$(window).scroll(function(){
			if ($(window).scrollTop() > 4000)
			{
				$("#nav-aux-post-venta").fadeOut();
					
			}
			else
			{
				$("#nav-aux-post-venta").fadeIn();
					
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
	
	
	
	
});//cierre de todo el código