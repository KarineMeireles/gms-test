/// <reference types="cypress"/>

describe('US-012-Funcionalidade: Cadastro de membros', () => {
  it('Deve fazer o cadastro de campos obrigatórios', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#signup-firstname').type('Karine')
    cy.get('#signup-lastname').type('Antonio')
    cy.get('#signup-email').type('karinelaa@teste.com')
    cy.get('#signup-phone').type('11925256699')
    cy.get('#signup-password').type('Kla12345!')
    cy.get('#signup-button').click()
  })
})