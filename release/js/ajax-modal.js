// (c) 2017 Zack Ruybal. All rights reserved
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
