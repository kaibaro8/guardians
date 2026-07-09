import { eventos, nucleos, filtrarPorNucleo, buscarEventoPorId, formatarData } from "./dadosEventos.js";

export function iniciarGaleria() {

    const grid    = document.getElementById("galeria-grid");
    const filtros = document.getElementById("galeria-filtros");
    const lightbox = document.getElementById("galeria-lightbox");

    if (!grid || !filtros) return;

    // ─── Filtros (núcleos) ──────────────────────────────────────────────────
    function renderFiltros() {
        filtros.innerHTML = nucleos.map((n, i) => `
            <button class="filtro-btn${i === 0 ? " ativo" : ""}" data-nucleo="${n}">
                ${n}
            </button>
        `).join("");
    }

    // ─── Grid agrupado por evento ───────────────────────────────────────────
    function renderGrid(lista, idDestaque) {

        const comFotos = lista.filter(ev => ev.galeria && ev.galeria.length);

        if (!comFotos.length) {
            grid.innerHTML = `<p class="projetos-vazio">Nenhuma foto encontrada para este núcleo ainda.</p>`;
            return;
        }

        grid.innerHTML = comFotos.map(ev => `
            <div class="galeria-grupo${ev.id === idDestaque ? " destaque" : ""}" id="grupo-${ev.id}">
                <div class="galeria-grupo-header">
                    <h3>
                        ${ev.titulo}
                        <span>· ${ev.nucleo}</span>
                    </h3>
                    <p class="galeria-grupo-meta">
                        <i class="fa-regular fa-calendar"></i> ${formatarData(ev.data)}
                        &nbsp;&nbsp;
                        <i class="fa-solid fa-location-dot"></i> ${ev.local}
                    </p>
                </div>
                <div class="galeria-fotos">
                    ${ev.galeria.map(foto => `
                        <div class="galeria-foto" style="background-image:url('${foto}')" data-img="${foto}"></div>
                    `).join("")}
                </div>
            </div>
        `).join("");

        grid.querySelectorAll(".galeria-foto").forEach(foto => {
            foto.addEventListener("click", () => abrirLightbox(foto.dataset.img));
        });
    }

    // ─── Lightbox ───────────────────────────────────────────────────────────
    function abrirLightbox(src) {

        if (!lightbox) return;

        lightbox.innerHTML = `
            <button class="lightbox-fechar" aria-label="Fechar">
                <i class="fa-solid fa-xmark"></i>
            </button>
            <img src="${src}" alt="Foto do evento">
        `;

        lightbox.classList.add("ativo");
        document.body.style.overflow = "hidden";

        lightbox.querySelector(".lightbox-fechar").addEventListener("click", fecharLightbox);
    }

    function fecharLightbox() {
        lightbox.classList.remove("ativo");
        document.body.style.overflow = "";
    }

    if (lightbox) {
        lightbox.addEventListener("click", e => {
            if (e.target === lightbox) fecharLightbox();
        });
    }

    // ─── Filtros (click) ────────────────────────────────────────────────────
    filtros.addEventListener("click", e => {

        const botao = e.target.closest(".filtro-btn");
        if (!botao) return;

        filtros.querySelectorAll(".filtro-btn").forEach(b => b.classList.remove("ativo"));
        botao.classList.add("ativo");

        renderGrid(filtrarPorNucleo(botao.dataset.nucleo));
    });

    // ─── Chegou via ?evento=ID (link "ver galeria" do modal de eventos) ─────
    const params    = new URLSearchParams(window.location.search);
    const idParam   = params.get("evento");
    const nuclParam = params.get("nucleo");

    if (idParam) {

        const ev = buscarEventoPorId(idParam);

        if (ev) {
            // Marca filtro do núcleo desse evento como ativo
            renderFiltros();

            // Precisamos renderizar antes de rolar (os elementos devem existir)
            renderGrid(filtrarPorNucleo(ev.nucleo), idParam);

            // Ativa o botão correto
            filtros.querySelectorAll(".filtro-btn").forEach(b => {
                b.classList.toggle("ativo", b.dataset.nucleo === ev.nucleo);
            });

            setTimeout(() => {
                document.getElementById(`grupo-${idParam}`)
                        ?.scrollIntoView({ behavior: "smooth", block: "start" });
            }, 300);

            return;
        }
    }

    if (nuclParam) {
        renderFiltros();
        filtros.querySelectorAll(".filtro-btn").forEach(b => {
            b.classList.toggle("ativo", b.dataset.nucleo === nuclParam);
        });
        renderGrid(filtrarPorNucleo(nuclParam));
        return;
    }

    // ─── Estado inicial ─────────────────────────────────────────────────────
    renderFiltros();
    renderGrid(eventos);
}