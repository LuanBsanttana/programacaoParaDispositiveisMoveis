// comentário em uma linh

/*  
comentário em bloco
*/

// váriaveis
// var -> não usa no dia a dia
const prompt = require("prompt-sync")({ sigint: true });
let nome = "Luan";
const idade = Number(prompt("Infome sua idade: ")); //não e possivel reatribuir uma costante

// operadores

const soma = 2 + 2;
const subtração = 2 - 2;
const multiplicacao = 2 * 2;
const divisao = 2 / 2;
const resto = 2 % 2;

// operadores de comparação 

const igua = 2 == 2;
const diferente = 2 != 3;
const maior = 2 > 1;
const menor = 2 < 3;
const maiorOuIgual = 2 >= 2;
const menorOuIgual = 3 <= 2;

// Estrutura de condições
if (idade >= 18){
    console.log("Maior de idade")
}

if(idade >= 18){
    console.log("Maior de idade")
}else{
    console.log("Menor de idade")
}

// Operador ternário

const mensagem = idade >= 18 ? "Maior de idade" : "Menor de idade"
console.log("Mensagem ->", mensagem)

// Arrays - Listas
const frutas = ["Maça", "Banana", "Uva"];
console.log(frutas[0]); //Array sempre começa no indice 0
console.log(frutas[1]);

console.log("Quantas frutas tem no array: ", frutas.length)// metodo length mostra a quantidade de itens no array

frutas.push("Laranja");//metodo push adiviona um item ao array

frutas.forEach(fruta => console.log(fruta));// pecorre todo array e imprime cada item na variavel fruta

frutas.pop();// remore o ultimo item do array 
console.log(frutas);