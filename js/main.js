let menuOpen = document.querySelector(".site-header__menu");
let nav = document.querySelector("nav");

menuOpen.onclick = function () {
  nav.classList.toggle("active");
  this.classList.toggle("active");
};
