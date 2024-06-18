function carregarDados() {
    let dadosTreino = JSON.parse(localStorage.getItem('dadosTreino'));
    document.getElementById("aluno").innerHTML = dadosTreino.aluno;
    document.getElementById("professor").innerHTML = dadosTreino.professor;
    document.getElementById("dataInicio").innerHTML = dadosTreino.dataInicio;
    document.getElementById("dataTroca").innerHTML = dadosTreino.dataTroca;
    document.getElementById("objetivo").innerHTML = dadosTreino.objetivo;
    document.getElementById("fichaA").innerHTML = dadosTreino.treinoA;
    document.getElementById("fichaB").innerHTML = dadosTreino.treinoB;
    document.getElementById("fichaC").innerHTML = dadosTreino.treinoC;
}

print();

document.addEventListener('DOMContentLoaded', carregarDados);