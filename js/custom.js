$(function(){
	$('.menu-toggle').on('click', function() {
		$(this).toggleClass('active')
		$('.nav-menu').slideToggle(400)
	});
});





