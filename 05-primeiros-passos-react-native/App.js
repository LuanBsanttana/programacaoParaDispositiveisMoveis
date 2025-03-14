import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default function App() {
  const nome = "Luan"
  // function alerta() {
  //   alert("Vc apertou um botão")   
  // }
  return (
    // Tudo dentro do return são codigos JSX que serão exibidos na tela
    // A tags usadas para mostrar na tela sempre sãp impotadas pelo "import"
    <View style={styles.container}>
      <Text>Testando o aplicativo</Text>
      <Text>{nome}</Text>
      <Button title='Alerta'></Button>
      <Image 
        source={{ uri: 'https://images.steamusercontent.com/ugc/940586530515504757/CDDE77CB810474E1C07B945E40AE4713141AFD76/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false' }}
        style={{
          height: 300,
          width: 300
        }}
      />
      <StatusBar style="auto" />
    </View>
    //Para usar codigos javaScript usar {}
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
