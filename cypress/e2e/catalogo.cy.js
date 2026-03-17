/// <reference types="cypress"/>

import { Faker } from "@faker-js/faker";

describe('Funcionalidade: catalogo de livros', () => {

});

it('Deve clicar no botão Adicionar à cesta', () => {
    cy.visit("http://localhost:3000/catalog.html")
    cy.get(':nth-child(1) > .card > .card-body > .mt-auto > .d-grid > .btn-primary').click()
    cy.get('#cart-count').should('contain', 1)
});

it('Deve clicar em todos os botões Adicionar à cesta', () => {
    cy.visit("http://localhost:3000/catalog.html")
    cy.get('.btn-primary').click({ multiple: true })
    cy.get('#cart-count').should('contain', 12)
})

it('Deve clicar no primeiro botão Adicionar à cesta', () => {
    cy.visit("http://localhost:3000/catalog.html")
    cy.get('.btn-primary').first().click()
    cy.get('#cart-count').should('contain', 1)
})

it('Deve clicar no último botão Adicionar à cesta', () => {
    cy.visit("http://localhost:3000/catalog.html")
    cy.get('.btn-primary').last().click()
    cy.get('#cart-count').should('contain', 1)
})

it('Deve clicar no sexto botão Adicionar à cesta', () => {
    cy.visit("http://localhost:3000/catalog.html")
    cy.get('.btn-primary').eq(7).click()
    cy.get('#cart-count').should('contain', 1)
    cy.get('#global-alert-container').should('contain', 'Dom Casmurro')
});

it.only('Deve clicar no livro Dom Quixote e Adicionar à cesta', () => {
    cy.visit("http://localhost:3000/catalog.html")
    cy.get(':nth-child(9) > .card > .card-body > .card-title > .text-dark').click()
    cy.get('#add-to-cart-btn').click()
    cy.get('#cart-count').should('contain', 1)
    cy.get('#alert-container').should('contain', 'Livro adicionado à cesta com sucesso!')

});