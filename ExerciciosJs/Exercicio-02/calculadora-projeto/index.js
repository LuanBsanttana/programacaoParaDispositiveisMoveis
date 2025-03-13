import { soma,subtracao,multiplicacao,divisao } from "./calculadora.js";

const num1 = 10;
const num2 = 5;
const resultados = [
    {Operação: 'Soma', Resultado: soma(num1,num2)},
    {Operação: 'subtração',Resultado: subtracao(num1,num2)},
    {Operação: 'Multiplicação',Resultado: multiplicacao(num1,num2)},
    {Operação: 'Divisão',Resultado: divisao(num1,num2)}
]

console.table(resultados);

import moment from 'moment'

function calcularIdade(anoNascimento) {
    const anoAtual = moment().format("YYYY")
    return anoAtual - anoNascimento
}
console.log(`Você tem ${calcularIdade(1997)} anos`)