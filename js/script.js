const hoverItems = document.querySelectorAll(".js-hover");

hoverItems.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    item.classList.add("open");
  });

  item.addEventListener("mouseleave", () => {
    item.classList.remove("open");
  });
});