// JavaScript Document




		/* MI CODIGO JQUERY */

		$(document).ready(function(){			
							
			/* Codigo para el dropdown menu hover */
			$('ul.nav li.dropdown-max-screen').hover(function() {
			  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
			}, function() {
			  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
			});
			
			
		});	