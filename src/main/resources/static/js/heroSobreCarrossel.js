export function iniciarHeroCarrosselDireita() {

    const trilho = document.querySelector('.hero-carrossel-trilho');
    const slides = document.querySelectorAll('.hero-slide-direita');
    const indicadores = document.querySelectorAll('.hero-carrossel-indicador');
    const seta = document.querySelector('.hero-carrossel-seta');

    if (!trilho || !slides.length) return;

    let slideAtual = 0;
    let intervalo;
    const tempoDeEspera = 6000;

    function irParaSlide(index) {

        slides[slideAtual].classList.remove('ativo');
        indicadores[slideAtual]?.classList.remove('ativo');

        slideAtual = index;

        slides[slideAtual].classList.add('ativo');
        indicadores[slideAtual]?.classList.add('ativo');

    }

    function avancar() {
        irParaSlide((slideAtual + 1) % slides.length);
    }

    function iniciarAuto() {
        intervalo = setInterval(avancar, tempoDeEspera);
    }

    function pararAuto() {
        clearInterval(intervalo);
    }

    iniciarAuto();

    seta?.addEventListener('click', () => {
        pararAuto();
        avancar();
        iniciarAuto();
    });

    indicadores.forEach((ind, index) => {
        ind.addEventListener('click', () => {
            pararAuto();
            irParaSlide(index);
            iniciarAuto();
        });
    });

    trilho.addEventListener('mouseenter', pararAuto);
    trilho.addEventListener('mouseleave', iniciarAuto);

}