$(document).ready(function() {
	$(window).scroll(function() {
		if ($(this).scrollTop() > 50) {
			$('.navbar').addClass('dim-nav-bar');
		} else {
			$('.navbar').removeClass('dim-nav-bar');
		}
	});
});
