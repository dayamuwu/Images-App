import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image, StyleSheet, Text } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import birdLogo from './assets/logoBird.jpg'

import HomeScreen from './screens/HomeScreen';
import ImageScreen from './screens/ImageScreen';

const Stack = createNativeStackNavigator()

export default function App() {

  const [openSearch, setOpenSearch] = useState(false)

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name='HomeScreen' 
          options={{
            headerLeft: () => <Image source={birdLogo} style={styles.logo} />,
            headerRight: () => (
              <Text 
                style={{color: "white", fontSize: 18 }}
                onPress={() => setOpenSearch(!openSearch) }
              >
                {openSearch ? "Close" : "Search"}
              </Text>
            ),
            title: "Images App",
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerStyle: {
              backgroundColor: "#0D0D0D",
            },
          }}
        >

          {(props) => <HomeScreen{...props} openSearch={openSearch} />}
          </Stack.Screen>
        <Stack.Screen name='ImageScreen' component={ImageScreen} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}
 
const styles = StyleSheet.create({
  logo: {
    width: 37,
    height: 37,
    marginEnd: 5,
    borderRadius: 5
  }
})