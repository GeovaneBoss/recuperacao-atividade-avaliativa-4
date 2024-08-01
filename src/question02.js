
/*Escreva um algoritmo que solicite ao usuário um texto ou palavra
e ele conte quantas consoantes esse texto ou palavra tem. 
vale lembrar que toda String (texto), nada mais é do que um vetor de caracteres.*/

import leia from 'readline-sync'

var texto = leia.question('Digite um texto ou palavra: ');

texto = texto.toLowerCase(); // converte o texto para minúsculas.

var vogais = 'aeiou';

var contadorConsoantes = 0; 

for (var i = 0; i < texto.length; i++) {
    var caractere = texto[i];
        if (caractere >= 'a' && caractere <= 'z' && !vogais.includes(caractere)) {
        contadorConsoantes++;
    }
}
console.log(`O texto ou palavra contém ${contadorConsoantes} consoantes.`);

