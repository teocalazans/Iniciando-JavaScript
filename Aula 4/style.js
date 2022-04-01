var jogador1 = 0;
var jogador2 = 0;
var placar;

//Usando If ternário
jogador1 != -1 && jogador2 != -1 ? console.log("Os Jogadores são válidos") : console.log("Jogadores Inválidos")
    
//Usando If
if (jogador1 > 0 && jogador2 == 0) {  
    console.log("Jogador 1 marcou ponto");
    placar = jogador1 > jogador2
} 

// Usanod Else If
else if (jogador2 > 0 && jogador1 == 0) { 
    console.log("Jogador 2 marcou ponto");
    placar = jogador2 > jogador1
} 

//Usando Else
else { 
    console.log("Ninguem marcou ponto");
}

//Estrutura de Condição switch
switch (placar) {
    case placar = jogador1 > jogador2:
        console.log('Jogador 1 ganhou a Partida');
    break;
        case placar = jogador2 > jogador1:
            console.log('Jogador 2 ganhou a partida');
        break;
    default:
        console.log('Ninguem Ganhou');
}

let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5'];
let object = {propriedade1: 'valor1', propriedade2: 'valor2', propriedade3: 'valor3'}

// FOR executa uma ação até que ela seja falsa
for (let indice = 0; indice < array.length; indice++) {
    console.log(indice)
}

//FOR/IN executa repetição a partir de uma propriedade
for (let i in array) {
    console.log(i)
}

//for/of executa a repetição a partir de valor 
for (i of array) {
    console.log(i)
}

//While
var a = 0
while (a < 5) {
    a++;
    console.log(a)
}

//DO/While
do{
    a++;
    console.log(a)
} while (a < 10)