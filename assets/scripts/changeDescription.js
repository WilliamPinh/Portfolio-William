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
        if(nameCard === '.php') {
            cardName.innerHTML = ' PHP '
        } 
        if(nameCard === '.responsive') {
            cardName.innerHTML = ' Responsividade '
        } 
        if(nameCard === '.accessibility') {
            cardName.innerHTML = ' Acessibilidade '
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
    '.php',
    'Desenvolvimento de estruturas de controle, como loops e condicionais, manipular arrays e dicionários, e desenvolver funções para automatizar processos simples.'
)

changeDescription(
    '.cplus',
    'Desenvolvimento de manipulação de dados, como acessar elementos de arrays e vetores, criar estruturas de dados simples e implementar algoritmos de busca e ordenação.'   
)

changeDescription(
    '.accessibility',
    'Boas práticas, como: elementos semânticos, descrição de imagens, níveis de títulos, botões e links.'   
)
