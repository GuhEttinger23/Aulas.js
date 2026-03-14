////forEach
// let arrayTeste = [1,2,3,4,5]

// arrayTeste.forEach((valor , index) => {
//     console.log(index, valor);
// })

//// atividade 1

// let arrayTeste = [-3,-2,-1,0,1,2,3,4]
// arrayTeste.forEach((valor, index) => {
//     if(valor<0){
//         console.log(`Negativo ${valor}`);
//     }
//     else if(index>0){
//         console.log(`Positivo ${valor}`);
//     }
//     else{
//         console.log(`zero ${valor}`);
//     }

// })

////MAP

// let arrayTeste = [1,2,3,4,5]

// let newArray = arrayTeste.map((Number) => {
//     return Number * 2
// })
// console.log(newArray)


//// atividade 2
// let arrayTeste = [1,2,3,4,5]

// let newArray = arrayTeste.map((Number) => {
//     return Number * Number
// })
// console.log(newArray)

// let nome = ["Joao", "Gustavo", "Emanuel", "Emilly"]

// let newArray = nome.map((nome) => {
//     return nome.charAt(0).toUpperCase() + nome.slice(1);
// })
// console.log(newArray)

//// filtrer
// let arrayTeste = [1,2,3,4,5,6,7,8,9,10,11,12]

// let newArray = arrayTeste.filter((number) =>{
//     return number % 2 == 0;
// })
// console.log(newArray)

//// reduce
// l
// sun = arrayTeste.reduce((accumulator, currentvalue) => {
//     return accumulator += currentvalue
// })
// console.log(sun)

//// some

// let arrayTeste = [1,2,3,4,5,6,7,8,9,10,11,12]
// let value = arrayTeste.some((number) => {
//     return number % 2 == 0;
// })
// console.log(value)

//// atividade 3
let nomes = ["Joao", "Gustavo", "Emanuel", "Emilly"];
let vogais = "aeiouAEIOU";
let quantidade = 0;

nomes.forEach(nome => {
  for (let letra of nome) {
    if (vogais.includes(letra)) {
      quantidade++;
    }
  }
});

console.log(quantidade);