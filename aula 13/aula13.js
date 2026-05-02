
////ATIVIDADE 1

// function dividir() {
//     try {
//         let num1 = parseFloat(prompt("Digite o primeiro número:"));
//         let num2 = parseFloat(prompt("Digite o segundo número:"));

//         if (num2 === 0) {
//             throw new Error("Não é possível dividir por zero!");
//         }

//         let resultado = num1 / num2;
//         console.log("Resultado:", resultado);

//     } catch (erro) {
//         console.error("Erro:", erro.message);

//     } finally {
//         console.log("Operação concluída.");
//     }
// }

// // Chamando a função
// dividir();
 
////ATIVIDADE 2

function verificarIdade() {
    let mensagem = document.getElementById("mensagem");

    try {
        let idade = document.getElementById("idade").value;

        if (idade.trim() === "") {
            throw new Error("O campo não pode estar vazio!");
        }

        idade = Number(idade);

        if (isNaN(idade)) {
            throw new Error("Digite um número válido!");
        }

        if (idade < 0) {
            throw new Error("A idade não pode ser negativa!");
        }

        mensagem.innerHTML = "Idade válida: " + idade;
        mensagem.className = "sucesso";

    } catch (erro) {
        mensagem.innerHTML = erro.message;
        mensagem.className = "erro";
    }
}