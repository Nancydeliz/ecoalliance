jQuery(document).ready(function() {
		   jQuery('#fullpage').fullpage({
				 verticalCentered: true,
				resize: true,
				scrollingSpeed: 700,
				easing: 'easeInQuart',
				menu: false,
				navigation: true,
				navigationPosition: 'right',
				loopBottom: false,
				loopTop: false,
				autoScrolling: true,
			    scrollBar: true,
				css3: false,
				paddingTop: 0,
				paddingBottom: 0,
			    fixedElements: '#header, .footer, .FAQ',
			    continuousVertical: true,
			   
		   });
});