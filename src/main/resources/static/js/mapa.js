import { iniciarFiltroAnoMapa } from "./mapaBrasil.js";
import { projetos } from "./dadosProjetos.js";

export function iniciarMapa() {
    iniciarFiltroAnoMapa("mapa-ano-filtro", "mapa-brasil", "mapa-brasil-cards", projetos);
}