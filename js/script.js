const checkboxes = document.querySelector(".entertainment-checkboxes")
const mobileMenu = document.querySelector(".mobile-menu")
const menuWrapper = document.querySelector(".menu-wrapper")
const cross = document.querySelector(".cross")
const menuBox = document.querySelector(".menu-box")
const spotMark = document.querySelector(".spot-mark")


menuWrapper.addEventListener('click', () => {
    mobileMenu.classList.toggle("reveal");
    menuWrapper.classList.toggle("move-tab");
    menuBox.classList.toggle("hide-lines");
    spotMark.classList.toggle("cross");

});

checkboxes.addEventListener('click', () => {
    document.querySelector(".list").classList.toggle("show");
});