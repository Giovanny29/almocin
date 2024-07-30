Feature: Página de redefinição de senha
  Como um usuário
  Quero redefinir minha senha
  Para que eu possa acessar minha conta novamente

  Background:
    Given eu estou na página de redefinição de senha

  Scenario: Navegar para a página de login a partir da página de redefinição de senha
    When eu clico no link de redefinição de senha "Lembrei a senha? Voltar para o login"
    Then eu sou redirecionado para a página de login "Página de login"

  Scenario: Navegar para a página de cadastro a partir da página de redefinição de senha
    When eu clico no link de redefinição de senha "Não tem uma conta? Cadastre-se"
    Then eu sou redirecionado para a página de cadastro "Página de cadastro"
