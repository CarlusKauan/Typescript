//inputs
const $inA = (<HTMLInputElement>document.getElementById('inA')).value;
const $inB = (<HTMLInputElement>document.getElementById('inB')).value;
// out
const $outResposta = document.getElementById('outResposta')
const $outSoma = document.getElementById('outSoma')
// buttons
const $btn = document.getElementById('btn')
const $btnPergunta = document.getElementById('btnPergunta')
const $btnLimpar = document.getElementById('btnLimpar')
const $btnSomar = document.getElementById('btnSomar')

const nome: string  = "TypeScript"

function imprimir(): void{
    $outResposta!.textContent = `Hello ${nome}`
}

function pergunta(): void{
    let pergunta: string = `Por que está estudando ${nome}.`
    let resposta = prompt(`${pergunta}\nDigite a sua resposta ?`)
    $outResposta!.textContent = `Entendi então que o conteudo ajuda para o seu '${resposta}'`
}

function limpar(): void {
    $outResposta!.textContent = ""
    $outSoma!.textContent = ""
}

/* retorna Nan
function somar(){
    let n1 = Number($inA);
    let n2 = Number($inB);
    let somar:number = n1 + n2;
    $outSoma!.textContent = `resultado: ${somar}`
}
*/

$btn!.addEventListener('click', imprimir)
$btnPergunta!.addEventListener('click', pergunta)
$btnLimpar!.addEventListener('click', limpar)
// $btnSomar!.addEventListener('click', somar)

class Livros  {
    nome: string;
    author: string;
    lancamento: number;
    editora: string;

    constructor(nome: string, author: string, lancamento: number, editora:string){
        this.nome = nome;
        this.author = author;
        this.lancamento = lancamento
        this.editora = editora
    }

    consideracoes(): void{
        console.log("Muito Obrigado")
    }
}

var c1 = new Livros("As muralhas vão cair", "Padre Manzotti", 2018, "Aliança")
