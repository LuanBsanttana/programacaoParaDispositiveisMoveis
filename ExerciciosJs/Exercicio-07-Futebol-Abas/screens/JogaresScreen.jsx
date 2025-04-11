import { StyleSheet, View, ScrollView, Image, FlatList} from 'react-native'
import React from 'react'
import {Text, Card, Title, Paragraph, Avatar} from 'react-native-paper'

const jogadores = [
  {
    nome: "Enner Valencia",
    numero: 13,
    imagem: "https://th.bing.com/th/id/OIP.QP9jp83avRFJVCxCGNZnvAHaFU?rs=1&pid=ImgDetMain"
  },
  {
    nome: "Taison",
    numero: 7,
    imagem: "https://th.bing.com/th/id/OIP.l_DkrxNyxDUJaFS4wfqerQHaEK?rs=1&pid=ImgDetMain"
  },
  {
    nome: "Gabriel Mercado",
    numero: 25,
    imagem: "https://th.bing.com/th/id/R.8fd2c0ca8df1ceeb8836a78200f032fe?rik=nL0RdHKgA2oTlw&pid=ImgRaw&r=0"
  },
  {
    nome: "Alan Patrick",
    numero: 10,
    imagem: "https://th.bing.com/th/id/OIP.lpv_xaSpyw9Yxnl-r72_5wHaEo?rs=1&pid=ImgDetMain"
  },
  {
    nome: "Sergio Rochet",
    numero: 1,
    imagem: "https://img.band.com.br/image/2023/07/13/goleiro-sergio-rochet-e-o-novo-reforco-do-inter-12201.jpg"
  },
];


export default function JogaresScreen() {
  return (
    <View>
   
   
      <FlatList
            data={jogadores}
            renderItem={({ item }) => (
              <Card style={{margin: 5 }}>
              <Card.Title
              title={item.nome}
              subtitle={"N°: " + item.numero}
              left={(props) => <Avatar.Image {...props} source={{ uri: item.imagem }} />}
            />
              </Card>
            )}
          />
    

    </View> 

    
  )
}

const styles = StyleSheet.create({})