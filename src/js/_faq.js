//JS para FAQ

$(document).ready(function(){
			
					
       		/* Para agregar la clase "solo-mobile" al reducir < 992px la ventana del navegador */
			$(function(){
				$(window).resize(function(){
				if ($(window).width() < 992)
				{
					$("section.FAQ").addClass("solo-mobile");
				}
				else
				{
					$("section.FAQ").removeClass("solo-mobile");					
				}
				});
			});
	
			
});	
