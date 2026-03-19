/// <reference types="cypress"/>

import { faker } from '@faker-js/faker';

describe('Funcionalidade: Cadastro no Hub de Leitura', () => {

beforeEach(() => {
    cy.visit('register.html')
});
    it('Deve fazer cadastro com sucesso, usando função', () => {
        let email = `teste${Date.now()}@teste.com`
        cy.get('#name').type('Lucas Baccin')
        cy.get('#email').type(email)
        cy.get('#phone').type('123456789')
        cy.get('#password').type('Teste@123')
        cy.get('#confirm-password').type('Teste@123')
        cy.get('#terms-agreement').check()
        cy.get('#register-btn').click()
        cy.url().should('include', 'dashboard')
    });
    
      it('Deve fazer cadastro com sucesso, com faker', () => {
        let email = faker.internet.email()
        cy.get('#name').type('Lucas Baccin')
        cy.get('#email').type(email)
        cy.get('#phone').type('123456789')
        cy.get('#password').type('Teste@123')
        cy.get('#confirm-password').type('Teste@123')
        cy.get('#terms-agreement').check()
        cy.get('#register-btn').click()
        cy.url().should('include', 'dashboard')
    });

    it('Deve preencher cadastro com sucesso - Usando comando customizado', () => {
        let email = `teste${Date.now()}@teste.com`
        cy.preencherCadastro(
            'Lucas Baccin',
            email,
            '123456789',
            'Teste@123',
            'Teste@123'
        )
        cy.url().should('include', 'dashboard')
    })

});