import { eventos as eventosBase, nucleos, formatarData } from "./dadosEventos.js";

export function iniciarEventos() {

    const grid    = document.getElementById("projetos-grid");
    const filtros = document.getElementById("projetos-filtros");
    const modal   = document.getElementById("projeto-modal");

    if (!grid || !filtros) return;

    // ─── Dados: os eventos "fixos" (dadosEventos.js) somados aos publicados
    // pelo painel do operador via API. Os fixos continuam sempre aparecendo,
    // os novos entram junto conforme forem cadastrados. ─────────────────────
    let eventos = [...eventosBase];

    async function carregarEventos() {
        try {
            const res = await fetch("/api/eventos-publicados");
            if (!res.ok) throw new Error("Falha ao buscar eventos publicados");
            const publicados = await res.json();
            eventos = [...eventosBase, ...publicados];
        } catch (erro) {
            console.error(erro);
            // Se a API falhar, ainda mostramos os eventos fixos em vez de
            // deixar a página vazia.
            eventos = [...eventosBase];
        }
    }

    // Usa == de propósito: o id vem como número da API, mas chega como string
    // vindo de data-id/URL params.
    function buscarEventoPorId(id) {
        return eventos.find(e => String(e.id) === String(id));
    }

    function filtrarPorNucleo(nucleo) {
        if (!nucleo || nucleo === "Todos") return eventos;
        return eventos.filter(e => e.nucleo === nucleo);
    }

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

    const FOTOS_POR_PAGINA = 12; // quantas fotos mostrar antes do "Mostrar mais"

    // Converte um evento em uma lista de "abas" pro modal.
    // - Evento com "secoes" (ex.: Formação das Guardiãs) → 1 aba por seção/tema.
    // - Evento simples → 2 abas fixas: "Sobre" e "Galeria".
    function montarAbas(ev) {
        if (ev.secoes && ev.secoes.length) {
            return ev.secoes.map(sec => ({
                label:      sec.titulo.split(" — ")[0], // "Tema 1 — ..." → "Tema 1"
                titulo:     sec.titulo,
                data:       sec.data,
                descricao:  sec.descricao,
                galeria:    sec.galeria || []
            }));
        }
        return [
            { label: "Sobre",   tipo: "sobre",   descricao: ev.descricao, galeria: ev.galeria },
            { label: "Galeria", tipo: "galeria", galeria: ev.galeria }
        ];
    }

    function abrirModal(id) {

        const ev = buscarEventoPorId(id);
        if (!ev || !modal) return;

        const abas = montarAbas(ev);
        let abaAtiva     = 0;
        let fotosVisiveis = FOTOS_POR_PAGINA;

        function renderFotos(lista, limite) {
            const visiveis = lista.slice(0, limite);
            const fotosHTML = visiveis.map((foto, i) => `
                <div class="evento-modal-foto" style="background-image:url('${foto}')" data-index="${i}"></div>
            `).join("");

            const restantes = lista.length - visiveis.length;
            const botaoMais = restantes > 0
                ? `<button class="evento-ver-mais-fotos" type="button">Mostrar mais ${Math.min(restantes, FOTOS_POR_PAGINA)} fotos</button>`
                : "";

            return `
                ${lista.length ? `
                    <div class="evento-modal-galeria">
                        <h4>Fotos (${lista.length})</h4>
                        <div class="evento-modal-fotos">${fotosHTML}</div>
                        ${botaoMais}
                    </div>
                ` : `<p class="evento-sem-fotos">Ainda não há fotos cadastradas para esta parte do evento.</p>`}
            `;
        }

        function renderCorpo() {
            const aba = abas[abaAtiva];
            fotosVisiveis = FOTOS_POR_PAGINA;

            let textoHTML = "";
            if (aba.data) {
                textoHTML += `<p class="evento-secao-data"><i class="fa-regular fa-calendar"></i> ${formatarData(aba.data)}</p>`;
            }
            if (aba.descricao) {
                textoHTML += aba.descricao
                    .split("\n\n")
                    .map(par => `<p>${par}</p>`)
                    .join("");
            }

            const corpo = document.getElementById("evento-modal-corpo");
            if (!corpo) return;

            corpo.innerHTML = `
                ${textoHTML ? `<div class="evento-modal-texto">${textoHTML}</div>` : ""}
                <div class="evento-modal-fotos-wrap">
                    ${renderFotos(aba.galeria || [], fotosVisiveis)}
                </div>
            `;

            ligarEventosFotos();
        }

        function ligarEventosFotos() {
            const corpo = document.getElementById("evento-modal-corpo");
            if (!corpo) return;

            corpo.querySelectorAll(".evento-modal-foto").forEach(foto => {
                foto.addEventListener("click", () => {
                    abrirLightbox(abas[abaAtiva].galeria || [], Number(foto.dataset.index));
                });
            });

            const botaoMais = corpo.querySelector(".evento-ver-mais-fotos");
            if (botaoMais) {
                botaoMais.addEventListener("click", () => {
                    fotosVisiveis += FOTOS_POR_PAGINA;
                    const wrap = corpo.querySelector(".evento-modal-fotos-wrap");
                    wrap.innerHTML = renderFotos(abas[abaAtiva].galeria || [], fotosVisiveis);
                    ligarEventosFotos();
                });
            }
        }

        function irParaAba(indice) {
            abaAtiva = indice;
            modal.querySelectorAll(".evento-modal-nav-btn").forEach((b, i) => {
                b.classList.toggle("ativo", i === indice);
            });
            renderCorpo();
        }

        const navHTML = abas.map((aba, i) => `
            <button class="evento-modal-nav-btn${i === 0 ? " ativo" : ""}" data-i="${i}" type="button">
                ${aba.label}
            </button>
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
                        <p>${ev.resumo}</p>
                    </div>
                </div>

                <div class="evento-modal-nav">${navHTML}</div>
                <div class="evento-modal-corpo" id="evento-modal-corpo"></div>
            </div>
        `;

        modal.classList.add("ativo");
        document.body.style.overflow = "hidden";
        document.body.classList.add("modal-aberto");

        // Fechar botão
        modal.querySelector(".projeto-modal-fechar")
             .addEventListener("click", fecharModal);

        // Navegação por abas
        modal.querySelectorAll(".evento-modal-nav-btn").forEach(btn => {
            btn.addEventListener("click", () => irParaAba(Number(btn.dataset.i)));
        });

        renderCorpo();
    }

    function fecharModal() {
        modal.classList.remove("ativo");
        document.body.style.overflow = "";
        document.body.classList.remove("modal-aberto");
        // remove lightbox caso esteja aberto
        document.getElementById("evento-lightbox-interno")?.remove();
    }

    // ─── Corrige bug do Chrome: elementos com backdrop-filter às vezes
    // ficam com o layout "grudado" no formato antigo ao redimensionar
    // a janela, sobrepondo texto. Forçamos um repaint no resize. ─────────
    let resizeRaf;
    window.addEventListener("resize", () => {
        if (!modal.classList.contains("ativo")) return;
        cancelAnimationFrame(resizeRaf);
        resizeRaf = requestAnimationFrame(() => {
            modal.style.display = "none";
            void modal.offsetHeight; // força o reflow
            modal.style.display = "flex";
        });
    });

    if (modal) {
        modal.addEventListener("click", e => {
            if (e.target === modal) fecharModal();
        });
    }

    // ─── Lightbox (dentro do modal) ─────────────────────────────────────────
    let fotosAtuaisModal = [];
    let indiceAtualModal = 0;

    function renderLightboxModal() {
        const lb = document.getElementById("evento-lightbox-interno");
        if (!lb) return;

        const temNav = fotosAtuaisModal.length > 1;

        lb.innerHTML = `
            <button class="lightbox-fechar" aria-label="Fechar">
                <i class="fa-solid fa-xmark"></i>
            </button>
            ${temNav ? `
                <button class="lightbox-nav lightbox-prev" aria-label="Foto anterior">
                    <i class="fa-solid fa-chevron-left"></i>
                </button>
                <button class="lightbox-nav lightbox-next" aria-label="Próxima foto">
                    <i class="fa-solid fa-chevron-right"></i>
                </button>
                <span class="lightbox-contador">${indiceAtualModal + 1} / ${fotosAtuaisModal.length}</span>
            ` : ""}
            <img src="${fotosAtuaisModal[indiceAtualModal]}" alt="Foto do evento">
        `;

        lb.querySelector(".lightbox-fechar").addEventListener("click", fecharLightbox);

        if (temNav) {
            lb.querySelector(".lightbox-prev").addEventListener("click", e => {
                e.stopPropagation();
                irParaFotoModal(indiceAtualModal - 1);
            });
            lb.querySelector(".lightbox-next").addEventListener("click", e => {
                e.stopPropagation();
                irParaFotoModal(indiceAtualModal + 1);
            });
        }
    }

    function irParaFotoModal(novoIndice) {
        indiceAtualModal = (novoIndice + fotosAtuaisModal.length) % fotosAtuaisModal.length;
        renderLightboxModal();
    }

    function fecharLightbox() {
        document.getElementById("evento-lightbox-interno")?.classList.remove("ativo");
    }

    function abrirLightbox(fotos, indice) {

        fotosAtuaisModal = fotos;
        indiceAtualModal = indice;

        let lb = document.getElementById("evento-lightbox-interno");
        if (!lb) {
            lb = document.createElement("div");
            lb.id = "evento-lightbox-interno";
            lb.className = "galeria-lightbox";
            document.body.appendChild(lb);

            lb.addEventListener("click", e => {
                if (e.target === lb) fecharLightbox();
            });
        }

        renderLightboxModal();
        lb.classList.add("ativo");
    }

    document.addEventListener("keydown", e => {
        const lb = document.getElementById("evento-lightbox-interno");
        if (!lb || !lb.classList.contains("ativo")) return;
        if (e.key === "Escape")     fecharLightbox();
        if (e.key === "ArrowLeft")  irParaFotoModal(indiceAtualModal - 1);
        if (e.key === "ArrowRight") irParaFotoModal(indiceAtualModal + 1);
    });

    // ─── Filtros (click) ────────────────────────────────────────────────────
    filtros.addEventListener("click", e => {

        const botao = e.target.closest(".filtro-btn");
        if (!botao) return;

        filtros.querySelectorAll(".filtro-btn").forEach(b => b.classList.remove("ativo"));
        botao.classList.add("ativo");

        renderGrid(filtrarPorNucleo(botao.dataset.nucleo));
    });

    // ─── Init ───────────────────────────────────────────────────────────────
    async function iniciar() {
        renderFiltros();
        grid.innerHTML = `<p class="projetos-vazio">Carregando eventos...</p>`;

        await carregarEventos();

        const params      = new URLSearchParams(window.location.search);
        const nucleoParam = params.get("nucleo");

        if (nucleoParam && nucleos.includes(nucleoParam)) {
            filtros.querySelectorAll(".filtro-btn").forEach(b => {
                b.classList.toggle("ativo", b.dataset.nucleo === nucleoParam);
            });
            renderGrid(filtrarPorNucleo(nucleoParam));
        } else {
            renderGrid(eventos);
        }

        // Abre modal direto se vier ?evento=ID na URL
        const idParam = params.get("evento");
        if (idParam) abrirModal(idParam);
    }

    iniciar();
}