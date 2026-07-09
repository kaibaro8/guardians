import { eventos, nucleos, filtrarPorNucleo, buscarEventoPorId, formatarData } from "./dadosEventos.js";

export function iniciarEventos() {

    const grid    = document.getElementById("projetos-grid");
    const filtros = document.getElementById("projetos-filtros");
    const modal   = document.getElementById("projeto-modal");

    if (!grid || !filtros) return;

    // ─── Filtros (núcleos) ──────────────────────────────────────────────────
    function renderFiltros() {
        filtros.innerHTML = nucleos.map((n, i) => `
            <button class="filtro-btn${i === 0 ? " ativo" : ""}" data-nucleo="${n}">
                ${n}
            </button>
        `).join("");
    }

    // ─── Grid de cards ──────────────────────────────────────────────────────
    function renderGrid(lista) {

        if (!lista.length) {
            grid.innerHTML = `<p class="projetos-vazio">Nenhum evento encontrado para este núcleo ainda.</p>`;
            return;
        }

        grid.innerHTML = lista.map(ev => `
            <article class="projeto-card" data-id="${ev.id}">
                <div class="projeto-card-img" style="background-image:url('${ev.imagem}')"></div>
                <div class="projeto-card-info">
                    <span class="projeto-card-regiao">${ev.nucleo}</span>
                    <h3>${ev.titulo}</h3>
                    <p class="evento-card-data">
                        <i class="fa-regular fa-calendar"></i> ${formatarData(ev.data)}
                    </p>
                    <p class="evento-card-local">
                        <i class="fa-solid fa-location-dot"></i> ${ev.local}
                    </p>
                    <p class="evento-card-resumo">${ev.resumo}</p>
                </div>
            </article>
        `).join("");

        grid.querySelectorAll(".projeto-card").forEach(card => {
            card.addEventListener("click", () => abrirModal(card.dataset.id));
        });
    }

    // ─── Modal ──────────────────────────────────────────────────────────────
    function abrirModal(id) {

        const ev = buscarEventoPorId(id);
        if (!ev || !modal) return;

        const fotosHTML = ev.galeria.map(foto => `
            <div class="evento-modal-foto" style="background-image:url('${foto}')" data-img="${foto}"></div>
        `).join("");

        modal.innerHTML = `
            <div class="projeto-modal-conteudo evento-modal-conteudo">
                <button class="projeto-modal-fechar" aria-label="Fechar">
                    <i class="fa-solid fa-xmark"></i>
                </button>

                <div class="evento-modal-topo">
                    <div class="evento-modal-capa" style="background-image:url('${ev.imagem}')"></div>
                    <div class="evento-modal-header">
                        <span class="projeto-card-regiao">${ev.nucleo}</span>
                        <h2>${ev.titulo}</h2>
                        <p class="projeto-modal-local">
                            <i class="fa-regular fa-calendar"></i> ${formatarData(ev.data)}
                            &nbsp;&nbsp;
                            <i class="fa-solid fa-location-dot"></i> ${ev.local}
                        </p>
                        <p>${ev.descricao}</p>
                    </div>
                </div>

                ${ev.galeria.length ? `
                    <div class="evento-modal-galeria">
                        <h4>Fotos do evento</h4>
                        <div class="evento-modal-fotos">
                            ${fotosHTML}
                        </div>
                    </div>
                ` : ""}
            </div>
        `;

        modal.classList.add("ativo");
        document.body.style.overflow = "hidden";

        // Fechar botão
        modal.querySelector(".projeto-modal-fechar")
             .addEventListener("click", fecharModal);

        // Lightbox interno ao modal
        modal.querySelectorAll(".evento-modal-foto").forEach(foto => {
            foto.addEventListener("click", () => abrirLightbox(foto.dataset.img));
        });
    }

    function fecharModal() {
        modal.classList.remove("ativo");
        document.body.style.overflow = "";
        // remove lightbox caso esteja aberto
        document.getElementById("evento-lightbox-interno")?.remove();
    }

    if (modal) {
        modal.addEventListener("click", e => {
            if (e.target === modal) fecharModal();
        });
    }

    // ─── Lightbox (dentro do modal) ─────────────────────────────────────────
    function abrirLightbox(src) {

        let lb = document.getElementById("evento-lightbox-interno");
        if (!lb) {
            lb = document.createElement("div");
            lb.id = "evento-lightbox-interno";
            lb.className = "galeria-lightbox";
            document.body.appendChild(lb);
        }

        lb.innerHTML = `
            <button class="lightbox-fechar" aria-label="Fechar">
                <i class="fa-solid fa-xmark"></i>
            </button>
            <img src="${src}" alt="Foto do evento">
        `;

        lb.classList.add("ativo");
        lb.querySelector(".lightbox-fechar").addEventListener("click", () => {
            lb.classList.remove("ativo");
        });
        lb.addEventListener("click", e => {
            if (e.target === lb) lb.classList.remove("ativo");
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

    // ─── Init ───────────────────────────────────────────────────────────────
    renderFiltros();
    renderGrid(eventos);

    // Abre modal direto se vier ?evento=ID na URL
    const params = new URLSearchParams(window.location.search);
    const idParam = params.get("evento");
    if (idParam) abrirModal(idParam);
}