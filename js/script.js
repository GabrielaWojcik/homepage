function welcome() {
    console.log("Cześć!");
}
welcome();

let changeBackgroundButton = document.querySelector(".js--changeBackgroundButton");
let body = document.documentElement;
let themeName = document.querySelector(".themeName");

changeBackgroundButton.addEventListener("click", () => {
    body.classList.toggle("dark");

    themeName.innerText = body.classList.contains("dark") ? "jasny" : "ciemny";

});


console.log(changeBackgroundButton);