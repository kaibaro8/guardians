import { inspiracoes } from "./dadosMuseu.js";

export function iniciarMuseu() {

    const stage    = document.querySelector(".museu-stage");
    const btnAntes = document.querySelector(".museu-seta.anterior");
    const btnProx  = document.querySelector(".museu-seta.proximo");
    const dotsCont = document.querySelector(".museu-indicadores");
    const salasCont = document.querySelector("#museu-salas");

    if (!stage) return;

    let atual = 0;
    const total = inspiracoes.length;

    // ── Monta os quadros (cards) ───────────────────────────────────
    stage.innerHTML = inspiracoes.map((mulher, i) => `
        <article class="museu-card" data-index="${i}" style="background-image:url('${mulher.foto}');${mulher.posicaoFoto ? ` background-position:${mulher.posicaoFoto};` : ""}">
            <div class="museu-info">
                <h3>${mulher.nome}</h3>
                <span>${mulher.area}</span>
                <p>${mulher.resumo}</p>
                <a class="museu-link" href="#${mulher.id}">Conheça sua história <i class="fa-solid fa-arrow-right"></i></a>
            </div>
        </article>
    `).join("");

    const cards = stage.querySelectorAll(".museu-card");

    // ── Monta as bolinhas ──────────────────────────────────────────
    dotsCont.innerHTML = "";
    inspiracoes.forEach((_, i) => {
        const dot = document.createElement("span");
        dot.addEventListener("click", () => irPara(i));
        dotsCont.appendChild(dot);
    });
    const dots = dotsCont.querySelectorAll("span");

    // ── Monta as "salas" de história abaixo do carrossel ───────────
    if (salasCont) {
        salasCont.innerHTML = inspiracoes.map(mulher => `
            <section class="museu-sala" id="${mulher.id}">
                <div class="museu-sala-foto" style="background-image:url('${mulher.foto}');${mulher.posicaoFoto ? ` background-position:${mulher.posicaoFoto};` : ""}"></div>
                <div class="museu-sala-texto">
                    <span class="museu-sala-periodo">${mulher.periodo}</span>
                    <h2>${mulher.nome}</h2>
                    <span class="museu-sala-area">${mulher.area}</span>
                    <p>${mulher.bio}</p>
                    ${mulher.referenciaUrl
                        ? `<a class="museu-sala-fonte" href="${mulher.referenciaUrl}" target="_blank" rel="noopener">Fonte: ${mulher.referenciaTexto} <i class="fa-solid fa-arrow-up-right-from-square"></i></a>`
                        : `<span class="museu-sala-fonte-texto">Fonte: ${mulher.referenciaTexto}</span>`
                    }
                </div>
            </section>
        `).join("");
    }

    // ── Posiciona os cards em volta do índice atual (efeito coverflow) ──
    function render() {

        cards.forEach((card, i) => {

            let dif = i - atual;

            // distância circular mais curta (carrossel "infinito")
            if (dif > total / 2) dif -= total;
            if (dif < -total / 2) dif += total;

            const abs = Math.abs(dif);

            card.style.zIndex = String(100 - abs);

            if (abs === 0) {
                card.style.transform = "translateX(0) scale(1)";
                card.style.opacity = "1";
                card.style.filter = "blur(0)";
                card.style.pointerEvents = "auto";
            } else if (abs === 1) {
                card.style.transform = `translateX(${dif * 62}%) scale(.78)`;
                card.style.opacity = ".55";
                card.style.filter = "blur(2px)";
                card.style.pointerEvents = "auto";
            } else {
                const lado = dif > 0 ? 1 : -1;
                card.style.transform = `translateX(${lado * 50}%) scale(.6)`;
                card.style.opacity = "0";
                card.style.filter = "blur(4px)";
                card.style.pointerEvents = "none";
            }

            // clique num card lateral leva direto até ele
            card.onclick = (e) => {
                if (abs === 0) return;
                e.preventDefault();
                irPara(i);
            };
        });

        dots.forEach((d, i) => d.classList.toggle("ativo", i === atual));
    }

    function irPara(n) {
        atual = (n + total) % total;
        render();
    }

    btnProx.addEventListener("click", () => irPara(atual + 1));
    btnAntes.addEventListener("click", () => irPara(atual - 1));

    document.addEventListener("keydown", e => {
        if (!document.querySelector(".museu")) return;
        if (e.key === "ArrowRight") irPara(atual + 1);
        if (e.key === "ArrowLeft")  irPara(atual - 1);
    });

    render();
}