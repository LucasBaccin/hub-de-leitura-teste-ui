/// <reference types="cypress"/>

import catalogo from "../fixtures/livros.json"

describe('Funcionalidade: Busca no catálogo', () => {

    beforeEach(() => {
        cy.visit('catalogo.html')
    });

    it('Deve fazer a busca do livro 1984 com sucesso', () => {
        cy.get('.d-grid > [href="/catalog.html"]').click()
        cy.get('#search-input').type('1984')
        cy.get('.card-title > .text-dark').should('contain', '1984')
    })

    it('Deve fazer a busca de um livro do arquivo de massa de dados', () => {
        cy.get('.d-grid > [href="/catalog.html"]').click()
        cy.get('#search-input').type(catalogo[7].livro)
        cy.get('.card-title > .text-dark').should('contain', catalogo[7].livro)
    })

});