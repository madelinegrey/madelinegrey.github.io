$(document).ready(function(){

		var $content = $('.navbar-content');
		var $navbar = $('.navbar');
		var $about = $('#about');

		var $workContent = $('.work-content');
		var $workChoice = $('.work-choice');
		var $currentWork = $('#current-work');

		// set div with my work shown to display: none

		function showContent(selector) {
		  $content.hide();
		  $navbar.show();
		  $(selector).show();

		}

		$('.navbar-nav').on('click', '.nav-link', function(e) {
		  showContent(e.currentTarget.hash);
		  e.preventDefault();
		}); 

		function showWorkContent(selector) {
			$workContent.hide();
			$currentWork.hide();
			$(selector).show();

			if (selector == 'none') {
				$workContent.hide();
			}
		}

		// specifically for showing sound/video/web/ui content under work
		$('.work-choice').on('click', '.work-link', function(e) {
			showWorkContent(e.currentTarget.hash);
			e.preventDefault();
		});

		// show '#home' content only on page load (if you want)
		showContent('#home');
		showWorkContent('none');
		
});