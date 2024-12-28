document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector('[data-collapse-toggle="mobile-menu-2"]');
    const menu = document.getElementById("mobile-menu-2");

    menuButton.addEventListener("click", () => {
        menu.classList.toggle("hidden");
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const languageButton = document.getElementById("language-button");
    const languageDropdown = document.getElementById("language-dropdown-menu");

    languageButton.addEventListener("click", (event) => {
        event.stopPropagation();
        languageDropdown.classList.toggle("hidden");
    });

    document.addEventListener("click", (event) => {
        if (!languageButton.contains(event.target) && !languageDropdown.contains(event.target)) {
            languageDropdown.classList.add("hidden");
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const cartButton = document.getElementById("myCartDropdownButton1");
    const cartDropdown = document.getElementById("myCartDropdown1");

    cartButton.addEventListener("click", (event) => {
        event.stopPropagation();
        cartDropdown.classList.toggle("hidden");
    });

    document.addEventListener("click", (event) => {
        if (!cartButton.contains(event.target) && !cartDropdown.contains(event.target)) {
            cartDropdown.classList.add("hidden");
        }
    });
});