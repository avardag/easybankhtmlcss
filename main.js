const hambMenu = document.querySelector(".hamb-menu");
const linksWrapperMmobile = document.querySelector(".linksWrapper-mobile");
const nav = document.querySelector("nav");

hambMenu.addEventListener("click", () => {
  hambMenu.classList.toggle("active");
  nav.classList.toggle("mobile");
  linksWrapperMmobile.classList.toggle("mobile");
});
