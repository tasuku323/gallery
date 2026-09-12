const menuToggle = document.querySelector(".js-menu-toggle");
const hoverMenu = document.querySelector(".hover-menu");

menuToggle.addEventListener("click", (e) => {
  if (window.matchMedia("(max-width: 767px)").matches) {
    e.preventDefault();

    hoverMenu.classList.toggle("open");
  }
});