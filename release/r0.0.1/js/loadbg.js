//(c) 2017 Zack Ruybal. All rights reserved
$(loadBG);
function loadBG() {
	$elem = $('.masthead');
	$url = $elem.data('img');
	console.log($url);
	$($elem).css('background-image', 'url(' + $url + ')');
}