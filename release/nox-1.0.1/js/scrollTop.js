var $document = $(document),
    $element = $('.scrollTop'),
    className = 'active';

$document.scroll(function() {
    if ($document.scrollTop() >= 100) {
        $element.addClass(className);
    } else {
        $element.removeClass(className);
    }
    $('.scrollTop').click(function(e) {
        jQuery('html,body').animate({scrollTop:0},0);
        e.preventDefault();
    });
});
