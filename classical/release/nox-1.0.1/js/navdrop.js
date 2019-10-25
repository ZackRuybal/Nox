// I'm aware that this is a fairly hacky way to do things, but this is just to get it working.
$(document).ready(function() {
  $('.dropdown').addClass('hidden');
});
$('.dropdown-toggle').click(function(e) {
  var toggle = $('.dropdown-toggle');
  var elem = $('.dropdown');
  var show = elem.hasClass('hidden');
  if(show) {
    elem.removeClass('hidden');
    elem.addClass('visible');
    toggle.addClass('active');
  } else {
    elem.removeClass('visible');
    elem.addClass('hidden');
    toggle.removeClass('active');
  }
  e.preventDefault();
});