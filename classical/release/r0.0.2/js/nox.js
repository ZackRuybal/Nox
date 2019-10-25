$(loadBG);
function loadBG() {
	$elem = $('.masthead');
	$url = $elem.data('img');
	console.log($url);
	$($elem).css('background-image', 'url(' + $url + ')');
}
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
(function($) {
    $.fn.amodal = function(opt) {

        var settings, createModal, closeModal, body;

        settings = $.extend({
            'modal': 'modal-window',
            'close': 'modal-close',
            'closeText': 'x',
            'shade': 'modal-shade'
        }, opt);

        body = $('body');

        closeModal = function(modal, shade){
                modal.remove();
                shade.remove();
        };

        createModal = function(data) {
            var shade, close, modal;

            shade = $('<div />', {
                class: settings.shade
            }).on('click', function(e){
                // close modal and shade
                closeModal(modal, shade);
            });

            close = $('<a />', {
                text: settings.closeText,
                class: settings.close,
                href: '#'
            }).on('click', function(e){
                // close modal and shade
                closeModal(modal, shade);
                e.preventDefault();
            });

            modal = $('<div />', {
                html: data,
                class: settings.modal
            }).append(close);

            body.prepend(shade, modal);
        };

        this.on('click', function(e) {
            var self = $(this);

            $.ajax({
                url: self.data('content'),
                type: 'get',
                cache: false
            }).done(function(data) {
                createModal(data);
            }).fail(function() {
                createModal("There was an error. Refer to <a href='http://x.zruybal.com/Nox/NoxFramework/wiki/Ajax-Modal-Error'>err01</a>.");
            });

            e.preventDefault();

        });

    }
})(jQuery);
