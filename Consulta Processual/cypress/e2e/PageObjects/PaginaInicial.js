export default class PaginaInicial{

    headerPgInicial(){
        cy.get('.home-title_container__Mk5BI > .col_root__bXuz5 > .heading_root__J_K7z').should('be.visible').contains('Consulta processual')
    }

    pesquisa(psCpfOuNome){
        cy.get('input[placeholder="Digite um CPF, nome ou número"]').click().type(psCpfOuNome+'{Enter}')
    }

    msgConsultaInvalida(){
        cy.get('[aria-live="polite"]').should('have.text', 'CPF inválido. Revise a numeração ou busque por um nome')
    }

    msgBloqueio(){
        cy.get('#JeXB4').should('have.text', 'Verificando se você é humano. Isso pode levar alguns segundos.')
    }



}