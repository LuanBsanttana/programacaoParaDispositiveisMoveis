//  importar as funcionalidades do modulo 

import { calculadoraIMC, tabelaIMC } from "./calculadoraIMC.js";

console.log(">>> Calculadora IMC  <<<");
console.table(tabelaIMC);

const peso = 69;
const altura = 1.78;

const resultado = calculadoraIMC(peso, altura);

tabelaIMC.forEach

console.log(`O resultado do IMC ${resultado.toFixed(2)}`);

// importar  um modulo externo, uma biblioteca

import moment from "moment";

const hoje = moment().locale('pt-br')
console.log(`Data: ${hoje.format("DD/MM/yyyy")}`)
