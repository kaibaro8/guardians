// Dados dos eventos reais realizados pelas Guardiãs das Águas.
// Cada evento pertence a 1 núcleo e carrega suas próprias fotos.

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
        id: "mutirao-rio-uberabinha",
        titulo: "Mutirão de Limpeza do Rio Uberabinha",
        nucleo: "Uberlândia",
        local: "Parque do Sabiá, Uberlândia – MG",
        data: "2026-05-10",
        resumo: "Guardiãs e voluntários se uniram para retirar resíduos das margens do Rio Uberabinha, conscientizando a comunidade sobre a preservação dos recursos hídricos locais.",
        descricao: "O mutirão reuniu mais de 40 participantes entre guardiãs, estudantes e moradores do entorno do Parque do Sabiá. Durante a ação, foram recolhidas toneladas de resíduos sólidos das margens e do leito do Rio Uberabinha. A atividade também contou com uma roda de conversa sobre o histórico de degradação do rio e os avanços do projeto de recuperação em andamento junto à UFU.",
        imagem: "https://placehold.co/800x500/5b289e/f5f2fa?text=Mutirão+Rio+Uberabinha",
        galeria: [
            "https://placehold.co/640x420/5b289e/f5f2fa?text=Mutirão+1",
            "https://placehold.co/640x420/8f73b2/f5f2fa?text=Mutirão+2",
            "https://placehold.co/640x420/91b0d4/2b1150?text=Mutirão+3",
            "https://placehold.co/640x420/5b289e/f5f2fa?text=Mutirão+4"
        ]
    },
    {
        id: "oficina-educacao-ambiental",
        titulo: "Oficina de Educação Ambiental",
        nucleo: "Uberlândia",
        local: "Escola Municipal Dom Pedro II, Uberlândia – MG",
        data: "2026-04-22",
        resumo: "Oficina realizada com alunos do 6º ao 9º ano abordando o ciclo da água, poluição hídrica e o papel de cada cidadão na preservação dos rios.",
        descricao: "Na semana do Dia da Terra, as guardiãs levaram uma oficina interativa para estudantes da rede pública, com experimentos práticos sobre qualidade da água, dinâmicas de grupo sobre o ciclo hidrológico e produção de cartazes de conscientização. Os alunos comprometeram-se a replicar o aprendizado em casa e na comunidade.",
        imagem: "https://placehold.co/800x500/5b289e/f5f2fa?text=Oficina+Ed.+Ambiental",
        galeria: [
            "https://placehold.co/640x420/5b289e/f5f2fa?text=Oficina+1",
            "https://placehold.co/640x420/8f73b2/f5f2fa?text=Oficina+2",
            "https://placehold.co/640x420/91b0d4/2b1150?text=Oficina+3"
        ]
    },
    {
        id: "coleta-amostras-ceara",
        titulo: "Coleta de Amostras de Água",
        nucleo: "Ceará",
        local: "Açude Castanhão, CE",
        data: "2026-05-03",
        resumo: "Ação de monitoramento da qualidade da água no Açude Castanhão, maior reservatório do semiárido nordestino, realizada em parceria com o IFCE.",
        descricao: "Equipe do núcleo Ceará coletou amostras em 8 pontos distintos do Castanhão para análise de parâmetros físico-químicos e biológicos. Os resultados alimentarão o banco de dados do projeto e serão apresentados em audiência pública sobre a gestão hídrica do semiárido. A ação envolveu estudantes de Engenharia Ambiental do IFCE como parte de atividade de extensão.",
        imagem: "https://placehold.co/800x500/5b289e/f5f2fa?text=Coleta+Ceará",
        galeria: [
            "https://placehold.co/640x420/5b289e/f5f2fa?text=Coleta+CE+1",
            "https://placehold.co/640x420/8f73b2/f5f2fa?text=Coleta+CE+2"
        ]
    },
    {
        id: "recuperacao-manguezais-recife",
        titulo: "Plantio em Manguezal Urbano",
        nucleo: "Pernambuco",
        local: "Manguezal do Pina, Recife – PE",
        data: "2026-04-05",
        resumo: "Guardiãs e parceiros da UFPE realizaram plantio de mudas de mangue em área degradada do Manguezal do Pina, restaurando habitat essencial para a fauna costeira.",
        descricao: "A ação de reflorestamento do manguezal reuniu 30 voluntários e resultou no plantio de 200 mudas de mangue-vermelho em área que havia sido impactada por resíduos industriais. Além do plantio, a atividade incluiu coleta de lixo e levantamento fotográfico para monitoramento da recuperação ao longo dos próximos meses.",
        imagem: "https://placehold.co/800x500/5b289e/f5f2fa?text=Plantio+Manguezal",
        galeria: [
            "https://placehold.co/640x420/5b289e/f5f2fa?text=Manguezal+1",
            "https://placehold.co/640x420/8f73b2/f5f2fa?text=Manguezal+2",
            "https://placehold.co/640x420/91b0d4/2b1150?text=Manguezal+3"
        ]
    },
    {
        id: "monitoramento-participativo-sergipe",
        titulo: "Monitoramento Participativo de Rios",
        nucleo: "Sergipe",
        local: "Rio Sergipe – margem urbana, Aracaju – SE",
        data: "2026-03-20",
        resumo: "Estudantes da rede pública atuaram como agentes de monitoramento da qualidade da água do Rio Sergipe sob orientação das guardiãs e da UFS.",
        descricao: "O programa de monitoramento participativo capacitou 25 estudantes do ensino médio para coletar dados básicos de qualidade da água — pH, temperatura e turbidez — usando kits portáteis. Os jovens tornaram-se multiplicadores do projeto em suas escolas, e os dados coletados foram incorporados ao painel de monitoramento digital do núcleo.",
        imagem: "https://placehold.co/800x500/5b289e/f5f2fa?text=Monitoramento+SE",
        galeria: [
            "https://placehold.co/640x420/5b289e/f5f2fa?text=Monitor.+SE+1",
            "https://placehold.co/640x420/8f73b2/f5f2fa?text=Monitor.+SE+2"
        ]
    },
    {
        id: "protecao-nascentes-pantanal",
        titulo: "Proteção de Nascentes do Pantanal",
        nucleo: "Mato Grosso",
        local: "Área de Proteção Ambiental – Chapada dos Guimarães, MT",
        data: "2026-05-18",
        resumo: "Expedição de mapeamento e cercamento de nascentes na região da Chapada dos Guimarães, em parceria com comunidades ribeirinhas e a UFMT.",
        descricao: "A expedição de dois dias percorreu trilhas da Chapada dos Guimarães identificando e cadastrando nascentes sob risco de degradação. Foram instaladas cercas protetoras em 5 nascentes e coletadas amostras de água para análise. A ação envolveu lideranças de comunidades ribeirinhas que atuaram como guias e co-responsáveis pela continuidade do monitoramento.",
        imagem: "https://placehold.co/800x500/5b289e/f5f2fa?text=Nascentes+Pantanal",
        galeria: [
            "https://placehold.co/640x420/5b289e/f5f2fa?text=Pantanal+1",
            "https://placehold.co/640x420/8f73b2/f5f2fa?text=Pantanal+2",
            "https://placehold.co/640x420/91b0d4/2b1150?text=Pantanal+3"
        ]
    },
    {
        id: "educacao-pescadores-rs",
        titulo: "Educação Ambiental com Pescadores",
        nucleo: "Rio Grande do Sul",
        local: "Lagoa dos Patos – comunidade de pescadores, Rio Grande – RS",
        data: "2026-04-14",
        resumo: "Roda de conversa e oficina de boas práticas ambientais com pescadores artesanais da Lagoa dos Patos, conectando saberes tradicionais à ciência.",
        descricao: "O evento reuniu cerca de 35 pescadores artesanais para uma troca de saberes mediada pelas guardiãs e pesquisadores da FURG. Os pescadores compartilharam observações sobre mudanças no estuário ao longo das décadas, enquanto a equipe apresentou dados científicos de monitoramento. O resultado foi um protocolo de observação participativa a ser aplicado durante as pescarias.",
        imagem: "https://placehold.co/800x500/5b289e/f5f2fa?text=Pescadores+RS",
        galeria: [
            "https://placehold.co/640x420/5b289e/f5f2fa?text=Pescadores+1",
            "https://placehold.co/640x420/8f73b2/f5f2fa?text=Pescadores+2"
        ]
    },
    {
        id: "formacao-guardias-uberlandia",
        titulo: "Formação de Novas Guardiãs",
        nucleo: "Uberlândia",
        local: "Sede do Projeto – UFU, Uberlândia – MG",
        data: "2026-06-07",
        resumo: "Encontro de formação e integração de novas guardiãs ao projeto, com módulos sobre monitoramento hídrico, comunicação e liderança feminina.",
        descricao: "O processo de formação reuniu 18 novas guardiãs de Uberlândia e região para dois dias de imersão. A programação incluiu módulos teóricos sobre qualidade da água e bacias hidrográficas, atividades práticas de coleta e análise, e um painel com guardiãs veteranas sobre trajetórias de liderança. As participantes receberam kits de monitoramento e passaram a integrar oficialmente o núcleo.",
        imagem: "https://placehold.co/800x500/5b289e/f5f2fa?text=Formação+Guardiãs",
        galeria: [
            "https://placehold.co/640x420/5b289e/f5f2fa?text=Formação+1",
            "https://placehold.co/640x420/8f73b2/f5f2fa?text=Formação+2",
            "https://placehold.co/640x420/91b0d4/2b1150?text=Formação+3"
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