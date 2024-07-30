# register.feature

Feature: Cadastro de Usuário

  Como um usuário
  Eu quero me cadastrar na aplicação
  Para que eu possa acessar a aplicação com minha nova conta

  Scenario: Cadastro com todos os dados válidos
    Given eu estou na página de cadastro
    When eu preencho o campo de cadastro "Nome completo" com "João da Silva"
    And eu preencho o campo de cadastro "Email" com "joao.silva@example.com"
    And eu preencho o campo de cadastro "Senha" com "senhaSegura123"
    And eu preencho o campo de cadastro "CEP" com "12345-678"
    And eu preencho o campo de cadastro "Nome do primeiro animal de estimação" com "Rex"
    And eu preencho o campo de cadastro "Forma de pagamento" com "Cartão de Crédito"
    And eu preencho o campo de cadastro "CPF" com "123.456.789-00"
    And eu clico no botão de cadastro "Cadastrar"
    Then eu vejo uma mensagem de sucesso de cadastro "Cadastro realizado com sucesso!"
    And eu sou redirecionado para a página de login "Página de login"

  Scenario: Cadastro com email inválido
    Given eu estou na página de cadastro
    When eu preencho o campo de cadastro "Email" com "email_invalido"
    And eu clico no botão de cadastro "Cadastrar"
    Then eu vejo a mensagem de erro de cadastro "Formato de email inválido"

  Scenario: Cadastro com senha curta
    Given eu estou na página de cadastro
    When eu preencho o campo de cadastro "Senha" com "curta"
    And eu clico no botão de cadastro "Cadastrar"
    Then eu vejo a mensagem de erro de cadastro "Senha inválida. A senha deve ter no mínimo 6 caracteres."

  Scenario: Cadastro com CEP inválido
    Given eu estou na página de cadastro
    When eu preencho o campo de cadastro "CEP" com "00000000"
    And eu clico no botão de cadastro "Cadastrar"
    Then eu vejo a mensagem de erro de cadastro "Formato de CEP inválido"

  Scenario: Cadastro com CPF inválido
    Given eu estou na página de cadastro
    When eu preencho o campo de cadastro "CPF" com "12345678900"
    And eu clico no botão de cadastro "Cadastrar"
    Then eu vejo a mensagem de erro de cadastro "Formato de CPF inválido"
