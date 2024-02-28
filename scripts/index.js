let nome = prompt('Digite seu nome');
alert('Olá ' + nome + ', vamos calcular seu índice de massa corporal?');

let peso = parseFloat(prompt('Digite seu peso (em kg)'));
let altura = parseFloat(prompt('Digite sua altura (em metros)'));

// Calculando o IMC
let imc = peso / (altura * altura);

alert('Seu IMC é: ' + imc);

console.log("IMC:", imc);
