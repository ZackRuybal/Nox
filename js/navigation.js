$('.nav .res-only').click(function() {
	$toggle = $('.res-only');
	$content = $('.nav-side');
	$content.offset({ top: 50 });
	$content.slideToggle(500, function(){
		$content.offset({ top: 50 });
		$toggle.text(function() {
			return $content.is(":visible") ? "Hide" : "Show";
		});
	});
});