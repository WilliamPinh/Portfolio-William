// Mudar a Descrição

const changeDescription = (nameCard, text) => {
    let infoSkills = document.querySelector('#info-skills')
    let cardName = document.querySelector('.card-name')

    document.querySelector(nameCard).addEventListener('mouseover', () => {
        infoSkills.innerHTML = text
        if(nameCard === '.html') {
            cardName.innerHTML = ' Html '
        } 
        if(nameCard === '.css') {
            cardName.innerHTML = ' Css '
        }
        if(nameCard === '.js') {
            cardName.innerHTML = ' JavaScript '
        }
        if(nameCard === '.java') {
            cardName.innerHTML = ' Java '
        }
        if(nameCard === '.cplus') {
            cardName.innerHTML = ' C++ '
        }
        if(nameCard === '.sql') {
            cardName.innerHTML = ' SQL '
        }
        if(nameCard === '.python') {
            cardName.innerHTML = ' Python '
        }
        if(nameCard === '.php') {
            cardName.innerHTML = ' PHP '
        }
        if(nameCard === '.accessibility') {
            cardName.innerHTML = ' Acessibilidade '
        }
        if(nameCard === '.power-bi') {
            cardName.innerHTML = ' Power BI '
        } 
        if(nameCard === '.excel') {
            cardName.innerHTML = ' Excel '
        }
        if(nameCard === '.figma') {
            cardName.innerHTML = ' Figma '
        }
    })

    document.querySelector(nameCard).addEventListener('mouseout', () => {
        infoSkills.innerHTML = '* passe o cursor sobre os ícones para saber mais *'
        cardName.innerHTML = ""
    })
}

changeDescription(
    '.html',
    'Estrutura de layouts, principais tags, HTML Semântico, criação de tabelas e formulários.'
)

changeDescription(
    '.css',
    'Estilização de layouts, reutilização de classes, box model, CSS Grid, FlexBox e pseudo-classes.'
)

changeDescription(
    '.js',
    'Manipulação de DOM, consumo de API, tipos de dados, métodos, funções e eventos.'
)

changeDescription(
    '.java',
    'Desenvolvimento de aplicações com foco em lógica de programação, utilizando estruturas de controle, manipulação de arrays e coleções, criação de classes e objetos, e implementação de algoritmos básicos como busca e ordenação.'
)

changeDescription(
    '.cplus',
    'Desenvolvimento de manipulação de dados, como acessar elementos de arrays e vetores, criar estruturas de dados simples e implementar algoritmos de busca e ordenação.'   
)

changeDescription(
    '.sql',
    'Criações de modelos Conceituais e Lógicas de banco de dados, Suporte a Gestão e Códigos em SQL'   
)

changeDescription(
    '.python',
    'Criação de pequenos projetos, como calculadoras e ferramentas simples, aplicando lógica de programação, operações matemáticas, controle de fluxo e manipulação básica de variáveis e funções.'   
)

changeDescription(
    '.php',
    'Desenvolvimento de estruturas de controle, como loops e condicionais, manipular arrays e dicionários, e desenvolver funções para automatizar processos bem simples.'
)

changeDescription(
    '.accessibility',
    'Boas práticas, como: elementos semânticos, descrição de imagens, níveis de títulos, botões e links.'   
)

changeDescription(
    '.power-bi',
    'Criação de gráficos simples e análise de dados em relatórios visuais.'   
)

changeDescription(
    '.excel',
    'Criação de planilhas e uso de fórmulas para cálculos simples.'   
)

changeDescription(
    '.figma',
    'Criação de interfaces simples no Figma, com foco em design visual e usabilidade. Desenvolvimento de telas, aplicando princípios básicos de layout, tipografia e organização de componentes.'   
)
