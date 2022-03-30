//Tipos Primitivos 

//Boolean
var vOUf = false
console.log(vOUf)
//Decobrir qual tipo é a variável
var vOUf = false 
console.log(typeof(vOUf))

//Number
var numeroqualquer = 1
console.log(numeroqualquer)

var numeroqualquer = 2
console.log(typeof(numeroqualquer))

//String
var nome = "Teo"
console.log(nome)

var nome = "Teo"
console.log(typeof(nome))

//Como declarar variáveis
var variável;
console.log(variável)

var variável2 = "Voltou o assunto"
console.log(variável2)

let variável3;
console.log(variável)

var variável4 = "voltou o assunto"
console.log(variável2)

const variável6 = "Hello World"
console.log(variável6)

//escopo

var escopoGlobal = 'global';
console.log(escopoGlobal)

function escopoLocal() {
    let escopoLocalInterno = 'local'
    console.log(escopoLocalInterno)
}

escopoLocal()

//Adição
var adicao = 1 + 1;
console.log(adicao)

// Subtração 
var subtracao = 4 - 8;
console.log(subtracao)

//Multiplicação 
var multiplicacao = 2 * 8;
console.log(multiplicacao)

//Divisão
var divisao = 10 / 2;
console.log(divisao)

// Potenciação 
var potenciacao = 2 ** 10;
console.log(potenciacao)

//e
var e = true && true
console.log(e)

// ou
var ou = true || false || false
console.log(ou)

//não
var nao = !true
console.log(nao)

