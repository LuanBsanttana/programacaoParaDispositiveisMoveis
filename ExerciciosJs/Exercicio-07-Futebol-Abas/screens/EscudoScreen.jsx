import { StyleSheet, View, ScrollView, Image} from 'react-native'
import React from 'react'
import {Text, Card, Title, Paragraph} from 'react-native-paper'

const time = {
    nome: "S.C Internacional",
    escudo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Escudo_do_Sport_Club_Internacional.svg/1024px-Escudo_do_Sport_Club_Internacional.svg.png",
  };

export default function EscudoScreen() {
  return (
    
        <View style={styles.container}>
            <Image 
                source={{uri: time.escudo}}
                style={{
                  height: 250,
                  width: 300
                }}
            />
            <Text style={{color: '#fff', padding: 20, fontSize: 25, fontWeight: 800}}>{time.nome}</Text>
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