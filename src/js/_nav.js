// JavaScript Document




		/* MI CODIGO JQUERY */

		$(document).ready(function(){			
							
			/* Codigo para el dropdown menu hover */
			$('ul.nav li.dropdown-max-screen').hover(function() {
			  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
			}, function() {
			  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
			});
			
			
			/* Codigo para que aparezca la barra de búsqueda y se oculte el estado anterior */
			$(function(){
				$(".nav-buscar").click(function(event){
				  $("#nav-s-1").addClass("ocultar");
				  $("#nav-s-2").removeClass("ocultar");
			   });		
			});	
			
			$(function(){
				$("#close-buscar").click(function(event){
				  $("#nav-s-2").addClass("ocultar");
				  $("#nav-s-1").removeClass("ocultar");
				  
			   });		
			});	
			
			
			
		});	