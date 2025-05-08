import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import JogadoresScreen from "../screens/JogaresScreen";
import TimeScreen from "../screens/TimeScreen";
import TitulosScreen from "../screens/TitulosScreen";

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Internacional"
        component={TimeScreen}
        options={{
          title: "Internacional",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen name="Jogadores" component={JogadoresScreen}
        options={{
            title: 'Jogadores',
            drawerIcon: ({color, size}) => (
                <Ionicons name="people" color={color} size={size}/>
            )
        }}
      />
      <Drawer.Screen name="Titulo" component={TitulosScreen}
        options={{
            title: 'Titúlos',
            drawerIcon: ({color, size}) =>(
                <Ionicons name="trophy" color={color} size={size}/>
            )
        }}
      />
    </Drawer.Navigator>
  );
}
