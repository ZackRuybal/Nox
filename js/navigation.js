$( document ).ready(function() {
	$('body').append('<div class="nav-side"></div>');
	$navElem = $('.nav-side');
	$navItems = $('.nav .res-menu > ul');
	$navItems.last().clone({
		withDataAndEvents: true
	}).appendTo($navElem);
});
$('.nav .res-only').click(function() {


	$toggle = $('.res-only');
	$appTo = $('.nav-side');
	$appTo.slideToggle(500, function() {
		$toggle.text(function() {
			return $appTo.is(":visible") ? "Hide" : "Show";
		});
	});

	//$toggle = $('.res-only');
	//$content = $('.nav .res-menu > ul');
	//$appTo = $('.nav-side');

	$appTo.toggleClass('navIsVisible');

	//$($content).appendTo($appTo);
	//$('.nav-side').css({"display": "block", "top": "50px"});
});