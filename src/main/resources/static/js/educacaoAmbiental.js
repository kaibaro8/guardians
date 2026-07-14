import { materiais } from "./dadosMateriais.js";

export function iniciarEducacaoAmbiental() {

    const grid  = document.getElementById("materiais-grid");
    const modal = document.getElementById("material-modal");

    if (!grid) return;

    // ═══════════════════════════════════════
    // GRID DE CARDS
    // ═══════════════════════════════════════

    function renderGrid() {

        if (!materiais.length) {
            grid.innerHTML = `<p class="materiais-vazio">Nenhum material disponível no momento.</p>`;
            return;
        }

        grid.innerHTML = materiais.map(m => `
            <article class="material-card">

                ${m.imagem
                    ? `<div class="material-card-img" style="background-image:url('${m.imagem}')"></div>`
                    : `<div class="material-card-img material-card-img--sem-foto"><i class="${m.icone}"></i></div>`
                }

                <div class="material-card-corpo">
                    <h3>${m.titulo}</h3>
                    <p>${m.descricao}</p>

                    <span class="material-card-info">
                        Nível: ${m.nivel}${m.paginas ? ` • ${m.paginas} páginas` : ""}
                    </span>

                    <div class="material-card-botoes">
                        <button type="button" class="btn-visualizar" data-id="${m.id}">
                            <i class="fa-solid fa-magnifying-glass"></i> Visualizar
                        </button>
                        <a href="${m.link}" target="_blank" rel="noopener" class="btn-baixar">
                            <i class="fa-solid fa-download"></i> Baixar
                        </a>
                    </div>
                </div>

            </article>
        `).join("");

        grid.querySelectorAll(".btn-visualizar").forEach(btn => {
            btn.addEventListener("click", () => abrirModal(btn.dataset.id));
        });
    }

    // ═══════════════════════════════════════
    // MODAL DE RESUMO (mesmo estilo do blog)
    // ═══════════════════════════════════════

    function abrirModal(id) {

        const m = materiais.find(item => item.id === id);
        if (!m || !modal) return;

        modal.innerHTML = `
            <div class="noticia-modal-conteudo">

                <button class="noticia-modal-fechar" aria-label="Fechar">
                    <i class="fa-solid fa-xmark"></i>
                </button>

                <div class="noticia-modal-texto">
                    <h2>${m.titulo}</h2>
                    <span class="noticia-card-data">${m.titulo} — Resumo</span>
                    <p>${m.resumo}</p>

                    <a href="${m.link}" target="_blank" rel="noopener" class="btn-baixar">
                        <i class="fa-solid fa-download"></i> Baixar material
                    </a>
                </div>

            </div>
        `;

        modal.classList.add("ativo");
        document.body.style.overflow = "hidden";

        modal.querySelector(".noticia-modal-fechar")
             .addEventListener("click", fecharModal);
    }

    function fecharModal() {
        modal.classList.remove("ativo");
        modal.innerHTML = "";
        document.body.style.overflow = "";
    }

    if (modal) {
        modal.addEventListener("click", e => {
            if (e.target === modal) fecharModal();
        });
    }

    document.addEventListener("keydown", e => {
        if (e.key === "Escape") fecharModal();
    });

    renderGrid();
}