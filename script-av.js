function salvarDadosPagina1() {
    let nome = document.getElementById('nome').value;
    let sobrenome = document.getElementById('sobrenome').value;
    let idade = document.getElementById('idade').value;
    let sexo = document.getElementById('sexo').value;
    let telefone = document.getElementById('telefone').value;
    let email = document.getElementById('email').value;

    let dados = {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade,
        sexo: sexo,
        telefone: telefone,
        email: email
    };

    localStorage.setItem('dadosPagina1', JSON.stringify(dados));
}


function carregarDadosPagina1() {
    let dados = JSON.parse(localStorage.getItem('dadosPagina1'));
    console.log(dados);
    if (dados) {
        document.getElementById('nome').value = dados.nome;
        document.getElementById('sobrenome').value = dados.sobrenome;
        document.getElementById('idade').value = dados.idade;
        document.getElementById('sexo').value = dados.sexo;
        document.getElementById('telefone').value = dados.telefone;
        document.getElementById('email').value = dados.email;
    }
}


document.querySelector('.id-formulario').addEventListener('submit', function(event) {
    event.preventDefault();
    salvarDadosPagina1();
    window.location.href = 'av-id-index-2.html'; 
});


document.addEventListener('DOMContentLoaded', carregarDadosPagina1);
