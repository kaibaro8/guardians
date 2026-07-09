document.addEventListener('DOMContentLoaded', function () {

    // ═══════════════════════════════════════
    // CONFIGURAÇÃO
    // ═══════════════════════════════════════

    const NOMES_MES = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];

    const DIAS_SEMANA = ["D", "S", "T", "Q", "Q", "S", "S"];

    // ═══════════════════════════════════════
    // ESTADO
    // ═══════════════════════════════════════

    const hoje         = new Date();
    let mesAtual       = hoje.getMonth();
    let anoAtual       = hoje.getFullYear();
    let diaSelecionado = hoje.getDate();
    let apiData        = { eventos: [], inscritos: [], logado: false };

    // ═══════════════════════════════════════
    // ELEMENTOS DO DOM
    // ═══════════════════════════════════════

    const calendario = document.getElementById('agenda-calendario');
    const detalhes   = document.getElementById('agenda-detalhes');

    if (!calendario || !detalhes) return;

    // ═══════════════════════════════════════
    // UTILITÁRIOS
    // ═══════════════════════════════════════

    function paraISO(ano, mes, dia) {
        return `${ano}-${String(mes + 1).padStart(2, '0')}-${String(dia).padStart(2, '0')}`;
    }

    function normalizarData(data) {
        if (Array.isArray(data)) {
            const [ano, mes, dia] = data;
            return `${ano}-${String(mes).padStart(2, '0')}-${String(dia).padStart(2, '0')}`;
        }
        if (typeof data === 'string') {
            return data.substring(0, 10);
        }
        return '';
    }

    function eventosDoDia(dataISO) {
        return apiData.eventos.filter(e => normalizarData(e.data) === dataISO);
    }

    function diasComEventoNoMes(ano, mes) {
        const prefixo = `${ano}-${String(mes + 1).padStart(2, '0')}`;
        return apiData.eventos
            .filter(e => normalizarData(e.data).startsWith(prefixo))
            .map(e => Number(normalizarData(e.data).split('-')[2]));
    }

    // ═══════════════════════════════════════
    // BUSCA EVENTOS NA API
    // ═══════════════════════════════════════

    async function carregar() {
        try {
            const res = await fetch('/api/eventos');
            apiData   = await res.json();

            const urlParams = new URLSearchParams(window.location.search);
            const inscricaoConfirmada = urlParams.has('inscrito');

            if (inscricaoConfirmada) {
                window.history.replaceState({}, '', window.location.pathname);
            }

            renderCalendario();
            renderDetalhes(inscricaoConfirmada);

        } catch (err) {
            console.error('Erro ao carregar eventos:', err);
            renderCalendario();
            renderDetalhes();
        }
    }

    // ═══════════════════════════════════════
    // RENDERIZA CALENDÁRIO
    // ═══════════════════════════════════════

    function renderCalendario() {

        const primeiroDia  = new Date(anoAtual, mesAtual, 1).getDay();
        const totalDias    = new Date(anoAtual, mesAtual + 1, 0).getDate();
        const diasEvento   = diasComEventoNoMes(anoAtual, mesAtual);

        let celulas = '';

        for (let i = 0; i < primeiroDia; i++) {
            celulas += `<span class="agenda-dia vazio"></span>`;
        }

        for (let dia = 1; dia <= totalDias; dia++) {
            const temEvento   = diasEvento.includes(dia);
            const selecionado = dia === diaSelecionado;

            celulas += `
                <button class="agenda-dia${temEvento ? ' tem-evento' : ''}${selecionado ? ' selecionado' : ''}"
                        data-dia="${dia}">
                    ${dia}
                </button>
            `;
        }

        calendario.innerHTML = `
            <div class="agenda-mes-nav">
                <button class="agenda-nav-btn" id="mes-anterior" aria-label="Mês anterior">
                    <i class="fa-solid fa-chevron-left"></i>
                </button>
                <h3>${NOMES_MES[mesAtual]} de ${anoAtual}</h3>
                <button class="agenda-nav-btn" id="mes-proximo" aria-label="Próximo mês">
                    <i class="fa-solid fa-chevron-right"></i>
                </button>
            </div>
            <div class="agenda-dias-semana">
                ${DIAS_SEMANA.map(d => `<span>${d}</span>`).join('')}
            </div>
            <div class="agenda-grade">
                ${celulas}
            </div>
        `;

        calendario.querySelectorAll('.agenda-dia:not(.vazio)').forEach(botao => {
            botao.addEventListener('click', () => {
                diaSelecionado = Number(botao.dataset.dia);
                renderCalendario();
                renderDetalhes();
            });
        });

        document.getElementById('mes-anterior').addEventListener('click', () => {
            mesAtual--;
            if (mesAtual < 0) { mesAtual = 11; anoAtual--; }
            diaSelecionado = null;
            renderCalendario();
            renderDetalhes();
        });

        document.getElementById('mes-proximo').addEventListener('click', () => {
            mesAtual++;
            if (mesAtual > 11) { mesAtual = 0; anoAtual++; }
            diaSelecionado = null;
            renderCalendario();
            renderDetalhes();
        });
    }

    // ═══════════════════════════════════════
    // RENDERIZA DETALHES DO DIA
    // ═══════════════════════════════════════

    function renderDetalhes(mostrarConfirmacao = false) {

        if (!diaSelecionado) {
            detalhes.innerHTML = `
                <p class="agenda-vazio">
                    Selecione um dia no calendário para ver os eventos.
                </p>`;
            return;
        }

        const dataISO       = paraISO(anoAtual, mesAtual, diaSelecionado);
        const evts          = eventosDoDia(dataISO);
        const dataFormatada = `${diaSelecionado} de ${NOMES_MES[mesAtual]} de ${anoAtual}`;

        const banner = mostrarConfirmacao
            ? `<div class="agenda-confirmacao" id="agenda-confirmacao">✅ Inscrição confirmada!</div>`
            : '';

        if (!evts.length) {
            detalhes.innerHTML = `
                ${banner}
                <h3>${dataFormatada}</h3>
                <p class="agenda-vazio">Nenhum evento agendado para esse dia.</p>
            `;
        } else {
            detalhes.innerHTML = `
                ${banner}
                <h3>${dataFormatada}</h3>
                <div class="agenda-eventos-lista">
                    ${evts.map(e => {

                        const inscrito = apiData.inscritos &&
                                         apiData.inscritos.includes(e.id);
                        let acao = '';

                        if (!apiData.logado) {
                            acao = `<a href="/login" class="btn-insc btn-inscrever">
                                        <i class="fa-solid fa-right-to-bracket"></i>
                                        Login para Participar
                                    </a>`;
                        } else if (inscrito) {
                            const csrfToken = getCsrfToken();
                            acao = `<form action="/api/eventos/cancelar" method="post">
                                        <input type="hidden" name="eventoId" value="${e.id}">
                                        <input type="hidden" name="_csrf" value="${csrfToken}">
                                        <button type="submit" class="btn-insc btn-cancelar">
                                            <i class="fa-solid fa-xmark"></i>
                                            Cancelar Minha Vaga
                                        </button>
                                    </form>`;
                        } else {
                            acao = `<a href="/api/eventos/inscrever/${e.id}"
                                       class="btn-insc btn-inscrever">
                                        <i class="fa-solid fa-check"></i>
                                        Confirmar Inscrição
                                    </a>`;
                        }

                        return `
                            <div class="agenda-evento-card ${inscrito ? 'is-member' : ''}">
                                <h4>${inscrito ? '⭐ ' : ''}${e.titulo}</h4>
                                <p><i class="fa-solid fa-align-left"></i>
                                   ${e.descricao || 'Sem descrição.'}</p>
                                ${acao}
                            </div>
                        `;

                    }).join('')}
                </div>
            `;
        }

        if (mostrarConfirmacao) {
            setTimeout(() => {
                const el = document.getElementById('agenda-confirmacao');
                if (el) el.remove();
            }, 4000);
        }
    }

    // ═══════════════════════════════════════
    // INICIALIZAÇÃO
    // ═══════════════════════════════════════

    carregar();

});