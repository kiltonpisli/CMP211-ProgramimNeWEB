var menuToggle = document.getElementsByClassName("fa-bars")[0];
var menuClose = document.getElementsByClassName("fa-times")[0];

var mobileMenu = document.getElementsByClassName("mobilemenu")[0]

menuToggle.addEventListener('click', event => {
    mobileMenu.classList.add("active");
});
menuClose.addEventListener('click', event => {
    mobileMenu.classList.remove("active");
});