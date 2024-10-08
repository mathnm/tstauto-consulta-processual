import PaginaInicial from "./PageObjects/PaginaInicial"

describe('Consulta de Processos no JusBrasil', () => {

  const paginaInicial = new PaginaInicial()


  beforeEach(() => {
    cy.viewport(1920, 1080)
    cy.visit('https://www.jusbrasil.com.br/consulta-processual/')
    paginaInicial.headerPgInicial()

  })


  it('Consulta de CPF inválido', () => {
    //Neste caso não foi possível utilizar o ID do elemento, pois o mesmo contém ':', impossibilitando seu uso
    paginaInicial.pesquisa('12345678900')
    paginaInicial.msgConsultaInvalida()
  })

  it('Consulta de CPF válido', () => {
    paginaInicial.pesquisa('06709332950')
    //Neste ponto, com o CPF válido, é esperado um bloqueio por parte do site
    //por se tratar de acesso através de uma ferramenta de automação
    paginaInicial.msgBloqueio()
  })

  it('Consulta de nome válido', () => {
    paginaInicial.pesquisa('João da Silva')
    //Neste ponto, com o nome válido, é esperado um bloqueio por parte do site
    //por se tratar de acesso através de uma ferramenta de automação
    paginaInicial.msgBloqueio()
  })

  it('Exibir detalhes de um processo', () => {
    paginaInicial.pesquisa('João da Silva')
    //Neste ponto, com o CPF ou nome válido, é esperado um bloqueio por parte do site
    //por se tratar de acesso através de uma ferramenta de automação

    //Não foi possível dar continuidade a este cenário por conta do bloqueio.
  })


})