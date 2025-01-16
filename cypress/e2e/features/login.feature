Feature: Login
Login para acesso o AP

Scenario: Login com sucesso

Given que eu queira acessar o sistema
When eu inserir meu login e senha
And clicar no botão entrar
Then tenho acesso realizado com sucesso

Scenario Outline: Login com sucesso

Given que eu queira acessar o sistema
When eu inserir meu login "<login>" e senha "<senha>"
And clicar no botão entrar
Then tenho acesso "<mensagem>"

Examples:
|login|senha|mensagem|
|danilo|123|login com sucesso|
|amanda|0987|login com senha incorreta|