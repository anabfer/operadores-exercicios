//Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo true ou false:
//O primeiro numero é maior que o segundo? true
//O primeiro numero é igual ao segundo? false
//O primeiro numero é divisível pelo segundo? true
//O segundo numero é divisível pelo primeiro? true
//divisível = com resto zero

let numero1 = Number (prompt("Digite um número:"))
console.log(numero1)

let numero2 = Number (prompt("Digite outro número:"))
console.log(numero2)

console.log("O primeiro número é maior que o segundo?", numero1 > numero2)

console.log("O primeiro número é igual ao segundo?" , numero1 === numero2)

console.log("O primeiro numero é divisível pelo segundo?", numero1 % numero2 >= 0)

console.log("O segundo número é divisível pelo primeiro?", numero2 % numero1 >= 0)