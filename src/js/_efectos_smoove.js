// JavaScript para Efectos de transición en los elementos

$(document).ready(function(){
	
	function explode(){
	  $('#watchme').addClass('animated title-section slideInUp count');
	}
	
	setTimeout(explode, 3000);

	
	
/*	if ($("#section2").hasClass('active')) {
		
		var e = document.getElementById("watchme");
	
		e.addEventListener("animationstart", listener, false);
		e.addEventListener("animationend", listener, false);
		e.addEventListener("animationiteration", listener, false);

		e.className = "animated title-section slideInUp count";
		function listener(e) {
			  var l;
			  switch(e.type) {
				case "animationstart":
				  l = "Iniciado: tiempo transcurrido " + e.elapsedTime;
				  break;
				case "animationend":
				  l = "Finalizado: tiempo transcurrido " + e.elapsedTime;
				  break;
				case "animationiteration":
				  l = "Nueva iteración comenzó a los " + e.elapsedTime;
				  break;
			  }
				console.log(l);
			}
	}  */
	
		
	
});//cierre de todo el código