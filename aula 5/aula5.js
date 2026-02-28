// Atividade 1

// let n = 10;
// for (let i = n; i >= 1; i--) {
//     let linha = "";

//     for (let j = 1; j <= i; j++) {
//         linha += j + " ";
//     }

//     console.log(linha);
// }

// Atividade 2
// let n = Number(prompt("Digite um número:"));

// let somaPares = 0;
// let somaImpares = 0;

// for (let i = 1; i <= n; i++) {

//     if (i % 2 === 0) {
//         somaPares += i;
//     } else {
//         somaImpares += i;
//     }

// }

// console.log("Soma dos pares:", somaPares);
// console.log("Soma dos ímpares:", somaImpares);

// Atividade 3

// let numero = Number(prompt("Digite um número de 3 algarismos:"));

// if (numero >= 100 && numero <= 999) {

//     let unidade = numero % 10;
//     let dezena = Math.floor(numero / 10) % 10;
//     let centena = Math.floor(numero / 100);

//     let invertido = unidade * 100 + dezena * 10 + centena;

//     console.log("Número invertido:", invertido);

// } else {
//     console.log("Por favor, digite um número de 3 algarismos.");
// }

// Atividade 4

// let valor = Number(prompt("Digite o valor do saque:"));
// let notas = [100, 50, 20, 10, 5, 2, 1];
// for (let i = 0; i < notas.length; i++) {
//     let quantidade = Math.floor(valor / notas[i]);
//     if (quantidade > 0) {
//         console.log(quantidade + " nota(s) de R$ " + notas[i]);
//         valor = valor % notas[i];
//     }
// }

// Atividde 5
// let valor = Number(prompt("Digite o valor da mercadoria:"));
// let prestacao = Math.floor(valor /3);
// let entrada = valor - (prestacao * 2);
// console.log("valor da mercadoria:", valor);
// console.log("valor da entrada:", entrada)
// console.log("valor da prestacao:", prestacao)