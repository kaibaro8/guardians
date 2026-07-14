// Dados dos eventos reais realizados pelas Guardiãs das Águas.
// Cada evento pertence a 1 núcleo. Eventos simples usam "descricao" + "galeria".
// Eventos com múltiplas etapas (ex.: Formação das Guardiãs) usam "secoes": um
// array de sub-eventos, cada um com seu próprio texto e galeria.

export const nucleos = [
    "Todos",
    "Uberlândia",
    "Triângulo Mineiro",
    "Ceará",
    "Pernambuco",
    "Sergipe",
    "Mato Grosso",
    "Rio Grande do Sul"
];

export const eventos = [
    {
        id: "abertura-projeto",
        titulo: "Abertura do Projeto — Meninas pelo Saneamento",
        nucleo: "Uberlândia",
        local: "Auditório do PPGQUI, Bloco 5I — UFU, Uberlândia – MG",
        data: "2025-02-11",
        resumo: "Evento de abertura oficial do projeto Guardiãs das Águas, em comemoração ao Dia Internacional das Mulheres e Meninas nas Ciências, com roda de conversa sobre trajetórias femininas na ciência.",
        descricao: "No dia 11 de fevereiro de 2025, as Guardiãs das Águas participaram da abertura oficial do projeto, em um evento realizado na Universidade Federal de Uberlândia (UFU), Campus Santa Mônica, em comemoração ao Dia Internacional das Mulheres e Meninas nas Ciências. O encontro teve como tema: \u201cGuardiãs das Águas – Meninas pelo Saneamento: quebrando a barreira da invisibilidade\u201d.\n\nO evento contou com a presença de pesquisadoras e professoras que compartilharam suas trajetórias na ciência, contando como foi o processo de se tornarem pesquisadoras e professoras, os desafios enfrentados ao longo do caminho e as dificuldades de ser mulher em um espaço historicamente dominado por homens. Elas falaram também sobre os direitos das mulheres na ciência e destacaram a importância de que cada vez mais meninas e mulheres ocupem esses espaços, mesmo sabendo que não é um caminho fácil. Ainda assim, todas reforçaram o quanto é gratificante fazer o que se ama.\n\nParticiparam da mesa: Profª Drª Jeamylle Nilin (INBIO/UFU), Profª Drª Claudiene Santos (ICHPO/UFU), Profª Drª Amanda Danuello (IQ/UFU) e a doutoranda Alessandra Pissolati (PPGED-FACED/UFU).\n\nO evento foi realizado às 19h, com transmissão ao vivo pelo YouTube e emissão de certificados. Foi um momento de escuta, reflexão e inspiração, que marcou o início das atividades do projeto Guardiãs das Águas em 2025.",
        imagem: "/img/eventos/abertura-projeto/1.jpeg",
        galeria: [
            "/img/eventos/abertura-projeto/1.jpeg",
            "/img/eventos/abertura-projeto/2.jpeg",
            "/img/eventos/abertura-projeto/3.jpeg",
            "/img/eventos/abertura-projeto/4.jpeg",
            "/img/eventos/abertura-projeto/5.jpeg",
            "/img/eventos/abertura-projeto/6.jpeg",
            "/img/eventos/abertura-projeto/7.jpeg",
            "/img/eventos/abertura-projeto/8.jpeg",
            "/img/eventos/abertura-projeto/9.jpeg"
        ]
    },
    {
        id: "dia-da-agua",
        titulo: "Dia Mundial da Água no Parque do Sabiá",
        nucleo: "Uberlândia",
        local: "Parque do Sabiá, Uberlândia – MG",
        data: "2025-03-22",
        resumo: "Ação de conscientização com visitantes do parque sobre a importância dos rios, córregos e recursos hídricos da cidade, em comemoração ao Dia Mundial da Água.",
        descricao: "No Dia Mundial da Água, em 22 de março de 2025, as Guardiãs das Águas participaram de uma atividade especial no Parque do Sabiá, em Uberlândia. A ação teve como objetivo promover o diálogo com a população sobre a importância dos rios, córregos e demais recursos hídricos da cidade. Foi um momento marcante de troca de saberes, escuta ativa e conscientização.\n\nDurante a atividade, as Guardiãs realizaram abordagens com visitantes do parque, ouvindo histórias, memórias afetivas e preocupações em relação à poluição e ao cuidado com a água. A receptividade das pessoas demonstrou o quanto a população se interessa por esses temas, mesmo que, muitas vezes, não tenha acesso ao conhecimento técnico ou científico por trás das questões ambientais.\n\nEssa vivência fez a equipe perceber um aspecto importante da formação: compreender que levar informação para a comunidade também envolve ouvir e reconhecer o conhecimento popular. Muitas das problemáticas ambientais são percebidas como parte da rotina e acabam sendo naturalizadas.",
        imagem: "/img/eventos/dia-da-agua/1.jpeg",
        galeria: [
            "/img/eventos/dia-da-agua/1.jpeg",
            "/img/eventos/dia-da-agua/2.jpeg",
            "/img/eventos/dia-da-agua/3.jpeg",
            "/img/eventos/dia-da-agua/4.jpeg",
            "/img/eventos/dia-da-agua/5.jpeg",
            "/img/eventos/dia-da-agua/6.jpeg",
            "/img/eventos/dia-da-agua/7.jpeg",
            "/img/eventos/dia-da-agua/8.jpeg",
            "/img/eventos/dia-da-agua/9.jpeg",
            "/img/eventos/dia-da-agua/10.jpeg",
            "/img/eventos/dia-da-agua/11.jpeg",
            "/img/eventos/dia-da-agua/12.jpeg",
            "/img/eventos/dia-da-agua/13.jpeg",
            "/img/eventos/dia-da-agua/14.jpeg",
            "/img/eventos/dia-da-agua/15.jpeg",
            "/img/eventos/dia-da-agua/16.jpeg",
            "/img/eventos/dia-da-agua/17.jpeg",
            "/img/eventos/dia-da-agua/18.jpeg",
            "/img/eventos/dia-da-agua/19.jpeg",
            "/img/eventos/dia-da-agua/20.jpeg",
            "/img/eventos/dia-da-agua/21.jpeg"
        ]
    },
    {
        id: "raizes-e-reflexos",
        titulo: "Raízes e Reflexos — a química da beleza e a força da ancestralidade",
        nucleo: "Uberlândia",
        local: "Auditório 5R-AB — UFU, Uberlândia – MG",
        data: "2025-03-14",
        resumo: "Roda de conversa em celebração ao Dia Internacional da Mulher sobre beleza, identidade, ancestralidade e os impactos ambientais dos cosméticos.",
        descricao: "No dia 14 de março de 2025, em celebração ao Dia Internacional da Mulher, aconteceu o evento \u201cRaízes e Reflexos: a química da beleza e a força da ancestralidade\u201d, promovido pelas Guardiãs das Águas. A atividade foi realizada no auditório 5R-AB da UFU, Campus Santa Mônica, e teve como proposta promover uma roda de conversa sensível e potente sobre beleza, identidade, ancestralidade e meio ambiente.\n\nDurante o encontro, foram discutidos temas como a imposição de padrões estéticos, os impactos ambientais causados por produtos de beleza e a importância do reconhecimento das raízes culturais através dos cabelos naturais.\n\nA roda contou com três convidadas especiais: Bianca Gonzaga (bióloga, mestranda em Ecologia, Conservação e Biodiversidade), que falou sobre a ecotoxicidade dos cosméticos e seus impactos nos corpos d'água; Ana Angélica Fagundes (cabeleireira especialista em crespos e cachos), que compartilhou sua vivência sobre autoaceitação e valorização dos cabelos naturais; e Crisleine Assunção (trancista especializada em cabelos afro), que abordou os saberes ancestrais das tranças.\n\nO evento foi um espaço acolhedor de trocas e reflexões, que integrou saberes científicos e populares, promovendo consciência ambiental, empoderamento feminino e valorização das raízes culturais. Ao final, os participantes receberam certificados.",
        imagem: "/img/eventos/raizes-reflexos/1.jpeg",
        galeria: [
            "/img/eventos/raizes-reflexos/1.jpeg",
            "/img/eventos/raizes-reflexos/2.jpeg",
            "/img/eventos/raizes-reflexos/3.jpeg",
            "/img/eventos/raizes-reflexos/4.jpeg",
            "/img/eventos/raizes-reflexos/5.jpeg",
            "/img/eventos/raizes-reflexos/6.jpeg",
            "/img/eventos/raizes-reflexos/7.jpeg",
            "/img/eventos/raizes-reflexos/8.jpeg",
            "/img/eventos/raizes-reflexos/9.jpeg",
            "/img/eventos/raizes-reflexos/10.jpeg",
            "/img/eventos/raizes-reflexos/11.jpeg",
            "/img/eventos/raizes-reflexos/12.jpeg",
            "/img/eventos/raizes-reflexos/13.jpeg",
            "/img/eventos/raizes-reflexos/14.jpeg",
            "/img/eventos/raizes-reflexos/15.jpeg",
            "/img/eventos/raizes-reflexos/16.jpeg",
            "/img/eventos/raizes-reflexos/17.jpeg",
            "/img/eventos/raizes-reflexos/18.jpeg",
            "/img/eventos/raizes-reflexos/19.jpeg"
        ]
    },
    {
        id: "mostra-extensionista-biologia",
        titulo: "Mostra Extensionista da Biologia",
        nucleo: "Uberlândia",
        local: "Parque Gávea, Uberlândia – MG",
        data: "2025-04-26",
        resumo: "Participação na Mostra Extensionista da Biologia com pesquisas, exibição de vídeo do projeto e mesa expositiva sobre monitoramento da qualidade da água.",
        descricao: "No dia 26 de abril de 2025, as Guardiãs das Águas participaram da Mostra Extensionista da Biologia, realizada no Parque Gávea, em Uberlândia. A ação teve como proposta ampliar o diálogo com a comunidade sobre a importância do cuidado com a água e o meio ambiente.\n\nDurante o evento, a equipe realizou diversas pesquisas com os visitantes, ouvindo histórias e relatos pessoais que revelaram a relação afetiva das pessoas com os recursos hídricos da cidade. Foi exibido também um vídeo sobre o projeto, que chamou a atenção do público pela abordagem sensível e informativa sobre as ações desenvolvidas.\n\nAlém disso, foi montada uma mesa expositiva com amostras coletadas durante as aulas, possibilitando que os visitantes conhecessem de perto o trabalho de monitoramento da qualidade da água realizado pelas Guardiãs. O espaço foi um convite à curiosidade, à troca de saberes e ao despertar da consciência ambiental.\n\nA experiência reforçou a importância de levar conhecimento técnico para a sociedade de forma acessível e acolhedora, reconhecendo e valorizando também os saberes populares.",
        imagem: "/img/eventos/mostra-extensionista/1.jpeg",
        galeria: [
            "/img/eventos/mostra-extensionista/1.jpeg",
            "/img/eventos/mostra-extensionista/2.jpeg",
            "/img/eventos/mostra-extensionista/3.jpeg",
            "/img/eventos/mostra-extensionista/4.jpeg",
            "/img/eventos/mostra-extensionista/5.jpeg",
            "/img/eventos/mostra-extensionista/6.jpeg",
            "/img/eventos/mostra-extensionista/7.jpeg",
            "/img/eventos/mostra-extensionista/8.jpeg",
            "/img/eventos/mostra-extensionista/9.jpeg",
            "/img/eventos/mostra-extensionista/10.jpeg",
            "/img/eventos/mostra-extensionista/11.jpeg",
            "/img/eventos/mostra-extensionista/12.jpeg",
            "/img/eventos/mostra-extensionista/13.jpeg",
            "/img/eventos/mostra-extensionista/14.jpeg",
            "/img/eventos/mostra-extensionista/15.jpeg",
            "/img/eventos/mostra-extensionista/16.jpeg",
            "/img/eventos/mostra-extensionista/17.jpeg",
            "/img/eventos/mostra-extensionista/18.jpeg",
            "/img/eventos/mostra-extensionista/19.jpeg",
            "/img/eventos/mostra-extensionista/20.jpeg",
            "/img/eventos/mostra-extensionista/21.jpeg",
            "/img/eventos/mostra-extensionista/22.jpeg",
            "/img/eventos/mostra-extensionista/23.jpeg",
            "/img/eventos/mostra-extensionista/24.jpeg",
            "/img/eventos/mostra-extensionista/25.jpeg",
            "/img/eventos/mostra-extensionista/26.jpeg",
            "/img/eventos/mostra-extensionista/27.jpeg",
            "/img/eventos/mostra-extensionista/28.jpeg",
            "/img/eventos/mostra-extensionista/29.jpeg",
            "/img/eventos/mostra-extensionista/30.jpeg",
            "/img/eventos/mostra-extensionista/31.jpeg",
            "/img/eventos/mostra-extensionista/32.jpeg",
            "/img/eventos/mostra-extensionista/33.jpeg",
            "/img/eventos/mostra-extensionista/34.jpeg",
            "/img/eventos/mostra-extensionista/35.jpeg",
            "/img/eventos/mostra-extensionista/36.jpeg",
            "/img/eventos/mostra-extensionista/37.jpeg",
            "/img/eventos/mostra-extensionista/38.jpeg",
            "/img/eventos/mostra-extensionista/39.jpeg",
            "/img/eventos/mostra-extensionista/40.jpeg",
            "/img/eventos/mostra-extensionista/41.jpeg",
            "/img/eventos/mostra-extensionista/42.jpeg",
            "/img/eventos/mostra-extensionista/43.jpeg",
            "/img/eventos/mostra-extensionista/44.jpeg",
            "/img/eventos/mostra-extensionista/45.jpeg"
        ]
    },
    {
        id: "formacao-guardias",
        titulo: "Formação das Guardiãs das Águas",
        nucleo: "Uberlândia",
        local: "UFU, Uberlândia – MG",
        data: "2025-03-18",
        resumo: "Curso de formação em 5 temas — do papel do cidadão na conservação da água até o uso da ciência como ferramenta de transformação social.",
        // Evento "guarda-chuva": em vez de descricao/galeria únicos, tem "secoes"
        // (um item por Tema). O modal usa isso pra montar abas internas.
        // OBS: só o Tema 1 tem data confirmada no site antigo (18 e 21/03/2025).
        // As datas dos Temas 2 a 5 abaixo são estimativas sequenciais — ajuste
        // se você tiver as datas reais dos encontros.
        imagem: "/img/eventos/formacao-guardias/geral/1.jpeg",
        secoes: [
            {
                id: "tema-1",
                titulo: "Tema 1 — Responsabilidade ambiental e cidadania",
                data: "2025-03-18",
                descricao: "Nos dias 18 e 21 de março de 2025 foi realizado o primeiro tema da formação das Guardiãs das Águas! Nesse encontro foi discutido o papel de cada cidadão e do Poder Público na conservação dos ambientes aquáticos e da qualidade da água, tanto do ponto de vista ambiental quanto da saúde humana.",
                galeria: [
            "/img/eventos/formacao-guardias/tema-1/1.jpeg",
            "/img/eventos/formacao-guardias/tema-1/2.jpeg",
            "/img/eventos/formacao-guardias/tema-1/3.jpeg",
            "/img/eventos/formacao-guardias/tema-1/4.jpeg",
            "/img/eventos/formacao-guardias/tema-1/5.jpeg",
            "/img/eventos/formacao-guardias/tema-1/6.jpeg",
            "/img/eventos/formacao-guardias/tema-1/7.jpeg",
            "/img/eventos/formacao-guardias/tema-1/8.jpeg",
            "/img/eventos/formacao-guardias/tema-1/9.jpeg",
            "/img/eventos/formacao-guardias/tema-1/10.jpeg",
            "/img/eventos/formacao-guardias/tema-1/11.jpeg",
            "/img/eventos/formacao-guardias/tema-1/12.jpeg",
            "/img/eventos/formacao-guardias/tema-1/13.jpeg",
            "/img/eventos/formacao-guardias/tema-1/14.jpeg",
            "/img/eventos/formacao-guardias/tema-1/15.jpeg",
            "/img/eventos/formacao-guardias/tema-1/16.jpeg"
        ]
            },
            {
                id: "tema-2",
                titulo: "Tema 2 — Água: usos múltiplos e fontes poluidoras",
                data: "2025-03-25",
                descricao: "Nesse segundo encontro da formação das Guardiãs das Águas foram debatidas as características naturais dos ambientes aquáticos, os usos da água no dia a dia e as principais fontes de poluição. As participantes demarcaram suas casas em um mapa criado durante a atividade, assim como os pontos de contaminação da água.",
                galeria: [
            "/img/eventos/formacao-guardias/tema-2/1.jpeg",
            "/img/eventos/formacao-guardias/tema-2/2.jpeg",
            "/img/eventos/formacao-guardias/tema-2/3.jpeg",
            "/img/eventos/formacao-guardias/tema-2/4.jpeg",
            "/img/eventos/formacao-guardias/tema-2/5.jpeg",
            "/img/eventos/formacao-guardias/tema-2/6.jpeg",
            "/img/eventos/formacao-guardias/tema-2/7.jpeg",
            "/img/eventos/formacao-guardias/tema-2/8.jpeg",
            "/img/eventos/formacao-guardias/tema-2/9.jpeg",
            "/img/eventos/formacao-guardias/tema-2/10.jpeg",
            "/img/eventos/formacao-guardias/tema-2/11.jpeg",
            "/img/eventos/formacao-guardias/tema-2/12.jpeg"
        ]
            },
            {
                id: "tema-3",
                titulo: "Tema 3 — Órgãos públicos de fiscalização e monitoramento",
                data: "2025-04-01",
                descricao: "Nesse encontro foi discutida a importância das leis ambientais em relação à proteção das águas e as responsabilidades do Poder Público na fiscalização e monitoramento dos ambientes aquáticos. Também foi realizada uma mini apresentação com o que foi aprendido durante a atividade.",
                galeria: [
            "/img/eventos/formacao-guardias/tema-3/1.jpeg",
            "/img/eventos/formacao-guardias/tema-3/2.jpeg",
            "/img/eventos/formacao-guardias/tema-3/3.jpeg",
            "/img/eventos/formacao-guardias/tema-3/4.jpeg",
            "/img/eventos/formacao-guardias/tema-3/5.jpeg",
            "/img/eventos/formacao-guardias/tema-3/6.jpeg",
            "/img/eventos/formacao-guardias/tema-3/7.jpeg",
            "/img/eventos/formacao-guardias/tema-3/8.jpeg",
            "/img/eventos/formacao-guardias/tema-3/9.jpeg",
            "/img/eventos/formacao-guardias/tema-3/10.jpeg",
            "/img/eventos/formacao-guardias/tema-3/11.jpeg",
            "/img/eventos/formacao-guardias/tema-3/12.jpeg",
            "/img/eventos/formacao-guardias/tema-3/13.jpeg",
            "/img/eventos/formacao-guardias/tema-3/14.jpeg",
            "/img/eventos/formacao-guardias/tema-3/15.jpeg",
            "/img/eventos/formacao-guardias/tema-3/16.jpeg",
            "/img/eventos/formacao-guardias/tema-3/17.jpeg",
            "/img/eventos/formacao-guardias/tema-3/18.jpeg",
            "/img/eventos/formacao-guardias/tema-3/19.jpeg",
            "/img/eventos/formacao-guardias/tema-3/20.jpeg",
            "/img/eventos/formacao-guardias/tema-3/21.jpeg",
            "/img/eventos/formacao-guardias/tema-3/22.jpeg",
            "/img/eventos/formacao-guardias/tema-3/23.jpeg",
            "/img/eventos/formacao-guardias/tema-3/24.jpeg"
        ]
            },
            {
                id: "tema-4",
                titulo: "Tema 4 — Ferramentas de monitoramento ambiental",
                data: "2025-04-08",
                descricao: "Nesse encontro, as Guardiãs das Águas aprenderam sobre as técnicas de análise da qualidade da água, estabelecidas na Resolução do Conselho Nacional do Meio Ambiente, que trata da classificação dos corpos d'água.",
                galeria: [
            "/img/eventos/formacao-guardias/tema-4/1.jpeg",
            "/img/eventos/formacao-guardias/tema-4/2.jpeg",
            "/img/eventos/formacao-guardias/tema-4/3.jpeg",
            "/img/eventos/formacao-guardias/tema-4/4.jpeg",
            "/img/eventos/formacao-guardias/tema-4/5.jpeg",
            "/img/eventos/formacao-guardias/tema-4/6.jpeg",
            "/img/eventos/formacao-guardias/tema-4/7.jpeg",
            "/img/eventos/formacao-guardias/tema-4/8.jpeg",
            "/img/eventos/formacao-guardias/tema-4/9.jpeg",
            "/img/eventos/formacao-guardias/tema-4/10.jpeg",
            "/img/eventos/formacao-guardias/tema-4/11.jpeg",
            "/img/eventos/formacao-guardias/tema-4/12.jpeg",
            "/img/eventos/formacao-guardias/tema-4/13.jpeg",
            "/img/eventos/formacao-guardias/tema-4/14.jpeg",
            "/img/eventos/formacao-guardias/tema-4/15.jpeg",
            "/img/eventos/formacao-guardias/tema-4/16.jpeg",
            "/img/eventos/formacao-guardias/tema-4/17.jpeg",
            "/img/eventos/formacao-guardias/tema-4/18.jpeg",
            "/img/eventos/formacao-guardias/tema-4/19.jpeg",
            "/img/eventos/formacao-guardias/tema-4/20.jpeg",
            "/img/eventos/formacao-guardias/tema-4/21.jpeg",
            "/img/eventos/formacao-guardias/tema-4/22.jpeg",
            "/img/eventos/formacao-guardias/tema-4/23.jpeg",
            "/img/eventos/formacao-guardias/tema-4/24.jpeg",
            "/img/eventos/formacao-guardias/tema-4/25.jpeg",
            "/img/eventos/formacao-guardias/tema-4/26.jpeg",
            "/img/eventos/formacao-guardias/tema-4/27.jpeg",
            "/img/eventos/formacao-guardias/tema-4/28.jpeg",
            "/img/eventos/formacao-guardias/tema-4/29.jpeg",
            "/img/eventos/formacao-guardias/tema-4/30.jpeg",
            "/img/eventos/formacao-guardias/tema-4/31.jpeg",
            "/img/eventos/formacao-guardias/tema-4/32.jpeg",
            "/img/eventos/formacao-guardias/tema-4/33.jpeg",
            "/img/eventos/formacao-guardias/tema-4/34.jpeg",
            "/img/eventos/formacao-guardias/tema-4/35.jpeg",
            "/img/eventos/formacao-guardias/tema-4/36.jpeg",
            "/img/eventos/formacao-guardias/tema-4/37.jpeg",
            "/img/eventos/formacao-guardias/tema-4/38.jpeg",
            "/img/eventos/formacao-guardias/tema-4/39.jpeg",
            "/img/eventos/formacao-guardias/tema-4/40.jpeg",
            "/img/eventos/formacao-guardias/tema-4/41.jpeg",
            "/img/eventos/formacao-guardias/tema-4/42.jpeg",
            "/img/eventos/formacao-guardias/tema-4/43.jpeg",
            "/img/eventos/formacao-guardias/tema-4/44.jpeg",
            "/img/eventos/formacao-guardias/tema-4/45.jpeg",
            "/img/eventos/formacao-guardias/tema-4/46.jpeg",
            "/img/eventos/formacao-guardias/tema-4/47.jpeg"
        ]
            },
            {
                id: "tema-5",
                titulo: "Tema 5 — A transformação social e ambiental pela ciência",
                data: "2025-04-15",
                descricao: "No último encontro do curso de formação, foi reforçada a importância da Ciência como pilar para a transformação social e ambiental, valorizando o trabalho em conjunto dos centros de pesquisa, como as Universidades, o Poder Público e a sociedade civil, para a conservação dos ambientes aquáticos.",
                galeria: [
            "/img/eventos/formacao-guardias/tema-5/1.jpeg",
            "/img/eventos/formacao-guardias/tema-5/2.jpeg",
            "/img/eventos/formacao-guardias/tema-5/3.jpeg",
            "/img/eventos/formacao-guardias/tema-5/4.jpeg",
            "/img/eventos/formacao-guardias/tema-5/5.jpeg",
            "/img/eventos/formacao-guardias/tema-5/6.jpeg",
            "/img/eventos/formacao-guardias/tema-5/7.jpeg",
            "/img/eventos/formacao-guardias/tema-5/8.jpeg",
            "/img/eventos/formacao-guardias/tema-5/9.jpeg",
            "/img/eventos/formacao-guardias/tema-5/10.jpeg",
            "/img/eventos/formacao-guardias/tema-5/11.jpeg",
            "/img/eventos/formacao-guardias/tema-5/12.jpeg",
            "/img/eventos/formacao-guardias/tema-5/13.jpeg",
            "/img/eventos/formacao-guardias/tema-5/14.jpeg",
            "/img/eventos/formacao-guardias/tema-5/15.jpeg",
            "/img/eventos/formacao-guardias/tema-5/16.jpeg",
            "/img/eventos/formacao-guardias/tema-5/17.jpeg",
            "/img/eventos/formacao-guardias/tema-5/18.jpeg",
            "/img/eventos/formacao-guardias/tema-5/19.jpeg",
            "/img/eventos/formacao-guardias/tema-5/20.jpeg",
            "/img/eventos/formacao-guardias/tema-5/21.jpeg",
            "/img/eventos/formacao-guardias/tema-5/22.jpeg",
            "/img/eventos/formacao-guardias/tema-5/23.jpeg",
            "/img/eventos/formacao-guardias/tema-5/24.jpeg",
            "/img/eventos/formacao-guardias/tema-5/25.jpeg",
            "/img/eventos/formacao-guardias/tema-5/26.jpeg"
        ]
            }
        ]
    }
];

export function buscarEventoPorId(id) {
    return eventos.find(e => e.id === id);
}

export function filtrarPorNucleo(nucleo) {
    if (!nucleo || nucleo === "Todos") return eventos;
    return eventos.filter(e => e.nucleo === nucleo);
}

export function formatarData(dataISO) {
    const [ano, mes, dia] = dataISO.split("-");
    const meses = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];
    return `${dia} ${meses[Number(mes) - 1]}. ${ano}`;
}