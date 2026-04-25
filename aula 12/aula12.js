// localStorage.setItem("nome", "Gustavo")
// let nome =  localStorage(nome)
// localStorage.clear

//// Atividade 1 

// window.onload = function () {
//     let nomeSalvo = localStorage.getItem("usuario");

//     if(nomeSalvo){
//         document.getElementById("mensagem").innerHTML =
//         "Olá, " + nomeSalvo + "!";
//     }
// };

// // Salva o nome no localStorage
// function salvarNome(){
//     let nome = document.getElementById("nome").value;

//     if(nome !== ""){
//         localStorage.setItem("usuario", nome);

//         document.getElementById("mensagem").innerHTML =
//         "Olá, " + nome + "!";
//     }
// }
// // Recuperar dados do localStorage
// function recuperarNome(){
//     let nomeSalvo = localStorage.getItem("usuario");

//     if(nomeSalvo){
//         document.getElementById("mensagem").innerHTML =
//         "Nome armazenado: " + nomeSalvo;
//     }else{
//         document.getElementById("mensagem").innerHTML =
//         "Nenhum nome salvo.";
//     }
// }

//// Atividade 2
// Salvar tarefa no localStorage
// function salvarTarefa(){
//     let tarefa = document.getElementById("tarefa").value;

//     if(tarefa !== ""){
//         localStorage.setItem("minhaTarefa", tarefa);

//         document.getElementById("mensagem").innerHTML =
//         "Tarefa salva: " + tarefa;
//     }
// }


// // Remover tarefa específica
// function removerTarefa(){
//     localStorage.removeItem("minhaTarefa");

//     document.getElementById("mensagem").innerHTML =
//     "Tarefa removida com sucesso!";
// }


// // Limpar todo o localStorage
// function limparTudo(){
//     localStorage.clear();

//     document.getElementById("mensagem").innerHTML =
//     "Todos os dados foram apagados!";
// }

// JSON

let objetoJS = {
    nome: "gustavo",
    idade: 17
}

let convertJSON = JSON.stringify(objetoJS)
console.log(convertJSON);