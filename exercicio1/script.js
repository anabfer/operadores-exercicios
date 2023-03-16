//Exercício 1 -Construa um programa que:
//a) Peça ao usuário que insira um número par
//b) Imprima no console o resto da divisão desse número por 2.
//c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
//d) O que acontece no console se o usuário inserir um número ímpar? Escreva em um comentário de código.

const numero = Number (prompt("Insira um número par"))
console.log("Número par:" , numero)

console.log("O resto da divisão desse número por 2:", numero % 2)

// O padrão de resposta é sempre zero quando testado com números pares.

// Quando o usuário inserir um número impar, o resultado do resto da divisão será 1.