const  menuBur = document.querySelector(".burger-menu");
const navBar = document.querySelector(".navbar");

menuBur.addEventListener("click", () => {
    navBar.classList.toggle("change");
});

