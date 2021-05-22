{
    const welcome = () => {
        console.log("Cześć!");
    }

    const toggleBackground = () => {
        const body = document.documentElement;
        const nextColorName = document.querySelector(".js--nextColorName");

        body.classList.toggle("dark");
        nextColorName.innerText = body.classList.contains("dark") ? "jasny" : "ciemny";

    };

    const init = () => {
        const changeBackgroundButton = document.querySelector(".js--changeBackgroundButton");
        changeBackgroundButton.addEventListener("click", toggleBackground);

        welcome();
    }

    init();
}