import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function JavaScriptComponentes() {
    const nome = "Luan";
    const idade = 27;

    function exibirNome(){
        return nome
    }
    function checarMaiorIdade(){
        if(idade >= 18){
            return "Maior de idade";
        }else{
            return "Menor de idade";
        }
    }

  return (
    <View>
      <Text>Nome: {nome}</Text>
      <Text>Idade: {idade}</Text>
      <Text>Nome Por meio da Função: {exibirNome()}</Text>
      <Text>Resultado de uma conta: {2*5}</Text>
      <Text>Soma da idade: {idade + 20}</Text>
      <Text>Check maior idade: {checarMaiorIdade()}</Text>
      <Text>Check maior idade: {idade >= 18 ? "Maior idade" : "Menor idade"}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})