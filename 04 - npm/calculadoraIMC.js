// Criação de modulos p/ o projeto
// Esportar as funcinalidades

export function calculadoraIMC(peso, altura) {
    return peso / (altura * altura)
}

export const tabelaIMC = [
    {limite: 18.5, classificacao: "Magreza"},
    {limite: 24.9, classificacao: "Normal"},
    {limite: 29.9, classificacao: "Sobrepeso"},
    {limite: 34.9, classificacao: "Obesiade Grau I"},
    {limite: 39.9, classificacao: "Obesidade Grau II"},
    {limite: 48.0, classificacao: "Obesidade Grau III"},
]