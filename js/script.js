const hoverMenus = document.querySelectorAll(".hover-menu");

hoverMenus.forEach((menu) => {
  menu.addEventListener("mouseenter", () => {
    menu.classList.add("open");
  });

  menu.addEventListener("mouseleave", () => {
    menu.classList.remove("open");
  });
});