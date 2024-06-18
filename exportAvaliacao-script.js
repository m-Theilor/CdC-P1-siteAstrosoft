function carregarDados() {
    let dadosPagina1 = JSON.parse(localStorage.getItem('dadosPagina1'));
    document.getElementById("nomeAluno").innerHTML = dadosPagina1.nome;
    document.getElementById("sobrenomeAluno").innerHTML = dadosPagina1.sobrenome;
    document.getElementById("emailAluno").innerHTML = dadosPagina1.email;
    document.getElementById("idadeAluno").innerHTML = dadosPagina1.idade;
    document.getElementById("sexoAluno").innerHTML = dadosPagina1.sexo;
    document.getElementById("telefoneAluno").innerHTML = dadosPagina1.telefone;
    
    let dadosPagina2 = JSON.parse(localStorage.getItem('dadosPagina2'));
    document.getElementById("peso").innerHTML = dadosPagina2.peso;
    document.getElementById("altura").innerHTML = dadosPagina2.altura;
    document.getElementById("subercapular").innerHTML = dadosPagina2.subercapular;
    document.getElementById("tricipital").innerHTML = dadosPagina2.tricipital;
    document.getElementById("lombar").innerHTML = dadosPagina2.lombar;
    document.getElementById("peitoral").innerHTML = dadosPagina2.peitoral;
    document.getElementById("axilar").innerHTML = dadosPagina2.axilar;
    document.getElementById("bicipital").innerHTML = dadosPagina2.bicipital;
    document.getElementById("supra").innerHTML = dadosPagina2.supra;
    document.getElementById("abdominal").innerHTML = dadosPagina2.abdominal;
    document.getElementById("mostrarIMC").innerHTML = dadosPagina2.mostrarIMC;
    document.getElementById("mostrarDensidade").innerHTML = dadosPagina2.mostrarDensidade;
    document.getElementById("mostrarGordura").innerHTML = dadosPagina2.mostrarGordura;
    
    let dadosPagina3 = JSON.parse(localStorage.getItem('dadosPagina3'));
    document.getElementById("pescoço").innerHTML = dadosPagina3.pescoço;
    document.getElementById("ombro").innerHTML = dadosPagina3.ombro;
    document.getElementById("peito").innerHTML = dadosPagina3.peito;
    document.getElementById("braçoDireito").innerHTML = dadosPagina3.braçoDireito;
    document.getElementById("braçoEsquerdo").innerHTML = dadosPagina3.braçoEsquerdo;
    document.getElementById("antebraçoDireito").innerHTML = dadosPagina3.antebraçoDireito;
    document.getElementById("antebraçoEsquerdo").innerHTML = dadosPagina3.antebraçoEsquerdo;
    document.getElementById("pulsoDireito").innerHTML = dadosPagina3.pulsoDireito;
    document.getElementById("pulsoEsquerdo").innerHTML = dadosPagina3.pulsoEsquerdo;
    document.getElementById("cintura").innerHTML = dadosPagina3.cintura;
    document.getElementById("abdomen").innerHTML = dadosPagina3.abdomen;
    document.getElementById("quadril").innerHTML = dadosPagina3.quadril;
    document.getElementById("coxaProxDir").innerHTML = dadosPagina3.coxaProxDir;
    document.getElementById("coxaProxEsq").innerHTML = dadosPagina3.coxaProxEsq;
    document.getElementById("coxaMedialDir").innerHTML = dadosPagina3.coxaMedialDir;
    document.getElementById("coxaMedialEsq").innerHTML = dadosPagina3.coxaMedialEsq;
    document.getElementById("coxaDistalDir").innerHTML = dadosPagina3.coxaDistalDir;
    document.getElementById("coxaDistalEsq").innerHTML = dadosPagina3.coxaDistalEsq;
    document.getElementById("joelhoDir").innerHTML = dadosPagina3.joelhoDir;
    document.getElementById("joelhoEsq").innerHTML = dadosPagina3.joelhoEsq;
    document.getElementById("panturrilhaDir").innerHTML = dadosPagina3.panturrilhaDir;
    document.getElementById("panturrilhaEsq").innerHTML = dadosPagina3.panturrilhaEsq;
    document.getElementById("tornozeloDir").innerHTML = dadosPagina3.tornozeloDir;
    document.getElementById("tornozeloEsq").innerHTML = dadosPagina3.tornozeloEsq;
    
}

print();

document.addEventListener('DOMContentLoaded', carregarDados);