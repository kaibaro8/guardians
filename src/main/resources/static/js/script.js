import { iniciarNavbar } from "./navbar.js";
import { iniciarMapa } from "./mapa.js";
import { iniciarCarrossel } from "./home.js";
import { iniciarCards } from "./cards.js";
import { iniciarSlider } from "./slider.js";
import { iniciarMuseu } from "./museu.js";

document.addEventListener("DOMContentLoaded", () => {

    iniciarNavbar();
    iniciarMapa();
    iniciarCarrossel();
    iniciarCards();
    iniciarSlider();
    iniciarMuseu();

});