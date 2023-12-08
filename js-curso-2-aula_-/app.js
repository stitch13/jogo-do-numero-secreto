let listaDeNumeroSortados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    
    let paragrafo = document.querySelector(tag);
    paragrafo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.2})
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1','Jogo do número secreto');
    exibirTextoNaTela('p','Escolha um numero entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;

    
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1','Acertou !');
        
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        
        let mensagemTentativa = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa} !`;
        document.getElementById('reiniciar').removeAttribute('disabled');

        exibirTextoNaTela('p',mensagemTentativa);
    }else{
        if(chute > numeroSecreto){
            exibirTextoNaTela('p','O número secreto é menor');
        }else{
            exibirTextoNaTela('p','O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumeroSortados.length;

    if(quantidadeDeElementosNaLista == 3){
        listaDeNumeroSortados = [];
    }

    if(listaDeNumeroSortados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaDeNumeroSortados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    let numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirTextoNaTela('h1','Jogo do número secreto');
    exibirTextoNaTela('p','Escolha um numero entre 1 e 10');
    document.getElementById('reiniciar').setAttribute('disabled',true);
}