const menuOverlay = document.querySelector(".mobile-menu");
const closeMenuButton = document.querySelector(".mobile-menu__icon-close");
const openMenuBtn = document.querySelector(".header__icon--mobile-menu");

openMenuBtn.addEventListener("click", (e) => {
  menuOverlay.classList.remove("nodisplay");
});

closeMenuButton.addEventListener("click", (e) => {
  menuOverlay.classList.add("nodisplay");
});
