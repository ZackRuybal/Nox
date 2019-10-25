// This is my weird modal plugin. It will get better with time.
// (c) 2017 Zack Ruybal. All rights reserved.
(function($) {
	$.fn.mrkmodal = function(opt) {

		var settings, createModal, closeModal, body;

		var settings = $.extend({
			'modal': 'modal-window',
			'close': 'modal-close',
			'closeText': 'x',
			'shade': 'modal-shade'
		}, opt);

		body = $('body');

		closeModal = function(modal, shade) {
			shade.remove();
			$('.modal').removeClass('modal-window');
			$('.modal').css('display','none');
		};



		createModal = function(data) {
			var shade, close, modal;

			shade = $('<div />', {
				class: settings.shade
			}).on('click', function(e){
				closeModal(modal, shade);
			});

			close = $('<a />', {
				text: settings.closeText,
				class: settings.close,
				href: '#'
			}).on('click', function(e){
				closeModal( shade);
				e.preventDefault();
			});

			modal = $('.modal', {
				class: settings.modal
			}).append(close);

			body.prepend(shade, modal);
		};

		$('.modalOpen').on('click', function(e) {
			var self = $(this);

			$('.modal').addClass('modal-window');
			$('.modal').css('display','block');
			createModal();
			e.preventDefault();
		});

	}
})(jQuery);
