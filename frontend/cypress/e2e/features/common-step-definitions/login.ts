import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// Mapeamento das páginas
const pageMapping: { [key: string]: string } = {
  'Página de login': '/login',
  'Página de redefinição de senha': '/forgot-password',
  'Página de cadastro': '/cadastro',
};

// Definição do passo para "eu estou na 'Página de login'"
Given('eu estou na {string}', (pagina: string) => {
  cy.visit(pageMapping[pagina]);
});

// Definição do passo para "eu clico no link {string}"
When('eu clico no link {string}', (linkText: string) => {
  cy.contains('a', linkText, { timeout: 10000 }).click();
});

// Definição do passo para "eu sou redirecionado para a {string}"
Then('eu sou redirecionado para a {string}', (pagina: string) => {
  cy.url().should('include', pageMapping[pagina]);
});

// Cenário: Digitar uma senha válida e um email inválido
When('eu preencho o campo "Email" com {string}', (email: string) => {
  cy.get('input[id="email"]').type(email);
});

When('eu preencho o campo "Senha" com {string}', (senha: string) => {
  cy.get('input[id="password"]').type(senha);
});

When('eu clico no botão "Entrar"', () => {
  cy.get('button[type="submit"]').click();
});

Then('eu vejo a mensagem de erro {string}', (errorMessage: string) => {
  cy.contains(errorMessage).should('be.visible');
});
