import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// Mapeamento das páginas
const pageMapping: { [key: string]: string } = {
  'Página de redefinição de senha': '/forgot-password',
  'Página de login': '/login',
  'Página de cadastro': '/cadastro',
};

// Definição do passo para "eu estou na página de cadastro"
Given('eu estou na página de cadastro', () => {
  cy.visit(pageMapping['Página de cadastro']);
});

// Definição do passo para "eu preencho o campo de cadastro {string} com {string}"
When('eu preencho o campo de cadastro {string} com {string}', (field: string, value: string) => {
  const fieldNameMapping: { [key: string]: string } = {
    'Nome completo': 'name',
    'Email': 'email',
    'Senha': 'password',
    'CEP': 'cep',
    'Nome do primeiro animal de estimação': 'petName',
    'Forma de pagamento': 'paymentMethod',
    'CPF': 'cpf'
  };
  cy.get(`input[name="${fieldNameMapping[field]}"]`).type(value);
});

// Definição do passo para "eu clico no botão de cadastro {string}"
When('eu clico no botão de cadastro {string}', (buttonText: string) => {
  cy.contains('button', buttonText).click();
});

// Definição do passo para "eu vejo a mensagem de erro de cadastro {string}"
Then('eu vejo a mensagem de erro de cadastro {string}', (errorMessage: string) => {
  cy.contains(errorMessage).should('be.visible');
});

// Definição do passo para "eu vejo uma mensagem de sucesso de cadastro {string}"
Then('eu vejo uma mensagem de sucesso de cadastro {string}', (successMessage: string) => {
  cy.contains(successMessage).should('be.visible');
});

// Definição do passo para "eu sou redirecionado para a página de login {string}"
Then('eu sou redirecionado para a página de login {string}', (pagina: string) => {
  cy.url().should('include', pageMapping[pagina]);
});
