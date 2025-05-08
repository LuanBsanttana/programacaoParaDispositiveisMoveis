import { StyleSheet, View, ScrollView, Image, FlatList} from 'react-native'
import React from 'react'
import {Text, Card, Title, Paragraph, Avatar, List} from 'react-native-paper'

const titulos = [
  {
    nome: "Campeonato Brasileiro",
    anos: [1975, 1976, 1979]
  },
  {
    nome: "Copa Libertadores da América",
    anos: [2006, 2010]
  },
  {
    nome: "Copa do Brasil",
    anos: [1992, 1994, 1997, 2009, 2010]
  },
  {
    nome: "Supercopa do Brasil",
    anos: [2020]
  },
  {
    nome: "Recopa Sudamericana",
    anos: [2007, 2011]
  },
  {
    nome: "Copa Sul-Americana",
    anos: [2008]
  },
  {
    nome: "Copa do Mundo de Clubes da FIFA",
    anos: [2006]
  },
  {
    nome: "Copa Suruga Bank",
    anos: [2009]
  }
];


export default function TitulosScreen() {
  return (
    <View>
   
   
      <FlatList
            data={titulos}
            renderItem={({ item }) => (
             
              <List.Item
              title= {item.nome}
              description={item.anos.join(' ')}
              left={props => <List.Icon {...props} icon="medal" />}
            />
           
              
            )}
          />
    

    </View> 
  )
}

const styles = StyleSheet.create({})