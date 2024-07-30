Feature: Página de login
  Como um usuário
  Quero fazer login na minha conta
  Para que eu possa acessar minhas informações e funcionalidades exclusivas

  Background:
    Given eu estou na "Página de login"

  Scenario: Redefinir senha
    When eu clico no link "Esqueceu a senha?"
    Then eu sou redirecionado para a "Página de redefinição de senha"

  Scenario: Navegar para a página de cadastro
    When eu clico no link "Não tem uma conta? Cadastre-se"
    Then eu sou redirecionado para a "Página de cadastro"

  Scenario: Digitar uma senha válida e um email inválido
    When eu preencho o campo "Email" com "email_invalido"
    And eu preencho o campo "Senha" com "senha123"
    And eu clico no botão "Entrar"
    Then eu vejo a mensagem de erro "Formato de email inválido"

  Scenario: Digitar um email válido e uma senha com menos de 6 dígitos
    When eu preencho o campo "Email" com "usuario@exemplo.com"
    And eu preencho o campo "Senha" com "123"
    And eu clico no botão "Entrar"
    Then eu vejo a mensagem de erro "A senha deve ter no mínimo 6 caracteres"
