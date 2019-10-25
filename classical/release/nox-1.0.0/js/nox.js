//LoadBG
$(loadBG);
function loadBG() {
	$elem = $('.masthead');
	$url = $elem.data('img');
	console.log($url);
	$($elem).css('background-image', 'url(' + $url + ')');
}

//Nav
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

//Ajax Modal
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
