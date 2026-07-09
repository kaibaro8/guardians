document.addEventListener('DOMContentLoaded', function () {

    // ═══════════════════════════════════════
    // FAQ — ACCORDION
    // ═══════════════════════════════════════

    const itens = document.querySelectorAll('.faq-item');

    itens.forEach(function (item) {

        const pergunta = item.querySelector('.faq-pergunta');
        const resposta = item.querySelector('.faq-resposta');

        if (!pergunta || !resposta) return;

        pergunta.addEventListener('click', function () {

            const jaAtivo = item.classList.contains('ativo');

            // Fecha todos os outros itens
            itens.forEach(function (outro) {
                outro.classList.remove('ativo');
                outro.querySelector('.faq-resposta').style.maxHeight = null;
            });

            if (!jaAtivo) {
                item.classList.add('ativo');
                resposta.style.maxHeight = resposta.scrollHeight + 'px';
            }

        });

    });

    // ═══════════════════════════════════════
    // CHAT BOT — SUGESTÕES
    // ═══════════════════════════════════════

    const sugestoes = document.querySelectorAll('.chat-bot-sugestoes button');
    const mensagens = document.querySelector('.chat-bot-mensagens');

    if (!mensagens) return;

    const respostas = {
        'Como participar?':
            'Você pode participar como voluntária, apoiadora ou parceira institucional. Confira a página "Faça Parte" no menu!',
        'Onde tem núcleos?':
            'Temos núcleos espalhados pelo Brasil! Veja a lista completa na página "Núcleos pelo Brasil".',
        'Como denunciar?':
            'Acesse a página "Denuncie!" no menu Contato. Lá estão os telefones oficiais do IBAMA, Disque Denúncia e da Patrulha Ambiental.'
    };

    function adicionarMensagem(container, texto, tipo) {
        const msg = document.createElement('div');
        msg.classList.add('msg', tipo === 'usuario' ? 'msg-usuario' : 'msg-bot');
        msg.textContent = texto;
        container.appendChild(msg);
        container.scrollTop = container.scrollHeight;
    }

    sugestoes.forEach(function (botao) {

        botao.addEventListener('click', function () {

            adicionarMensagem(mensagens, botao.textContent.trim(), 'usuario');

            const resposta = respostas[botao.textContent.trim()]
                || 'Em breve eu vou conseguir responder isso! Por enquanto, dá uma olhada nas Perguntas Frequentes ou fala com a gente pelo Fale Conosco 💧';

            setTimeout(function () {
                adicionarMensagem(mensagens, resposta, 'bot');
            }, 500);

        });

    });

});