import { iniciarCarrosselGenerico } from "./carrossel.js";
import { iniciarMapaNucleos }       from "./mapaNucleos.js";

// ═══════════════════════════════════════
// DADOS DOS NÚCLEOS
// ═══════════════════════════════════════

const projetos = [
    {
        id: "uberlandia",
        nome: "Núcleo Uberlândia",
        local: "Uberlândia, MG",
        regiao: "Sudeste",
        lat: -18.9128,
        lng: -48.2755,
        resumo: "Núcleo sede do projeto, com atividades de educação ambiental e monitoramento do Rio Uberabinha junto a escolas públicas da região.",
        textoCompleto: "O Núcleo Uberlândia é onde tudo começou. Aqui, o Guardiãs das Águas atua diretamente com escolas públicas, promovendo oficinas de educação ambiental, mutirões de limpeza e monitoramento da qualidade da água do Rio Uberabinha.",
        imagem: "https://placehold.co/640x420/5b289e/f5f2fa?text=Núcleo+Uberlândia"
    },
    {
        id: "uftm",
        nome: "Núcleo Triângulo Mineiro",
        local: "Uberaba, MG",
        regiao: "Sudeste",
        lat: -19.7496,
        lng: -47.9317,
        resumo: "Parceria com a UFTM para pesquisa e extensão sobre recursos hídricos do Triângulo Mineiro.",
        textoCompleto: "Em parceria com a Universidade Federal do Triângulo Mineiro, este núcleo desenvolve pesquisas sobre a qualidade da água em mananciais locais.",
        imagem: "https://placehold.co/640x420/5b289e/f5f2fa?text=Núcleo+Uberaba"
    },
    {
        id: "ifce",
        nome: "Núcleo Ceará",
        local: "Fortaleza, CE",
        regiao: "Nordeste",
        lat: -3.7439,
        lng: -38.5358,
        resumo: "Núcleo voltado à preservação de bacias costeiras e combate à escassez hídrica no semiárido.",
        textoCompleto: "Em parceria com o Instituto Federal do Ceará, o núcleo atua na conscientização sobre o uso racional da água em regiões afetadas pela escassez hídrica.",
        imagem: "https://placehold.co/640x420/5b289e/f5f2fa?text=Núcleo+Ceará"
    },
    {
        id: "ufpe",
        nome: "Núcleo Pernambuco",
        local: "Recife, PE",
        regiao: "Nordeste",
        lat: -8.0552,
        lng: -34.9515,
        resumo: "Projetos de recuperação de manguezais e educação ambiental costeira.",
        textoCompleto: "O núcleo de Pernambuco, em parceria com a UFPE, foca na recuperação de manguezais urbanos e na educação ambiental voltada para comunidades costeiras.",
        imagem: "https://placehold.co/640x420/5b289e/f5f2fa?text=Núcleo+Recife"
    },
    {
        id: "ufs",
        nome: "Núcleo Sergipe",
        local: "Aracaju, SE",
        regiao: "Nordeste",
        lat: -10.9269,
        lng: -37.1009,
        resumo: "Monitoramento participativo de rios urbanos com estudantes da rede pública.",
        textoCompleto: "Com apoio da Universidade Federal de Sergipe, este núcleo desenvolve um programa de monitoramento participativo da qualidade da água de rios urbanos.",
        imagem: "https://placehold.co/640x420/5b289e/f5f2fa?text=Núcleo+Aracaju"
    },
    {
        id: "ufmt",
        nome: "Núcleo Mato Grosso",
        local: "Cuiabá, MT",
        regiao: "Centro-Oeste",
        lat: -15.6083,
        lng: -56.0697,
        resumo: "Atuação na proteção de nascentes do Pantanal e bacia do Alto Paraguai.",
        textoCompleto: "Próximo ao Pantanal, o núcleo de Mato Grosso atua na proteção de nascentes e na sensibilização de comunidades ribeirinhas.",
        imagem: "https://placehold.co/640x420/5b289e/f5f2fa?text=Núcleo+Cuiabá"
    },
    {
        id: "furg",
        nome: "Núcleo Rio Grande do Sul",
        local: "Rio Grande, RS",
        regiao: "Sul",
        lat: -32.0738,
        lng: -52.1648,
        resumo: "Pesquisa e extensão sobre o estuário da Lagoa dos Patos junto à FURG.",
        textoCompleto: "Em parceria com a Universidade Federal do Rio Grande, o núcleo desenvolve pesquisas sobre o estuário da Lagoa dos Patos.",
        imagem: "https://placehold.co/640x420/5b289e/f5f2fa?text=Núcleo+Rio+Grande"
    }
];

// ═══════════════════════════════════════
// DADOS DA EQUIPE
// ═══════════════════════════════════════

const equipe = [
    {
        nome: "Drª. Jeamylle Nilin",
        cargo: "Coordenação Geral — UFU/Biologia",
        foto: "https://placehold.co/300x300/5b289e/f5f2fa?text=Jeamylle+Nilin",
        bio: "Bióloga com Doutorado em Ciências Marinhas Tropicais. Desenvolve atividades de ensino, pesquisa e extensão em educação ambiental e popularização da ciência nas áreas de Ecotoxicologia e Resíduos Sólidos. Idealizadora dos projetos Guardiões do Mar e Guardiões das Águas. Coordenadora geral e responsável pela articulação das equipes."
    },
    {
        nome: "Drª. Claudiene Santos",
        cargo: "Coordenadora de Direitos Humanos — UFU/Pedagogia ICHPO",
        foto: "https://placehold.co/300x300/8f73b2/f5f2fa?text=Claudiene+Santos",
        bio: "Bióloga com Doutorado em Psicologia. Especialista em Educação Sexual. Coordenação geral das atividades relacionadas às questões de Gênero, Juventudes, Sexualidades, Diversidade Sexual, Saúde, Violências de gênero e Educação Sexual."
    },
    {
        nome: "Profa. Drª. Gleicimar Gonçalves Cunha",
        cargo: "Coordenadora do \"Se Liga no Futuro\" — UFU/Pedagogia ICHPO",
        foto: "https://placehold.co/300x300/91b0d4/2b1150?text=Gleicimar+Cunha",
        bio: "Doutora e mestre em Psicologia do Desenvolvimento e Escolar pela Universidade de Brasília (UnB). Pesquisadora nas áreas de desenvolvimento humano, psicologia escolar, socioeducação, formação profissional e direitos da criança e do adolescente."
    }
];

// ═══════════════════════════════════════
// INICIALIZAÇÃO
// ═══════════════════════════════════════

document.addEventListener('DOMContentLoaded', function () {

    iniciarCarrosselGenerico({
        containerId: 'carrossel-equipe',
        itens: equipe,
        renderItem: pessoa => `
            <div class="pessoa-card">
                <div class="pessoa-card-foto"
                     style="background-image: url('${pessoa.foto}')">
                </div>
                <div class="pessoa-card-info">
                    <h3>${pessoa.nome}</h3>
                    <span>${pessoa.cargo}</span>
                    <p>${pessoa.bio}</p>
                </div>
            </div>
        `
    });

    iniciarMapaNucleos('mapa-nucleos', projetos);

});