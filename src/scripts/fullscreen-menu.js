(function () {
  var hamburger = document.querySelector(".hamburger");
  var menu = document.querySelector(".fullscreen-menu");
  var closeBtn = menu.querySelector(".fullscreen-menu__close");
  var menuItems = menu.querySelectorAll(".menu__item");
  hamburger.addEventListener("click", function (e) {
    e.preventDefault(), menu.classList.add("active");
  });
  closeBtn.addEventListener("click", function (e) {
    e.preventDefault(), menu.classList.remove("active");
  });
  for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].onclick = function (e) {
      e.preventDefault(), menu.classList.remove("active");
    };
  }
})();
