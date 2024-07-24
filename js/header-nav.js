const body = document.querySelector("body");
const headerLinks = document.querySelector(".header-nav__links");
const navBurgerBtn = document.querySelector(".header-nav__burger");

navBurgerBtn.addEventListener("click", () => {
    body.classList.toggle("overflow-hidden");
    headerLinks.classList.toggle("header-nav__links--active");
    navBurgerBtn.classList.toggle("header-nav__burger--active");
    window.scrollTo(0, 0);
});

headerLinks.addEventListener("click", () => {
    body.classList.remove("overflow-hidden");
    headerLinks.classList.remove("header-nav__links--active");
    navBurgerBtn,classList.remove("header-nav__burger--active");
});