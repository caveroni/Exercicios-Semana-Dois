// Escreva um programa que pergunte a quantidade de km percorridos por um carro alugado pelo usuário, 
//assim como a quantidade de dias pelos quais o carro foi alugado. Calcule o preço a pagar, 
//sabendo que o carro custa 60,00 reais por dia e 0,15 centavos por km rodado.

let percorrido = 5
let dias = 20
let pagar = (dias * 60.00) + (percorrido * 0.15)

console.log("Preço a pagar: R$ " + pagar)