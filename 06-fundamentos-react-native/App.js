import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import PrimeiroComponente from "./components/PrimeiroComponente";
import SegundoComponente from "./components/SegundoComponente";
import JavaScriptComponentes from "./components/JavaScriptComponentes";
import Perfil from "./components/Perfil";
import ListaComponentes from "./components/ListaComponentes";

export default function App() {
 
  return (
    <View style={styles.container}>
      <PrimeiroComponente />
      <SegundoComponente />
      <JavaScriptComponentes />

      <ListaComponentes>
        
      </ListaComponentes>

      {/* <Perfil
        nome = "Luan"
        sobrenome = "Barboza"
        idade = {27}
      />
      <Perfil
        nome = "joão"
        sobrenome = "Silva"
        idade = {25}
      />
      <Perfil
        nome = "Maria"
        sobrenome = "Silva"
        idade = {28}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
