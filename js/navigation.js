// (c) 2017 Zack Ruybal. All rights reserved
// Cleaned comments in April 17.
$( document ).ready(function() {
	// Adds the outline for the nav
	$('body').append('<div class="nav-side"></div>');

	// Selects what the side nav class is
	$navElem = $('.nav-side');

	// Selects the list
	$navItems = $('.nav .res-menu > ul');

	// Clones the content of the regular nav
	$navItems.last().clone({
		withDataAndEvents: true
	}).appendTo($navElem);

	// Appends the bars to the responsive nav
	$('.res-only').append('<span class="fa fa-bars"></span>');
});
$('.nav .res-only').click(function() {

	// Toggles the nav
	$toggle = $('.res-only');

	// What to append to
	$appTo = $('.nav-side');

	// The animation
	$appTo.slideToggle(500);

	// Toggles the class (obviously)
	$appTo.toggleClass('navIsVisible');
}).preventDefault();
