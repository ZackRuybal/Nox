// (c) 2017 Zack Ruybal. All rights reserved
// Cleaned comments in April 17.
$( document ).ready(function() {
	// Adds the outline for the nav
	$('.nav').append('<div class="nav-side hidden"></div>');

	// Selects what the side nav class is
	$navElem = $('.nav-side');

	// Selects the list
	$navItems = $('.nav .res-menu > ul');

	// Clones the content of the regular nav
	$navItems.last().clone({
		withDataAndEvents: true
	}).appendTo($navElem);

	// Appends the bars to the responsive nav
	$('.res-only').append('<div class="hamburger"><div></div><div></div><div></div></div>');
});
$('.nav .res-only').click(function(e) {
	var elem = $('.nav-side');
	// Toggles the class (obviously)
	var show = elem.hasClass('hidden');
	if (show) {
		elem.hide();
		elem.removeClass('hidden');
		elem.slideDown('slow');
	} else {
		elem.slideUp('slow', function() {
			elem.addClass('hidden');
			elem.show();
		});
	}
	e.preventDefault();
});
$(window).resize(function() {
	var screen = $(window);
	var navi = $('.nav-side');
	if (screen.width() > 796) {
		navi.slideUp('slow', function() {
			navi.addClass('hidden');
			navi.show();
		});
	}
});
