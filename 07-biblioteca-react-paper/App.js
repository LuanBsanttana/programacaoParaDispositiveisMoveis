import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ScrollView, FlatList} from "react-native";
import { PaperProvider, Card, Title, Paragraph, Text, Button, Divider} from "react-native-paper";


export default function App() {

  const listaFrutas = ["Uva", "Maça", "Laranja", "Melão"]
  return (
    <PaperProvider>
      <ScrollView>
      <View style={styles.container}>
        <StatusBar style="auto" />
        {
          listaFrutas.map(
            fruta => <Text variant="displaySmall">{fruta}</Text>
          )
        }
        {
          listaFrutas.map(
            fruta=>(
              <View>
                <Text variant="displaySmall">{fruta}</Text>
              
              </View>  
            )
          )
        }
        
      </View>
      
      </ScrollView>
      <FlatList
           data={listaFrutas}
           renderItem={({item}) => <Text variant="displaySmall">{item}</Text>}         
        />
        <FlatList
          data={listaFrutas}
          renderItem={({item}) =>(
            <View>
              <Text variant="displaySmall">{item}</Text>
              <Divider style={{}}/>
            </View>
          )
        }
        />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
