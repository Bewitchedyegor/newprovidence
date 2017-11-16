$(document).ready(function() {
	$(window).scroll(function(){
		var scroll = $(this).scrollTop();
		if (scroll > 25) {
			$('header').addClass('active');
		}
		else {
			$('header').removeClass('active');
		};
	});
});