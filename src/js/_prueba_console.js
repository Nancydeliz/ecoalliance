// JavaScript Document
$(document).ready(function(){
	
	var posicionDelElemento = $("#Descripcion2").offset();
	console.log(posicionDelElemento.top);
	
	$(window).scroll(function(){
		
		var posicionDelElemento = $("#Descripcion2").offset();
		console.log("Window " + $(window).scrollTop());
		
	});
	
});