import { iniciarCarrosselGenerico } from "./carrossel.js";

// ═══════════════════════════════════════
// DADOS DA EQUIPE
// ═══════════════════════════════════════

const equipe = [
    {
        nome: "Drª. Jeamylle Nilin",
        cargo: "Coordenação Geral — UFU/Biologia",
        foto: "/img/cordenadores/jeamylle.jpg",
        bio: "Bióloga com Doutorado em Ciências Marinhas Tropicais. Desenvolve atividades de ensino, pesquisa e extensão em educação ambiental e popularização da ciência nas áreas de Ecotoxicologia e Resíduos Sólidos. Idealizadora dos projetos Guardiões do Mar e Guardiões das Águas. Coordenadora geral e responsável pela articulação das equipes."
    },
    {
        nome: "Drª. Claudiene Santos",
        cargo: "Coordenadora de Direitos Humanos — UFU/Pedagogia ICHPO",
        foto: "/img/cordenadores/claudiene.jpg",
        bio: "Bióloga com Doutorado em Psicologia. Especialista em Educação Sexual. Coordenação geral das atividades relacionadas às questões de Gênero, Juventudes, Sexualidades, Diversidade Sexual, Saúde, Violências de gênero e Educação Sexual."
    },
    {
        nome: "Profa. Drª. Gleicimar Gonçalves Cunha",
        cargo: "Coordenadora do \"Se Liga no Futuro\" — UFU/Pedagogia ICHPO",
        foto: "/img/cordenadores/gleicimar.png",
        bio: "Doutora e mestre em Psicologia do Desenvolvimento e Escolar pela Universidade de Brasília (UnB). Pesquisadora nas áreas de desenvolvimento humano, psicologia escolar, socioeducação, formação profissional e direitos da criança e do adolescente."
    }
];

// ═══════════════════════════════════════
// IMAGENS DOS PARCEIROS POR ANO
// ═══════════════════════════════════════

const parceirosImagens = {
    "2025": "/img/parceiros/brasao_parceiros_2025.png",
    "2026": "/img/parceiros/brasao_parceiros_2026.png"
};

// ═══════════════════════════════════════
// INICIALIZAÇÃO
// ═══════════════════════════════════════

document.addEventListener("DOMContentLoaded", () => {

    iniciarCarrosselGenerico({
        containerId: "carrossel-equipe",
        itens: equipe,
        renderItem: pessoa => `
            <div class="pessoa-card">
                <div class="pessoa-card-foto" style="background-image:url('${pessoa.foto}')"></div>
                <div class="pessoa-card-info">
                    <h3>${pessoa.nome}</h3>
                    <span>${pessoa.cargo}</span>
                    <p>${pessoa.bio}</p>
                </div>
            </div>
        `
    });

    const botoesParceiros  = document.querySelectorAll(".parceiros-ano");
    const imagemParceiros  = document.getElementById("parceiros-imagem");

    botoesParceiros.forEach(botao => {
        botao.addEventListener("click", () => {
            botoesParceiros.forEach(b => b.classList.remove("ativo"));
            botao.classList.add("ativo");

            const ano = botao.dataset.ano;
            imagemParceiros.src = parceirosImagens[ano];
            imagemParceiros.alt = `Parceiros ${ano}`;
        });
    });

});