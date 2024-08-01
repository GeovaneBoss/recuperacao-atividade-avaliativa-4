
//Escreva um algoritmo que receba 5 nomes e 5 idades do usuário, armazene essas informações em dois vetores, e depois exiba o nome e a idade da pessoa mais velha e da pessoa mais nova.

import leia from 'readline-sync';

var nomes = [];
var idades = [];

for (var i = 0; i < 5; i++) {
    var nomes = leia.question(`Digite o nome da pessoa ${i + 1}: `);
    var idades = parseInt(leia.question(`Digite a idade da pessoa ${i + 1}: `), 10);
    nomes.push(nomes);
    idades.push(idades);
}

var MaisVelha = 0;
var MaisNova = 0;

for (var i = 1; i < idades.length; i++) {
    if (idades[i] > idades[MaisVelha]) {
        MaisVelha = i;
    }
    if (idades[i] < idades[MaisNova]) {
        MaisNova = i;
    }
}

console.log(`A pessoa mais velha é ${nomes[MaisVelha]} com ${idades[MaisVelha]} anos.`);
console.log(`A pessoa mais nova é ${nomes[MaisNova]} com ${idades[MaisNova]} anos.`);

