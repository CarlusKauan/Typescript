"use strict";
const $inA = document.getElementById('inA').value;
const $inB = document.getElementById('inB').value;
const $outResposta = document.getElementById('outResposta');
const $outSoma = document.getElementById('outSoma');
const $btn = document.getElementById('btn');
const $btnPergunta = document.getElementById('btnPergunta');
const $btnLimpar = document.getElementById('btnLimpar');
const $btnSomar = document.getElementById('btnSomar');
const nome = "TypeScript";
function imprimir() {
    $outResposta.textContent = `Hello ${nome}`;
}
function pergunta() {
    let pergunta = `Por que está estudando ${nome}.`;
    let resposta = prompt(`${pergunta}\nDigite a sua resposta ?`);
    $outResposta.textContent = `Entendi então que o conteudo ajuda para o seu '${resposta}'`;
}
function limpar() {
    $outResposta.textContent = "";
    $outSoma.textContent = "";
}
$btn.addEventListener('click', imprimir);
$btnPergunta.addEventListener('click', pergunta);
$btnLimpar.addEventListener('click', limpar);
class Livros {
    constructor(nome, author, lancamento, editora) {
        this.nome = nome;
        this.author = author;
        this.lancamento = lancamento;
        this.editora = editora;
    }
    consideracoes() {
        console.log("Muito Obrigado");
    }
}
var c1 = new Livros("As muralhas vão cair", "Padre Manzotti", 2018, "Aliança");
