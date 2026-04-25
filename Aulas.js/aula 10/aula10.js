let name_complet = document.getElementById('name_complet');
let email = document.getElementById('email');
let idade = document.getElementById('idade');
let nascimento = document.getElementById('nascimento');
let profissao = document.getElementById('profissao');

function escreverNome() {

    // validação básica
    if (name_complet.value === "" || email.value === "" || idade.value === "" || nascimento.value === "" || profissao.value === "") {
        alert("Preencha todos os campos!");
        return;
    }

    let div1 = document.getElementsByClassName("div1")[0];

    // adiciona novo usuário sem apagar os anteriores
    div1.innerHTML += `
        <div style="border:1px solid black; margin:10px; padding:10px;">
            <p><strong>Nome:</strong> ${name_complet.value}</p>
             <p><strong>Email:</strong> ${email.value}</p>
            <p><strong>Idade:</strong> ${idade.value}</p>
            <p><strong>Nascimento:</strong> ${nascimento.value}</p>
            <p><strong>Profissão:</strong> ${profissao.value}</p>
        </div>
    `;

    // limpa os campos depois de enviar
    name_complet.value = "";
    email.value = "";
    idade.value = "";
    nascimento.value = "";
    profissao.value = "";
}