//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaDeParticipantes = [];


function adicionarAmigo() {
    let participante = document.querySelector('input').value;
    if (participante === '') {
        alert('Você precisa digitar o nome do participante!!');
    } else {
        listaDeParticipantes.push(participante);
    }
    exibirTextoNaTela('listaAmigos', listaDeParticipantes.join(', '));

    //console.log(listaDeParticipantes);
    //console.log(participante);
    limparCampo();
}

function exibirTextoNaTela(tag, texto) {
    let campo = document.getElementById(tag);
    campo.innerHTML = texto;
}

function limparCampo() {
    let participante = document.querySelector('input');
    participante.value = ('');
}

function sortearAmigo() {
    let amigoSorteado = listaDeParticipantes [Math.floor(Math.random() * listaDeParticipantes.length)];
    if (listaDeParticipantes.length === 0) {
        exibirTextoNaTela('resultado', 'Todos foram sorteados!');
    } else {
    exibirTextoNaTela('resultado', `O seu amigo secreto é: ${amigoSorteado}`);
    if (listaDeParticipantes == 0) {
        exibirTextoNaTela('resultado', 'Não há mais ninguém a ser sorteado');
        }
    }

    let indice = listaDeParticipantes.indexOf(amigoSorteado);

    if (amigoSorteado !== -1) {
    listaDeParticipantes.splice(indice, 1);
    exibirTextoNaTela('listaAmigos', '');
    }


    //console.log(listaDeParticipantes);
}