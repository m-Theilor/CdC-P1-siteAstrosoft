function salvarDadosPagina3() {
    let pescoço = document.getElementById('pescoço').value;
    let ombro = document.getElementById('ombro').value;
    let peito = document.getElementById('peito').value;
    let braçoDireito = document.getElementById('braçoDireito').value;
    let braçoEsquerdo = document.getElementById('braçoEsquerdo').value;
    let antebraçoDireito = document.getElementById('antebraçoDireito').value;
    let antebraçoEsquerdo = document.getElementById('antebraçoEsquerdo').value;
    let pulsoDireito = document.getElementById('pulsoDireito').value;
    let pulsoEsquerdo = document.getElementById('pulsoEsquerdo').value;
    let cintura = document.getElementById('cintura').value;
    let abdomen = document.getElementById('abdomen').value;
    let quadril = document.getElementById('quadril').value;
    let coxaProxDir = document.getElementById('coxaProxDir').value;
    let coxaProxEsq = document.getElementById('coxaProxEsq').value;
    let coxaMedialDir = document.getElementById('coxaMedialDir').value;
    let coxaMedialEsq = document.getElementById('coxaMedialEsq').value;
    let coxaDistalDir = document.getElementById('coxaDistalDir').value;
    let coxaDistalEsq = document.getElementById('coxaDistalEsq').value;
    let joelhoDir = document.getElementById('joelhoDir').value;
    let joelhoEsq = document.getElementById('joelhoEsq').value;
    let panturrilhaDir = document.getElementById('panturrilhaDir').value;
    let panturrilhaEsq = document.getElementById('panturrilhaEsq').value;
    let tornozeloDir = document.getElementById('tornozeloDir').value;
    let tornozeloEsq = document.getElementById('tornozeloEsq').value;


    let dados = {
        pescoço: pescoço,
        ombro: ombro,
        peito: peito,
        braçoDireito: braçoDireito,
        braçoEsquerdo: braçoEsquerdo,
        antebraçoDireito: antebraçoDireito,
        antebraçoEsquerdo: antebraçoEsquerdo,
        pulsoDireito: pulsoDireito,
        pulsoEsquerdo: pulsoEsquerdo,
        cintura: cintura,
        abdomen: abdomen,
        quadril: quadril,
        coxaProxDir: coxaProxDir,
        coxaProxEsq: coxaProxEsq,
        coxaMedialDir: coxaMedialDir,
        coxaMedialEsq: coxaMedialEsq,
        coxaDistalDir: coxaDistalDir,
        coxaDistalEsq: coxaDistalEsq,
        joelhoDir: joelhoDir,
        joelhoEsq: joelhoEsq,
        panturrilhaDir: panturrilhaDir,
        panturrilhaEsq: panturrilhaEsq,
        tornozeloDir: tornozeloDir,
        tornozeloEsq: tornozeloEsq,
    };

    localStorage.setItem('dadosPagina3', JSON.stringify(dados));
}

function carregarDados() {
    let dados = JSON.parse(localStorage.getItem('dadosPagina3'));
    if (dados) {
        document.getElementById('pescoço').value = dados.pescoço;
        document.getElementById('ombro').value = dados.ombro;
        document.getElementById('peito').value = dados.peito;
        document.getElementById('braçoDireito').value = dados.braçoDireito;
        document.getElementById('braçoEsquerdo').value = dados.braçoEsquerdo;
        document.getElementById('antebraçoDireito').value = dados.antebraçoDireito;
        document.getElementById('antebraçoEsquerdo').value = dados.antebraçoEsquerdo;
        document.getElementById('pulsoDireito').value = dados.pulsoDireito;
        document.getElementById('pulsoEsquerdo').value = dados.pulsoEsquerdo;
        document.getElementById('cintura').value = dados.cintura;
        document.getElementById('abdomen').value = dados.abdomen;
        document.getElementById('quadril').value = dados.quadril;
        document.getElementById('coxaProxDir').value = dados.coxaProxDir;
        document.getElementById('coxaProxEsq').value = dados.coxaProxEsq;
        document.getElementById('coxaMedialDir').value = dados.coxaMedialDir;
        document.getElementById('coxaMedialEsq').value = dados.coxaMedialEsq;
        document.getElementById('coxaDistalDir').value = dados.coxaDistalDir;
        document.getElementById('coxaDistalEsq').value = dados.coxaDistalEsq;
        document.getElementById('joelhoDir').value = dados.joelhoDir;
        document.getElementById('joelhoEsq').value = dados.joelhoEsq;
        document.getElementById('panturrilhaDir').value = dados.panturrilhaDir;
        document.getElementById('panturrilhaEsq').value = dados.panturrilhaEsq;
        document.getElementById('tornozeloDir').value = dados.tornozeloDir;
        document.getElementById('tornozeloEsq').value = dados.tornozeloEsq;
       
    }
}

let url = 'exportAvaliacao.html';
let botao = document.getElementById('abrir');

function abrirPagina () {
    let win = window.open(url,'_blank');
    win.focus();
}

botao.addEventListener('click', () =>{
    abrirPagina(url);
})

document.addEventListener('DOMContentLoaded', carregarDados);
