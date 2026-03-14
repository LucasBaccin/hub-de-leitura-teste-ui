/// <reference types="cypress"/>

import { faker } from '@faker-js/faker';

describe('Funcionalidade: Cadastro no Hub de Leitura', () => {


    it('Deve fazer cadastro com sucesso, usando função', () => {
        let email = `teste${Date.now()}@teste.com`
        cy.visit("http://localhost:3000/register.html")
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
        cy.visit("http://localhost:3000/register.html")
        cy.get('#name').type('Lucas Baccin')
        cy.get('#email').type(email)
        cy.get('#phone').type('123456789')
        cy.get('#password').type('Teste@123')
        cy.get('#confirm-password').type('Teste@123')
        cy.get('#terms-agreement').check()
        cy.get('#register-btn').click()
        cy.url().should('include', 'dashboard')
    });
});