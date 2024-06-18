function mostrarResultados () {
    event.preventDefault();
    checkImput();

    //variaveis para o calculo do IMC
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);
    let idade = parseFloat(document.getElementById("idade").value);
    let mostrarIMC = document.getElementById("mostrarIMC");
    let imcValor = peso/((altura/100)*(altura/100));
    
    //variaveis para o calculo da Densidade Corporal
    let tricipital = parseFloat(document.getElementById("tricipital").value)
    let subescapular = parseFloat(document.getElementById("subescapular").value)
    let peitoral = parseFloat(document.getElementById("peitoral").value)
    let axilar = parseFloat(document.getElementById("axilar").value)
    let abdominal = parseFloat(document.getElementById("abdominal").value)
    let supra = parseFloat(document.getElementById("supra").value)
    let coxa = parseFloat(document.getElementById("coxa").value)
    let mostrarDensidade = document.getElementById("mostrarDensidade");
    let somaDobras = tricipital + subescapular + peitoral + axilar + abdominal + supra + coxa;
    //falta adicionar o valor da idade no final da fórmula
    let densidadeCorporal = 1.112-(0.00043499*somaDobras) + (0.00000055*somaDobras)*2 - (0.00028826)*idade;


    
    //variaveis para o calculo de Porcentagem de Gordura Corporal
    let mostrarGordura = document.getElementById("mostrarGordura");
    let gorduraCorporal = (495/densidadeCorporal)-450;
    
     //Resultados
     mostrarIMC.innerHTML = imcValor.toFixed(2);  
     mostrarDensidade.innerHTML = densidadeCorporal.toFixed(2);
     mostrarGordura.innerHTML = gorduraCorporal.toFixed(2);
    

    //funções para check imputs
    function checkImput (){
        let tricipital = document.getElementById("tricipital").value;
        let subescapular = document.getElementById("subescapular").value;
        let peitoral = document.getElementById("peitoral").value;
        let axilar = document.getElementById("axilar").value;
        let abdominal = document.getElementById("abdominal").value;
        let supra = document.getElementById("supra").value;
        let coxa = document.getElementById("coxa").value;
        let peso = document.getElementById("peso").value;
        let altura = document.getElementById("altura").value;
        let idade = document.getElementById("idade").value;

        if (tricipital === "" || subescapular === "" || peitoral === "" || axilar === "" || abdominal === "" || supra === "" || coxa === "" || peso === "" || altura === "" || idade === "") {
            alert("Você precisa preencher todos os campos!");
            return false;
        }
        return true;
    }

}

function salvarDadosPagina2() {
    let peso = document.getElementById('peso').value;
    let altura = document.getElementById('altura').value;
    let sobescapular = document.getElementById('subescapular').value;
    let tricipital = document.getElementById('tricipital').value;
    let abdominal = document.getElementById('abdominal').value;
    let lombar = document.getElementById('lombar').value;
    let peitoral = document.getElementById('peitoral').value;
    let axilar = document.getElementById('axilar').value;
    let bicipital = document.getElementById('bicipital').value;
    let coxa = document.getElementById('coxa').value;
    let supra = document.getElementById('supra').value;
    let idade = document.getElementById('idade').value;

    let mostrarIMC = document.getElementById('mostrarIMC').textContent;
    let mostrarDensidade = document.getElementById('mostrarDensidade').textContent;
    let mostrarGordura = document.getElementById('mostrarGordura').textContent;

    let dados = {
        peso: peso,
        altura: altura,
        sobescapular: sobescapular,
        tricipital: tricipital,
        abdominal: abdominal,
        lombar: lombar,
        peitoral: peitoral,
        axilar: axilar,
        bicipital: bicipital,
        coxa: coxa,
        supra: supra,
        idade: idade,
        mostrarIMC: mostrarIMC,
        mostrarDensidade: mostrarDensidade,
        mostrarGordura: mostrarGordura
    };

    localStorage.setItem('dadosPagina2', JSON.stringify(dados));
}


function carregarDados() {
    let dados = JSON.parse(localStorage.getItem('dadosPagina2'));

    if (dados) {
        document.getElementById('peso').value = dados.peso;
        document.getElementById('altura').value = dados.altura;
        document.getElementById('subescapular').value = dados.sobescapular;
        document.getElementById('tricipital').value = dados.tricipital;
        document.getElementById('abdominal').value = dados.abdominal;
        document.getElementById('lombar').value = dados.lombar;
        document.getElementById('peitoral').value = dados.peitoral;
        document.getElementById('axilar').value = dados.axilar;
        document.getElementById('bicipital').value = dados.bicipital;
        document.getElementById('coxa').value = dados.coxa;
        document.getElementById('supra').value = dados.supra;
        document.getElementById('idade').value = dados.idade;
        document.getElementById('mostrarIMC').textContent = dados.mostrarIMC;
        document.getElementById('mostrarDensidade').textContent = dados.mostrarDensidade;
        document.getElementById('mostrarGordura').textContent = dados.mostrarGordura;
    }
}

document.querySelector('.id-formulario').addEventListener('submit', function(event) {
    event.preventDefault();
    mostrarResultados();
    salvarDadosPagina2();
    window.location.href = 'av-id-index-3.html'; 
});


document.addEventListener('DOMContentLoaded', carregarDados);
