
/*Escreva um algoritmo que gere uma senha aleatória de comprimento especificado pelo usuário. 
Você deve solicitar ao usuário o tamanho da senha e gerar de forma aleatório.
 A senha deve conter uma combinação de letras maiúsculas, minúsculas, números e caracteres especiais.

*/

import leia from'readline-sync'

var caracteres = ['ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&']

var tamanho = leia.questionInt('Digite o comprimento desejado para a sua senha: ');

var senha = ' '; 
for (var i = 0; i < tamanho; i++) {     
    var indice = Math.floor(Math.random() * caracteres.length); // pega um índice aleatório do vetor e multiplica pelo tamanho de caractere indicado pelo usuario.
    senha += caracteres[indice];
}
console.log('Sua senha gerada é: ' + senha);
