// let pessoa = {
//     nome: "Gustavo",
//     idade: 17,
//     profissao: "programador",
//     endereco: "rua joaquim"
// }

// pessoa.nome = "emilly"
// pessoa.endereco = "rua flor"
// console.log(pessoa.profissao);
// console.log(pessoa.idade);
// console.log(pessoa.nome);
// console.log(pessoa.endereco);


// // Atividade 1
// let carro = {
//     marca: "volkwasgen",
//     modelo: "nivus",
//     ano: 2026
// };

// console.log(carro);
// console.log(carro.marca);
// console.log(carro.modelo);
// console.log(carro.ano);

// //// Atividade 2 
// let pessoa = {
//     nome: "Gustavo",
//     idade: 17,
//     profissao: "programador"
// }

// pessoa.profissao = "desenvolvedor"
// pessoa.cidade = "sao paulo"
// console.log(pessoa)

// //// Atividade 3
// let livro = { 
//     titulo: "copa do mundo",
//     autor: "panini",
//     editora: "panini",
//     ano: 2022
// }

// console.log(livro);

// const exibir_dados = (pessoa) => {
//     console.log(`Nome ${pessoa.nome}`);
//     console.log(`Idade ${pessoa.idade}`);
//     console.log(`Endereco ${pessoa.endereco}`);
//     console.log(`Cidade ${pessoa.cidade}`);
//     console.log(`Profissao ${pessoa.profissao}`);
// };

// let nome_var = prompt("Digite seu nome: ");
// let idade_var = prompt("Digite sua idade: ");
// let endereco_var = prompt("Digite seu endereco: ");
// let cidade_var = prompt("Digite sua cidade: ");

// let pessoa1 = {
//     nome: nome_var,
//     idade: idade_var,
//     endereco: endereco_var,
//     profissao: prompt("Digite sua profissao: "),
//     cidade: cidade_var
// };

// exibir_dados(pessoa1);


// const exibir_dados = (livro) => {
//     console.log(`titulo: ${livro.titulo}`);
//     console.log(`autor: ${livro.autor}`);
//     console.log(`ano: ${livro.ano}`);
//     console.log(`editora: ${livro.editora}`);
// };

// let livro = {
//     titulo: "copa do mundo",
//     autor: "panini",
//     editora: "panini",
//     ano: 2022
// };

// exibir_dados(livro);

// // Atividade 4
// let livros = [
//   { titulo: "Dom Casmurro", autor: "Machado de Assis" },
//   { titulo: "O Hobbit", autor: "J.R.R. Tolkien" },
//   { titulo: "1984", autor: "George Orwell" }
// ];

// console.log("Títulos dos livros:");
// for (let livro of livros) {
//   console.log(livro.titulo);
// }

// livros.push({ titulo: "Harry Potter", autor: "J.K. Rowling" });

// console.log("\nLista completa de livros:");
// console.log(livros);

// //// Atividade 5

// let carro1 = {
//   marca: "Toyota",
//   modelo: "Corolla",
//   ano: 2020
// };

// let carro2 = {
//   marca: "Honda",
//   modelo: "Civic",
//   ano: 2022
// };

// let carroCombinado = {
//   ...carro1,
//   ...carro2
// };

// console.log("Carro combinado:");
// console.log(carroCombinado);