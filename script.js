function showMenu() {
  document.getElementById("mobile-nav-wrapper").style.width = "80vw";
  document.getElementById("mobile-nav-wrapper").classList.add("box-shadow");
}

function hideMenu() {
  document.getElementById("mobile-nav-wrapper").style.width = "";
  document.getElementById("mobile-nav-wrapper").classList.remove("box-shadow");
}
