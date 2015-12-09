(function($) { "use strict";


		//Preloader
		
		  $(".animsition").animsition({
		  
			inClass               :   'fade-in',
			outClass              :   'fade-out',
			inDuration            :    500,
			outDuration           :    500,
			linkElement           :   '.animsition-link', 
			// e.g. linkElement   :   'a:not([target="_blank"]):not([href^=#])'
			loading               :    true,
			loadingParentElement  :   'body', //animsition wrapper element
			loadingClass          :   'animsition-loading',
			unSupportCss          : [ 'animation-duration',
									  '-webkit-animation-duration',
									  '-o-animation-duration'
									],
			//"unSupportCss" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser. 
			//The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
			
			overlay               :   false,
			
			overlayClass          :   'animsition-overlay-slide',
			overlayParentElement  :   'body'
		  });

	
		//Tooltip
		
		$(".tipped").tipper();	
		
	
		//Parallax
		
		$('.parallax-portfolio-1').parallax("50%", 0.4);
		$('.parallax-portfolio-2').parallax("50%", 0.4);
		$('.parallax-portfolio-3').parallax("50%", 0.4);
		$('.parallax-portfolio-4').parallax("50%", 0.4);
		$('.parallax-portfolio-5').parallax("50%", 0.4);
		$('.parallax-footer').parallax("50%", 0.4);


		
		
  })(jQuery); 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 





	