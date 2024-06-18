function salvarDadosTreino() {
    let aluno = document.getElementById('aluno').value;
    let professor = document.getElementById('professor').value;
    let dataInicio = document.getElementById('dataInicio').value;
    let dataTroca = document.getElementById('dataTroca').value;
    let objetivo = document.getElementById('objetivo').value;
    let treinoA = document.getElementById('treinoA').value;
    let treinoB = document.getElementById('treinoB').value;
    let treinoC = document.getElementById('treinoC').value;

    let dados = {
        aluno: aluno,
        professor: professor,
        dataInicio: dataInicio,
        dataTroca: dataTroca,
        objetivo: objetivo,
        treinoA: treinoA,
        treinoB: treinoB,
        treinoC: treinoC,
    };

    localStorage.setItem('dadosTreino', JSON.stringify(dados));
}

// Função para carregar dados do LocalStorage
function carregarDados() {
    let dados = JSON.parse(localStorage.getItem('dadosTreino'));

    if (dados) {
        document.getElementById('aluno').value = dados.aluno;
        document.getElementById('professor').value = dados.professor;
        document.getElementById('dataInicio').value = dados.dataInicio;
        document.getElementById('dataTroca').value = dados.dataTroca;
        document.getElementById('objetivo').value = dados.objetivo;
        document.getElementById('treinoA').value = dados.treinoA;
        document.getElementById('treinoB').value = dados.treinoB;
        document.getElementById('treinoC').value = dados.treinoC;
    }
}

let url = 'exportTreino.html';
let botao = document.getElementById('abrir');

function abrirPagina () {
    let win = window.open(url,'_blank');
    win.focus();
}

botao.addEventListener('click', () =>{
    abrirPagina(url);
})

// Carregar dados quando a página for carregada
document.addEventListener('DOMContentLoaded', carregarDados);
