### Contexto

Uma agência teve uma idéia de ATM que enviará o dinheiro para a casa dos seus cliente, para isso algumas regras precisaram ser criadas para reduzir certos custos e a idéia de pacotes foi elaborada.

Esta agência precisa de uma interface gráfica para que seus clientes possam se cadastrar e operar seus pedidos.

## OBSERVAÇÕES PARA RODAR O PROGRAMA:
- 1º - O programa está na BRANCH MASTER
- 2º - yarn dev para rodar o SERVER
- 3º - yarn start para rodar o CLIENT
- 4º - yarn prisma studio para ver todas as tabelas do DB

### O QUE ACHEI DO DESAFIO?
- Foi um desafio muito completo para mim, porém eu encarei como uma chance de mostrar o que eu sei e também de melhorar a mim mesmo. Foi muito compensador.

#### BACKEND
A parte do BACKEND foi relativamente fácil comparado com o FRONTEND. Terminei esta parte em um tempo que considero ideal. Completei todos os desafios desta etapa.

#### FRONTEND
A parte do FRONTEND foi mais difícil, pois não estou acostumado em usar o typescript com React e deu um pouco de trabalho com o ContextAPI e as tipagens. Não completei esta fase por inteiro. Tem muita coisa ainda por fazer, incluído desenvolver uma arquitetura mais robusta e de fácil manutenção.

#### BANCO DE DADOS
Fiz em SQLITE. Não precisa de nenhuma plataforma para rodá-lo. Somente escrever no terminal 'yarn prisma studio'.

#### Segue abaixo o que eu completei do desafio:

### Pacotes
COMPLETEI - Cada pacote tem um limite de notas que pode carregar (50 notas)
COMPLETEI - Cada pacote pode conter apenas um tipo de nota (10 - 50 - 100)
COMPLETEI A PARTE DO BACKEND - Cada pacote contem informação das operações estão nele
COMPLETEI - Quando esse pacote foi aberto
COMPLETEI - Quando ele foi fechado
COMPLETEI - É criado um pacote aberto toda vez que um pacote alcança seu limite.
COMPLETEI  - Um pacote é considerado fechado uma vez que ele atinja o seu limite.
COMPLETEI - A leitura e listagem dos pacotes deve ser protegida por autenticação.

### Operação
COMPLETEI - Toda operação possui um cliente
COMPLETEI - Toda operação possui um valor
COMPLETEI - Toda operação tem valor limite de 5000
COMPLETEI - Uma operação pode possuir preferencia de notas (10 -50 - 100)
COMPLETEI - Caso uma operação seja grande demais para entrar em qualquer pacote ela deve ser subdivida em operações menores que referencie a maior.
COMPLETEI - Uma operação está aberta quando é criada.
COMPLETEI - Uma operação está reservada quando é alocada a um pacote.
COMPLETEI - Uma operação está concluída quando o pacote é fechado.
COMPLETEI - Deve ser possível criar, ler e listar operações.

### Cliente
COMPLETEI - Todo cliente possui nome, endereço, data de nascimento e cpf
COMPLETEI - Deve ser possível criar, ler, atualizar e deletar um cliente.

## Resumo de páginas

COMPLETEI - Uma page de login.
COMPLETEI - Uma page de cadastro de cliente.
COMPLETEI - Uma page de atualização e remoção de cliente.
COMPLETEI - Uma page de inserção de operação.
COMPLETEI - Uma page de listagem de operações deste cliente.
COMPLETEI - Uma page de listagem de pacotes.