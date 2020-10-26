/* Set the width of the sidebar to 250px (show it) */
var element = document.getElementById("sidepanel");
function openNav() {
  element.classList.add("sidepanel_open");
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
  element.classList.remove("sidepanel_open");
}
