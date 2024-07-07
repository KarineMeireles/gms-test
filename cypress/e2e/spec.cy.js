/// <reference types="cypress"/>

describe('US-012-Funcionalidade: Cadastro de membros', () => {
  it('Deve fazer o cadastro de campos obrigatórios', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#signup-firstname').type('Karine')
    cy.get('#signup-lastname').type('Antonio')
    cy.get('#signup-email').type('karinelam@teste.com')
    cy.get('#signup-phone').type('11925256699')
    cy.get('#signup-password').type('Kla12345!')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should("contain" , "Cadastro realizado com sucesso!")

  });
})

  it("Deve validar mensagem e erro no campo Nome não pode estar vazio", () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#signup-lastname').type('Antonio')
    cy.get('#signup-email').type('karinelam@teste.com')
    cy.get('#signup-phone').type('11925256699')
    cy.get('#signup-password').type('Kla12345!')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should("contain" , "Nome não pode estar vazio")
});



it("Deve validar mensagem e erro E-mail deve ser um email válido", () => {
  cy.visit('http://127.0.0.1:8080/')
    cy.get('#signup-firstname').type('Karine')
    cy.get('#signup-lastname').type('Antonio')
    cy.get('#signup-email').type('karinelam')
    cy.get('#signup-phone').type('11925256699')
    cy.get('#signup-password').type('Kla12345!')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should("contain" , "E-mail deve ser um email válido")
});



it("Deve validar mensagem e erro no campo Sobrenome não pode estar vazio", () => {
  cy.visit('http://127.0.0.1:8080/')
  cy.get('#signup-firstname').type('Karine')
  cy.get('#signup-email').type('karinelam@teste.com')
  cy.get('#signup-phone').type('11925256699')
  cy.get('#signup-password').type('Kla12345!')
  cy.get('#signup-button').click()
  cy.get('#signup-response').should("contain" , "Sobrenome não pode estar vazio")
});



it('Deve validar a mensagem de caracteres minimos para senha segura', () => {
  cy.visit('http://127.0.0.1:8080/')
  cy.get('#signup-firstname').type('Karine')
  cy.get('#signup-lastname').type('Antonio')
  cy.get('#signup-email').type('karinelm@teste.com')
  cy.get('#signup-phone').type('11925256699')
  cy.get('#signup-password').type('12345')
  cy.get('#signup-button').click()
  cy.get('#signup-response').should("contain" , "Senha deve ter pelo menos 8 caracteres, incluir uma letra maiúscula, um número e um caractere especial (!@#$&*)")

});



it('Deve validar a mensagem e erro Senha não pode estar vazia', () => {
  cy.visit('http://127.0.0.1:8080/')
  cy.get('#signup-firstname').type('Karine')
  cy.get('#signup-lastname').type('Antonio')
  cy.get('#signup-email').type('karinelm@teste.com')
  cy.get('#signup-phone').type('11925256699')
  cy.get('#signup-button').click()
  cy.get('#signup-response').should("contain" , "Senha não pode estar vazia")

});



it("Deve validar mensagem e erro Este email já está cadastrado.", () => {
  cy.visit('http://127.0.0.1:8080/')
    cy.get('#signup-firstname').type('Karine')
    cy.get('#signup-lastname').type('Antonio')
    cy.get('#signup-email').type('karinelam@teste.com')
    cy.get('#signup-phone').type('11925256699')
    cy.get('#signup-password').type('Kla12345!')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should("contain" , "Este email já está cadastrado.")
});




it("Deve validar mensagem e erro Este E-mail não pode estar vazio", () => {
  cy.visit('http://127.0.0.1:8080/')
    cy.get('#signup-firstname').type('Karine')
    cy.get('#signup-lastname').type('Antonio')
    cy.get('#signup-phone').type('11925256699')
    cy.get('#signup-password').type('Kla12345!')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should("contain" , "E-mail não pode estar vazio")
});




describe('US-001-Funcionalidade: Busca de filmes', () => {
  it('Busca de filmes com palavra-chave válida', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#search-input').type("The godfather")
    cy.get('#search-button').click()
    cy.get('#results-section').should("contain", "Relação de filmes correspondentes são exibidos")

  });
})




it('Busca de filmes sem resultados', () => {
  cy.visit('http://127.0.0.1:8080/')
  cy.get('#search-input').type("///")
  cy.get('#search-button').click()
  cy.get('#results-section').should("contain", "Filme não encontrado")

});



