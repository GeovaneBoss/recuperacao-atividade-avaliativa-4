/* Crie um algoritmo que leia uma quantidade n de números inteiros fornecida pelo usuário 
e armazene esses números em um vetor. O algoritmo para de solicitar valores, 
quando o usuário digitar o numero 0. 
Ao final, o algoritmo deve calcular e imprimir a média desses números,
 a soma de todos os números o maior e menor digitado. (Desconsiderar o 0).
*/ 

import leia from 'readline-sync';

var numeros = [];
var numero;

console.log('Digite seus numeros (digite 0 para parar):');

while (true) {
    numero = leia.questionInt('Digite um número: ');
    if (numero === 0) break;
    numeros.push(numero);
}

if (numeros.length === 0) {
    console.log('Nenhum número foi fornecido.');
} else {
   
    var soma = 0;
    var maior = numeros[0];
    var menor = numeros[0];

    for (var i = 0; i < numeros.length; i++) {
        soma += numeros[i];
        if (numeros[i] > maior) maior = numeros[i];
        if (numeros[i] < menor) menor = numeros[i];
    }

    var media = soma / numeros.length;

    console.log('Soma: ' + soma);
    console.log('Média: ' + media);
    console.log('Maior número: ' + maior);
    console.log('Menor número: ' + menor);
}
