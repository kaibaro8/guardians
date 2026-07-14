import { eventos as eventosBase, nucleos, formatarData } from "./dadosEventos.js";

export function iniciarGaleria() {

    const grid    = document.getElementById("galeria-grid");
    const filtros = document.getElementById("galeria-filtros");
    const lightbox = document.getElementById("galeria-lightbox");

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

    // Usa comparação por String de propósito: o id vem como número da API,
    // mas chega como string vindo de data-evento/URL params.
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
                    ${ev.galeria.map((foto, i) => `
                        <div class="galeria-foto" style="background-image:url('${foto}')" data-evento="${ev.id}" data-index="${i}"></div>
                    `).join("")}
                </div>
            </div>
        `).join("");

        grid.querySelectorAll(".galeria-foto").forEach(foto => {
            foto.addEventListener("click", () => {
                const ev = comFotos.find(e => e.id === foto.dataset.evento);
                if (ev) abrirLightbox(ev.galeria, Number(foto.dataset.index));
            });
        });
    }

    // ─── Lightbox ───────────────────────────────────────────────────────────
    let fotosAtuais = [];
    let indiceAtual = 0;

    function abrirLightbox(fotos, indice) {
        if (!lightbox) return;

        fotosAtuais = fotos;
        indiceAtual = indice;

        renderLightbox();

        lightbox.classList.add("ativo");
        document.body.style.overflow = "hidden";
        document.body.classList.add("modal-aberto");
    }

    function renderLightbox() {
        const temNav = fotosAtuais.length > 1;

        lightbox.innerHTML = `
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
                <span class="lightbox-contador">${indiceAtual + 1} / ${fotosAtuais.length}</span>
            ` : ""}
            <img src="${fotosAtuais[indiceAtual]}" alt="Foto do evento">
        `;

        lightbox.querySelector(".lightbox-fechar").addEventListener("click", fecharLightbox);

        if (temNav) {
            lightbox.querySelector(".lightbox-prev").addEventListener("click", e => {
                e.stopPropagation();
                irParaFoto(indiceAtual - 1);
            });
            lightbox.querySelector(".lightbox-next").addEventListener("click", e => {
                e.stopPropagation();
                irParaFoto(indiceAtual + 1);
            });
        }
    }

    function irParaFoto(novoIndice) {
        indiceAtual = (novoIndice + fotosAtuais.length) % fotosAtuais.length;
        renderLightbox();
    }

    function fecharLightbox() {
        lightbox.classList.remove("ativo");
        document.body.style.overflow = "";
        document.body.classList.remove("modal-aberto");
    }

    if (lightbox) {
        lightbox.addEventListener("click", e => {
            if (e.target === lightbox) fecharLightbox();
        });
    }

    // ─── Corrige bug do Chrome: elementos com backdrop-filter às vezes
    // ficam com o layout "grudado" no formato antigo ao redimensionar
    // a janela, sobrepondo texto. Forçamos um repaint no resize. ─────────
    let resizeRaf;
    window.addEventListener("resize", () => {
        if (!lightbox || !lightbox.classList.contains("ativo")) return;
        cancelAnimationFrame(resizeRaf);
        resizeRaf = requestAnimationFrame(() => {
            lightbox.style.display = "none";
            void lightbox.offsetHeight; // força o reflow
            lightbox.style.display = "flex";
        });
    });

    document.addEventListener("keydown", e => {
        if (!lightbox || !lightbox.classList.contains("ativo")) return;
        if (e.key === "Escape")     fecharLightbox();
        if (e.key === "ArrowLeft")  irParaFoto(indiceAtual - 1);
        if (e.key === "ArrowRight") irParaFoto(indiceAtual + 1);
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
        grid.innerHTML = `<p class="projetos-vazio">Carregando galeria...</p>`;
        await carregarEventos();

        // ─── Chegou via ?evento=ID (link "ver galeria" do modal de eventos) ──
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

        // ─── Estado inicial ─────────────────────────────────────────────────
        renderFiltros();
        renderGrid(eventos);
    }

    iniciar();
}