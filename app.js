let listaDeNumerosSorteados =[];
let numeroSecreto = gerarNumeroAleatorio();
let = tentativas = 1;

function exibirTextoNaTela(tag, Texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = Texto;
    responsiveVoice.speak(Texto, 'Brazilian Portuguese Female', {rate: 1.2});
}
function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do numero secreto');
    exibirTextoNaTela('p', 'Escolha um numero de 1 a 10');
}
exibirMensagemInicial();

function limparCampoEFocar() {
    let campo = document.querySelector('input');
    campo.value = '';
    campo.focus();
}

function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto)
    if (chute === "" || chute === null )
        return;
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa' ;
        let mensagemTentativas = `Você acertou o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if (chute > numeroSecreto)
            exibirTextoNaTela('p','O número secreto é menor..');
        else{
            exibirTextoNaTela('p','O número certo é maior...');
        }
        tentativas ++;
        limparCampo();
        document.querySelector('input').focus();

    }
}

function gerarNumeroAleatorio() {
    let tamanhoMaximo = 100;
    let numeroEscolhido = parseInt (Math.random() * tamanhoMaximo + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    
    if (quantidadeDeElementosNaLista == tamanhoMaximo) {
        listaDeNumerosSorteados = [];
    }
    

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido
    }
}
function limparCampo() {
    chute = document.querySelector('input');
    chute.value ='';
}
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
   document.getElementById('reiniciar').setAttribute('disabled',true);
}