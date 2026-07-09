export function iniciarCarrossel() {

    const trilho = document.querySelector('.carrossel-trilho');
    const slides = document.querySelectorAll('.slide');
    const indicadores = document.querySelectorAll('.indicador');

    if (!trilho || !slides.length || !indicadores.length) return;

    let slideAtual = 0;
    let intervaloCarrossel;

    const tempoDeEspera = 5000;

    function atualizarIndicadores(index) {

        indicadores.forEach((ind, i) => {

            ind.classList.toggle('ativo', i === index);

        });

    }

    function irParaSlide(index) {

        slideAtual = index;

        trilho.scrollTo({
            left: slideAtual * trilho.clientWidth,
            behavior: 'smooth'
        });

        atualizarIndicadores(slideAtual);

    }

    function avancarCarrossel() {

        slideAtual = (slideAtual + 1) % slides.length;

        irParaSlide(slideAtual);

    }

    function iniciarAutoCarrossel() {

        intervaloCarrossel =
            setInterval(avancarCarrossel, tempoDeEspera);

    }

    function pararCarrossel() {

        clearInterval(intervaloCarrossel);

    }

    iniciarAutoCarrossel();

    trilho.addEventListener('mouseenter', pararCarrossel);
    trilho.addEventListener('mouseleave', iniciarAutoCarrossel);

    trilho.addEventListener('touchstart', pararCarrossel);
    trilho.addEventListener('touchend', iniciarAutoCarrossel);

    trilho.addEventListener('scroll', () => {

        slideAtual =
            Math.round(trilho.scrollLeft / trilho.clientWidth);

        atualizarIndicadores(slideAtual);

    });

    indicadores.forEach((ind, index) => {

        ind.addEventListener('click', () => {

            pararCarrossel();
            irParaSlide(index);

        });

    });

}