import { StyleSheet, View, ScrollView, Image} from 'react-native'
import React from 'react'
import {Text, Card, Title, Paragraph} from 'react-native-paper'

const time = {
    nome: "S.C Internacional",
    escudo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Escudo_do_Sport_Club_Internacional.svg/1024px-Escudo_do_Sport_Club_Internacional.svg.png",
    fundacao: "15 de novembro de 1895",
    estadio: "Beira Rio",
    mascote: "Sachi",
    cores: ["Vermelho", "Branco"]
  };

export default function EscudoScreen() {
  return (
    
        <View style={styles.container}>

          
            <Image 
                source={{uri: time.escudo}}
                style={{
                  height: 300,
                  width: 300
                }}
            />
            <Text style={{color: '#fff', padding: 10, fontSize: 25, fontWeight: 800}}>{time.nome}</Text>
            <Text style={{color: '#fff', padding: 10, fontSize: 25, fontWeight: 800}}>{time.fundacao}</Text>
            <Text style={{color: '#fff', padding: 10, fontSize: 25, fontWeight: 800}}>{time.estadio}</Text>
            <Text style={{color: '#fff', padding: 10, fontSize: 25, fontWeight: 800}}>{time.mascote}</Text>
            <Text style={{color: '#fff', padding: 10, fontSize: 25, fontWeight: 800}}>{time.cores.join(" ")}</Text>
        </View>
   
  )
}

const styles = StyleSheet.create({
    container:{
    flex: 1,
    backgroundColor: '#C40119',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
    }
})