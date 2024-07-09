/// <reference types="cypress"/>

describe('US-001-Funcionalidade: Busca de filmes', () => {
   beforeEach(() => {
    cy.visit('/')
   });

   afterEach(() => {
      cy.screenshot()
   });

   it('Deve buscar filmes com sucesso', () => {
    cy.get('#search-input').type('The godfather')
    cy.get('#search-button').click()
    cy.get('#results-section').should('contain' , 'The Godfather')
   });

   it('Deve buscar filmes com sucesso de uma lista', () => {
    cy.fixture('filmes').then((filmes) =>{
    cy.get('#search-input').type(filmes[6].titulo)
    cy.get('#search-button').click()
    cy.get('#results-section').should('contain' , filmes[6].titulo)     
    })
   });

   it('Busca de filme sem resultado', () => {
    cy.fixture('filmes').then((filmes) =>{
    cy.get('#search-input').type(filmes[1].titulo)
    cy.get('#search-button').click()
    cy.get('#results-section').should('contain' , 'Filme não encontrado.')     
    })
   });
   
   it('Limpar a busca de filmes', () => {
    cy.fixture('filmes').then((filmes) =>{
    cy.get('#search-input').type(filmes[3].titulo)
    cy.get('#search-button').click()
    cy.get('#results-section').should('contain' , filmes[3].titulo)
    cy.get('#clear-button').click()
    cy.get('#results-section').clear
    })
   });
    
});