document.addEventListener('DOMContentLoaded', function () {

    const modal = document.getElementById('blog-modal');

    // ═══════════════════════════════════════
    // ABRE MODAL COM DADOS DO CARD
    // ═══════════════════════════════════════

    function abrirModal(card) {

        const titulo        = card.dataset.titulo        || 'Guardiãs das Águas';
        const descricao     = card.dataset.descricao     || '';
        const textoCompleto = card.dataset.textoCompleto || descricao;
        const arquivo       = card.dataset.arquivo       || '';
        const tipo          = card.dataset.tipo          || '';
        const data          = card.dataset.data          || '';
        const autor         = card.dataset.autor         || 'Guardiãs das Águas';

        // Monta mídia do modal
        let midia = '';

        if (tipo === 'imagem' && arquivo) {
            midia = `<div class="noticia-modal-img"
                          style="background-image: url('${arquivo}')">
                     </div>`;
        } else if (tipo === 'video' && arquivo) {
            midia = `<div class="noticia-modal-video">
                        <video src="${arquivo}" controls></video>
                     </div>`;
        }

        modal.innerHTML = `
            <div class="noticia-modal-conteudo">

                <button class="noticia-modal-fechar" aria-label="Fechar">
                    <i class="fa-solid fa-xmark"></i>
                </button>

                ${midia}

                <div class="noticia-modal-texto">

                    <span class="noticia-card-data">
                        <i class="fa-regular fa-calendar"></i> ${data}
                        &nbsp;·&nbsp;
                        <i class="fa-regular fa-user"></i> ${autor}
                    </span>

                    <h2>${titulo}</h2>

                    <p>${textoCompleto}</p>

                </div>

            </div>
        `;

        modal.classList.add('ativo');
        document.body.style.overflow = 'hidden';

        modal.querySelector('.noticia-modal-fechar')
             .addEventListener('click', fecharModal);
    }

    // ═══════════════════════════════════════
    // FECHA MODAL
    // ═══════════════════════════════════════

    function fecharModal() {
        modal.classList.remove('ativo');
        modal.innerHTML = '';
        document.body.style.overflow = '';
    }

    // Fecha clicando fora do conteúdo
    if (modal) {
        modal.addEventListener('click', function (e) {
            if (e.target === modal) fecharModal();
        });
    }

    // Fecha com ESC
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') fecharModal();
    });

    // ═══════════════════════════════════════
    // EVENTOS DOS CARDS
    // ═══════════════════════════════════════

    document.querySelectorAll('.noticia-card').forEach(card => {
        card.addEventListener('click', () => abrirModal(card));
    });

});