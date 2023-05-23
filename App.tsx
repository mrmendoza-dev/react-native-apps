import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import Calculator from './components/Calculator';
import Todo from './components/Todo';
import React, {useState} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Crypto from './components/Crypto';
import CustomTabBar from './components/CustomTabBar';
import {screenOptions} from './components/CustomHeader';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
import { themes } from "./assets/styling";
const HomeScreen = ({ navigation }: any) => (
  <View style={styles.appPage}>
    <Button
      title="Calculator"
      onPress={() => navigation.navigate("Calculator")}
    />
    <Button title="Todo" onPress={() => navigation.navigate("Todo")} />
  </View>
);


const CalculatorApp = () => (
  <View style={styles.appPage}>
    <Calculator />
  </View>
);

const TodoApp = () => (
  <View style={styles.appPage}>
    <Todo />
  </View>
);

const CryptoApp = () => (
  <View style={styles.appPage}>
    <Crypto />
  </View>
);



const SettingsPage= ()=> {
  return (
    <View>
      <Text>Settings Page</Text>
    </View>
  );
}






export default function App() {


  const [darkMode, setDarkMode] = React.useState(false);
  const [currentTheme, setCurrentTheme] = React.useState(themes.lightTheme);
  
  
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={screenOptions}        
        tabBar={(props) => <CustomTabBar {...props} />}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Calculator" component={CalculatorApp} />
        <Tab.Screen name="Todo" component={TodoApp} />
        <Tab.Screen name="Crypto" component={CryptoApp} />
        <Tab.Screen name="Settings" component={SettingsPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


const styles: any = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    color: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  appPage: {
    backgroundColor: "#000",
    color: "#fff",
    alignItems: "stretch",
    justifyContent: "flex-start",
    height: "100%",
  },
});
