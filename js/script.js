function welcome() {
    console.log("Cześć!");
}
 welcome();

let button = document.querySelector(".body__button");
let body = document.documentElement;
let heading = document.querySelector(".heading");
let themeName = document.querySelector(".themeName");

button.addEventListener("click", () => {
    body.classList.toggle("dark");

    themeName.innerText = body.classList.contains("dark") ? "jasny" : "ciemny";

});


console.log(button);