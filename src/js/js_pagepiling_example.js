// JS Papepiling EXAMPLE

$(document).ready(function () {
    $('#pagepiling').pagepiling({
		verticalCentered: false,
		css3: false,
		sectionsColor: ['black', 'black', '#fff', '#000000'],
		menu: '#myMenu',
		anchors : [ 'section1' , 'section2' , 'section3' , 'section4' , 'section5', 'section6' ], 
		
		onLeave: function (index, nextIndex, direction) {

			//fading out the txt of the leaving section
			$('.section').eq(index - 1).find('h2').fadeOut(700, 'easeInQuart');

			//fading in the text of the destination (in case it was fadedOut)
			$('.section').eq(nextIndex - 1).find('h2').fadeIn(700, 'easeInQuart');
			
						
			//reaching our last section? The one with our normal site?
			if (nextIndex == 6) {
				$('#arrow').hide();

				//fading out navigation bullets
				$('#pp-nav').fadeOut();

				$('#section6').find('.content').animate({
					top: '0%'
				}, 700, 'easeInQuart');
			}

			//leaving our last section? The one with our normal site?
			if (index == 6) {
				$('#arrow').show();

				//fadding in navigation bullets
				$('#pp-nav').fadeIn();

				$('#section6 .content').animate({
					top: '100%'
				}, 700, 'easeInQuart');
			}
		},
	});

	$('#arrow').click(function () {
		$.fn.pagepiling.moveSectionDown();
	});
	  
	  
	  
	  
	  
  });