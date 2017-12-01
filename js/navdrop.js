// In vanilla JS, which is being a pain in bum.
function myFunction() {
  document.getElementsByClassName("dropdown").classList.toggle("visible");
}
window.onClick = function(event) {
  if (!event.target.matches('.dropdown-toggle')) {
    var dropdowns = document.getElementsByClassName("dropdown");
    var i;
    for(i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if(openDropdown.classList.contains('visible')) {
        openDropdown.classList.remove('visible');
      }
    }
  }
}