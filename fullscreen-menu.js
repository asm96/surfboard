var hamburger = document.querySelector(".hamburger");
var menu = document.querySelector(".fullscreen-menu");
var closeBtn = menu.querySelector(".fullscreen-menu__close");
hamburger.addEventListener("click", function (e) {
  e.preventDefault(),
    menu.classList.add("active")
});
closeBtn.addEventListener("click", function (e) {
  e.preventDefault(),
    menu.classList.remove("active")
});