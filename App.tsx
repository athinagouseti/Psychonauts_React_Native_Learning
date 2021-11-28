import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Homescreen from './components/homescreen/Homescreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Characters from './components/characters/Characters';
import Favourites from './components/favourites/Favourites';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Homescreen} />
          <Tab.Screen name="Characters" component={Characters} />
          <Tab.Screen name="Favourites" component={Favourites} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
