import PaginaInicial from "./PageObjects/PaginaInicial"

describe('Consulta de Processos no JusBrasil', () => {

  const paginaInicial = new PaginaInicial()


  beforeEach(() => {
    cy.viewport(1920, 1080)
    cy.visit('https://www.jusbrasil.com.br/consulta-processual/')
    cy.get('.home-title_container__Mk5BI > .col_root__bXuz5 > .heading_root__J_K7z').should('be.visible').contains('Consulta processual')

  })


  it('Consulta de CPF inválido', () => {
    //Neste caso não foi possível utilizar o ID do elemento, pois o mesmo contém ':', impossibilitando seu uso
    cy.get('input[placeholder="Digite um CPF, nome ou número"]').click().type('12345678900{Enter}');
    cy.get('[aria-live="polite"]').should('have.text', 'CPF inválido. Revise a numeração ou busque por um nome');
  })

  it('Consulta de CPF válido', () => {
    cy.get('input[placeholder="Digite um CPF, nome ou número"]').click().type('06709332950{Enter}');
    //Neste ponto, com o CPF válido, é esperado um bloqueio por parte do site
    //por se tratar de acesso através de uma ferramenta de automação
    cy.get('#JeXB4').should('have.text', 'Verificando se você é humano. Isso pode levar alguns segundos.')
  })

  it('Consulta de nome válido', () => {
    cy.get('input[placeholder="Digite um CPF, nome ou número"]').click().type('João da Silva{Enter}');
    //Neste ponto, com o CPF válido, é esperado um bloqueio por parte do site
    //por se tratar de acesso através de uma ferramenta de automação
    cy.get('#JeXB4').should('have.text', 'Verificando se você é humano. Isso pode levar alguns segundos.')
  })

  it('Exibir detalhes de um processo', () => {
    cy.get('input[placeholder="Digite um CPF, nome ou número"]').click().type('João da Silva{Enter}');
    //Neste ponto, com o CPF válido, é esperado um bloqueio por parte do site
    //por se tratar de acesso através de uma ferramenta de automação
    cy.get('#JeXB4').should('have.text', 'Verificando se você é humano. Isso pode levar alguns segundos.')
  })


})