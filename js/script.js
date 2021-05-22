function welcome() {
    console.log("Cześć!");
}
welcome();

let changeBackgroundButton = document.querySelector(".js--changeBackgroundButton");
let body = document.documentElement;
let nextColorName = document.querySelector(".js--nextColorName");

changeBackgroundButton.addEventListener("click", () => {
    body.classList.toggle("dark");

    nextColorName.innerText = body.classList.contains("dark") ? "jasny" : "ciemny";

});


console.log(changeBackgroundButton);