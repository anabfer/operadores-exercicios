const a = 5 > 20 && 5 < 2
console.log(a)

const b = 5 > 5 || 5 === "5"
console.log(b)

let c = !"vinte" > "cinquenta"
console.log(c)

const d = !"vinte" > "cinquenta" || "cinquenta" > "sessenta"
console.log(d)

console.log("Parte dois:")

let salario = 2000

let auxilioCreche = 45.50*2

console.log("Salário fixo:" , salario)

let janeiro = 5784.50
let fevereiro = 3418.41
let marco = 4124.10
let abril = 1874
let maio = 7000
let junho = 9450

let comissaoJaneiro = janeiro*0.1
let comissaoFev = fevereiro*0.1
let comissaoMarc = marco*0.1
let comissaoAbril = abril*0.1
let comissaoMaio = maio*0.1
let comissaoJunho = junho*0.1

//Calcule
//1.O salário fixo mais o auxílio creche:
console.log("Salário fixo mais o auxílio creche:" , salario + auxilioCreche)

//2. Quanto Fulano de Silva receberá de comissão em janeiro (dica: para calcular 20% de algum valor fazemos o cálculo: valor*0.2)
console.log("2. Comissão em janeiro:" , comissaoJaneiro)

// 3. Quanto Fulano de Silva será descontado em janeiro pelo INSS (o valor a ser calculado deve levar em consideração o salário + porcentagem de vendas)
let inss = 0.05
console.log("3. Desconto INSS:" , ((salario + comissaoJaneiro) *inss).toFixed(2))

//4. Imprima no console o cálculo do salário de todos os meses com acréscimos e descontos.
console.log("4. Cálculo do salário com acréscimos e descontos:")


let salJan = (salario + auxilioCreche + comissaoJaneiro) - (salario + comissaoJaneiro)*(inss)
let salFev = (salario + auxilioCreche + comissaoFev) - (salario + comissaoFev)*(inss)
let salMar = (salario + auxilioCreche + comissaoMarc) - (salario + comissaoMarc)*(inss)
let salAbr = (salario + auxilioCreche + comissaoAbril) - (salario + comissaoAbril)*(inss)
let salMai = (salario + auxilioCreche + comissaoMaio) - (salario + comissaoMaio)*(inss)
let salJun = (salario + auxilioCreche + comissaoJunho) - (salario +comissaoJunho)*(inss)

console.log("Salário de Janeiro:", salJan.toFixed(2))
console.log("Salário de Fevereiro:", salFev.toFixed(2))
console.log("Salário de Março:", salMar.toFixed(2))
console.log("Salário de Abril:", salAbr.toFixed(2))
console.log("Salário de Maio:", salMai.toFixed(2))
console.log("Salário de JUnho:", salJun.toFixed(2))

//5.A média do salário em  seis meses (de janeiro a junho), levando em consideração as comissões e auxílio. (Dica: a média aritmética é calculada somando um grupo de números e dividindo pela quantidade de elementos somados. Por exemplo, a soma de 2, 3, 3, 5, 7 e 10 é 30 dividido por 6, dará média 5.)

console.log("Média salárial de seis meses:", ((salJan+salFev+salMar+salAbr+salMai+salJun) /6).toFixed(2))