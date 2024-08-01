/*Você deve desenvolver um programa para verificar se um baralho de cartas está viciado.
 O baralho possui 52 cartas,divididas igualmente entre quatro 
 naipes: copas, espadas, ouros e paus. 
O algoritmo deve fazer o sorteio fazer 1000 sorteios de naipes e contar quantas vezes 
cada naipe foi sorteado em uma série de sorteios e verificar 
se algum naipe tem uma frequência maior que 30%. 
Se houver, o programa deve indicar que o baralho pode estar viciado.*/ 

import leia from 'readline-sync' 

var naipes = ['copas', 'espadas', 'ouros', 'paus'];
var totalSorteios = 1000;
var contagemNaipes = { copas: 0, espadas: 0, ouros: 0, paus: 0 };

for (var i = 0; i < totalSorteios; i++) {
    var indiceAleatorio = Math.floor(Math.random() * naipes.length);
    var naipeSorteado = naipes[indiceAleatorio];
    contagemNaipes[naipeSorteado]++;
}

for (var naipe in contagemNaipes) {
    var frequencia = (contagemNaipes[naipe] / totalSorteios) * 100;
    if (frequencia > 30) {
        console.log("O naipe " + naipe + " foi sorteado " + frequencia.toFixed(2) + "% das vezes, o que indica um possível vício.");
    }
}
