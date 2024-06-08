import React from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SettingsScreen from '../screens/SettingsScreen'
import WelcomeScreen from '../screens/WelcomeScreen'


const HomeStackNavigator = () => {

    const Stack = createNativeStackNavigator()


  return (
    <Stack.Navigator initialRouteName='HomeScreen'>
      
        <Stack.Screen name='Welcome' component={WelcomeScreen} options={{ headerShown: false }}/> 
        




    </Stack.Navigator>
  )
}

export default HomeStackNavigator