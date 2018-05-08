// JavaScript para la página de Post-venta.html

$(document).ready(function(){
	
	/* Para que se oculte el menú de post-venta cuando se esté cercano al footer */	
	$(function(){
				$(window).scroll(function(){
				if ($(window).scrollTop() > 3300)
				{
					$("#nav-aux-post-venta").fadeOut();
					
				}
				else
				{
					$("#nav-aux-post-venta").fadeIn();
					
				}
				});
			});
});