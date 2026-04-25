alert("Ola")
var numero = 1

while(numero < 5){
    console.log('Ola meu primeiro loop')
    numero ++;
}

let numero = 0
Metodo DoWhile
do {
    console.log(numero)
    numero++
} while(numero <= 3)

// ATIVIDADE 3

let numero
do{
    numero =  Number(prompt("Digite um numero:  "))
   console.log(numero)
}while(numero >= 0)

let numero = 8
while (true){
     tentaiva =  Number(prompt("Digite um numero de 1 a 10:  "))
     console.log(tentaiva);
     if( tentaiva == numero){
        alert("Parabens acertou o numero")
           break;
        }else{
            alert("Voce errou tente novamente")
        }
}


// ATIVIDADE 4

let numero = Number(prompt("Digite um numero inteiro positivo:  "))
let soma = 0;
let contador = 1
while(contador <= numero) {
    soma += contador
    contador ++;
}
alert(`A soma do numero 1 ate o ${numero} e ${soma}`)


// ATIVIDADE 5
for (let i = 1; i <= 20; i++) {

  if (i % 3 === 0) {
    continue;
  }
  if (i > 15) {
    break;
  }

  console.log(i);
}

//// Metodo For Of

let words = "Felipe"
for(let i of words){
    console.log(i)

}

// ATIVIDADE 6
let palavra = prompt("Digite uma palavra: ")
for(let i of palavra){
    console.log(i)

}