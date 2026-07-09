// Carrossel genérico, data-driven, reutilizado para "Equipe" e "Inspirações Femininas".
// Recebe um seletor de container e uma função de renderização de cada item.

export function iniciarCarrosselGenerico({ containerId, itens, renderItem, tempoDeEspera = 5000 }) {

    const container = document.getElementById(containerId);

    if (!container || !itens || !itens.length) return;

    container.innerHTML = `
        <div class="carrossel-trilho">
            ${itens.map(item => `<div class="slide">${renderItem(item)}</div>`).join("")}
        </div>
        <div class="carrossel-indicadores">
            ${itens.map((_, i) => `<button class="indicador${i === 0 ? " ativo" : ""}" data-index="${i}" aria-label="Ir para item ${i + 1}"></button>`).join("")}
        </div>
        <button class="carrossel-seta carrossel-seta-anterior" aria-label="Anterior">
            <i class="fa-solid fa-chevron-left"></i>
        </button>
        <button class="carrossel-seta carrossel-seta-proximo" aria-label="Próximo">
            <i class="fa-solid fa-chevron-right"></i>
        </button>
    `;

    const trilho = container.querySelector(".carrossel-trilho");
    const slides = container.querySelectorAll(".slide");
    const indicadores = container.querySelectorAll(".indicador");
    const setaAnterior = container.querySelector(".carrossel-seta-anterior");
    const setaProximo = container.querySelector(".carrossel-seta-proximo");

    let slideAtual = 0;
    let intervaloCarrossel;

    function atualizarIndicadores(index) {
        indicadores.forEach((ind, i) => {
            ind.classList.toggle("ativo", i === index);
        });
    }

    function irParaSlide(index) {
        slideAtual = (index + slides.length) % slides.length;

        trilho.scrollTo({
            left: slideAtual * trilho.clientWidth,
            behavior: "smooth"
        });

        atualizarIndicadores(slideAtual);
    }

    function avancarCarrossel() {
        irParaSlide(slideAtual + 1);
    }

    function voltarCarrossel() {
        irParaSlide(slideAtual - 1);
    }

    function iniciarAutoCarrossel() {
        intervaloCarrossel = setInterval(avancarCarrossel, tempoDeEspera);
    }

    function pararCarrossel() {
        clearInterval(intervaloCarrossel);
    }

    iniciarAutoCarrossel();

    container.addEventListener("mouseenter", pararCarrossel);
    container.addEventListener("mouseleave", iniciarAutoCarrossel);

    container.addEventListener("touchstart", pararCarrossel);
    container.addEventListener("touchend", iniciarAutoCarrossel);

    trilho.addEventListener("scroll", () => {
        slideAtual = Math.round(trilho.scrollLeft / trilho.clientWidth);
        atualizarIndicadores(slideAtual);
    });

    indicadores.forEach((ind, index) => {
        ind.addEventListener("click", () => {
            pararCarrossel();
            irParaSlide(index);
            iniciarAutoCarrossel();
        });
    });

    setaAnterior.addEventListener("click", () => {
        pararCarrossel();
        voltarCarrossel();
        iniciarAutoCarrossel();
    });

    setaProximo.addEventListener("click", () => {
        pararCarrossel();
        avancarCarrossel();
        iniciarAutoCarrossel();
    });
}