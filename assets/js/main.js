const navbar = document.querySelector(".navbar");
const menuToggle = document.querySelector(".navbar__hamburger");
const backDrop = document.querySelector(".offcanvas-backdrop");
const offCanvasClose = document.querySelector(".offcanvas-close");
const navItem = document.querySelectorAll(".navbar__nav-item");

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("offcanvas");
});

backDrop.addEventListener("click", () => {
  navbar.classList.toggle("offcanvas");
});

offCanvasClose.addEventListener("click", () => {
  navbar.classList.toggle("offcanvas");
});

Array.from(navItem).forEach(element => {
  element.addEventListener("click", () => {
    navbar.classList.toggle("offcanvas");
  });
});