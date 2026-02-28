let nomes = ["felipe", "joao", "thiago", "gustavo"]
console.log(nomes.length);
console.log(nomes[0]);
console.log(nomes[1]);
console.log(nomes[2]);
console.log(nomes[3]);


// ATIVIDADE 1

let cores = ["Vermelho", "Verde", "Azul", "Amarelo"]
console.log(cores[3]);

do{
    let novacor = prompt("digite uma nova cor:  ")
    if(novacor === "sair"){break} 
    cores.push(novacor)
}while(true)
console.log(cores)   


// ATIVIDADE 2

let animais = ["Cachorro", "Gato", "Papagaio"];

animais.push("Tartaruga");
animais.shift();
animais.unshift("Coelho");
animais[2] = "Hamster";
console.log(animais.length);
console.log(animais[1]);
console.log(animais);

// ATIVIDADE 3

let cores = ["Vermelho", "Verde", "Azul"]
cores.push("Amarelo", "Roxo");

cores.pop();

cores.splice(1, 1, "Laranja", "Marrom");

let novasCores = cores.slice(0, 2);

let coresString = cores.join(", ");

cores.reverse();

console.log("Array cores:", cores);
console.log("Array novasCores:", novasCores);
console.log("String das cores:", coresString);

// ATIVIDADE 4
let numeros = [3, 8, 15, 22, 7, 10];

for (let i = 0; i < numeros.length; i++) {
    
    if (numeros[i] % 2 === 0) {
        console.log(numeros[i] + " é PAR");
    } else {
        console.log(numeros[i] + " é ÍMPAR");
    }
}

// ATIVIDADE 5
let nomes = ["Ana", "Carlos", "Mariana", "João"];

for (let nome of nomes) {
    console.log("Seja bem-vindo(a), " + nome + "!");
}