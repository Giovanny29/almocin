import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

type PageName = 'Página de login' | 'Página de cadastro' | 'Página de redefinição de senha';

const pageMapping: { [key in PageName]: string } = {
  'Página de login': '/login',
  'Página de redefinição de senha': '/forgot-password',
  'Página de cadastro': '/cadastro',
};

Given("eu estou na página de redefinição de senha", () => {
  cy.visit(pageMapping['Página de redefinição de senha']);
});

When("eu clico no link de redefinição de senha {string}", (link: string) => {
  cy.contains('a', link).click();
});

Then("eu sou redirecionado para a página de login {string}", (pagina: PageName) => {
  cy.url().should('include', pageMapping[pagina]);
});

Then("eu sou redirecionado para a página de cadastro {string}", (pagina: PageName) => {
  cy.url().should('include', pageMapping[pagina]);
});
