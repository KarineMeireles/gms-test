/// <reference types="cypress"/>

describe('US-012-Funcionalidade: Cadastro de membros', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  afterEach(() => {
    cy.screenshot()
 });


 
  it('Deve fazer o cadastro de campos obrigatórios', () => {
    var email = `karine${Date.now()}@teste.com`
  cy.preencherCadastro('Karine' , 'Lima' , email , '11925256042' , 'Teste@25896')
    cy.get('#signup-response').should('contain' , 'Cadastro realizado com sucesso!')
  });


  it('Deve validar mensagem de erro com o campo nome inválido', () => {
    cy.preencherCadastro('Karine10' , 'Lima' , 'karine123@teste.com' , '11925256042' , 'Teste@25896')
    cy.get('#signup-response').should('contain' , 'Nome deve conter apenas caracteres alfabéticos, acentuados e espaços')
  });


  

  it('Deve validar mensagem e erro E-mail deve ser um email válido', () => {
    cy.preencherCadastro('Karine' , 'Lima' , 'antonio.com' , '11925256042' , 'Teste@25896')
    cy.get('#signup-response').should('contain' , 'E-mail deve ser um email válido')
  });



  it('Deve validar a mensagem de caracteres minimos para senha segura', () => {
    var email = `karine${Date.now()}@teste.com`
    cy.preencherCadastro('Karine' , 'Lima' , email , '11925256042' , '5896')
    cy.get('#signup-response').should('contain' , 'Senha deve ter pelo menos 8 caracteres, incluir uma letra maiúscula, um número e um caractere especial (!@#$&*)')
  });



  it('Deve validar mensagem e erro Este email já está cadastrado.', () => {
    cy.preencherCadastro('Karine' , 'Lima' , "karine123@teste.com" , '11925256042' , '@Tau5896')
    cy.get('#signup-response').should('contain' , 'Este email já está cadastrado.')
  });



  it('Deve validar mensagem e erro no campo Nome não pode estar vazio', () => {
    var email = `karine${Date.now()}@teste.com`
    cy.preencherCadastro( '' , 'Lima' , email , '11925256042' , 'Teste@25896')
    cy.get('#signup-response').should('contain' , 'Nome não pode estar vazio')
  });


  it('Deve validar mensagem e erro no campo Sobrenome não pode estar vazio', () => {
    var email = `karine${Date.now()}@teste.com`
    cy.preencherCadastro( 'Karine' , '' , email , '11925256042' , 'Teste@25896')
    cy.get('#signup-response').should('contain' , 'Sobrenome não pode estar vazio')
  });


  it('Deve validar a mensagem e erro Senha não pode estar vazia', () => {
    var email = `karine${Date.now()}@teste.com`
    cy.preencherCadastro( 'Karine' , 'Antonio' , email , '11925256042' , '')
    cy.get('#signup-response').should('contain' , 'Senha não pode estar vazia')
  });


  it('Deve validar mensagem e erro Este E-mail não pode estar vazio', () => {
    var email = `karine${Date.now()}@teste.com`
    cy.preencherCadastro( 'Karine' , 'Antonio' , "" , '11925256042' , '!Tag45678')
    cy.get('#signup-response').should('contain' , 'E-mail não pode estar vazio')
  });

})















