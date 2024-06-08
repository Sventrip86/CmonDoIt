import React from 'react'
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingsScreen from '../screens/SettingsScreen';
import HomeStackNavigator from './HomeStackNavigator';


const TabNavigator = () => {

    const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
        <Tab.Screen name='Home' component={HomeStackNavigator}/>
        <Tab.Screen name='Settings' component={SettingsScreen}/>


    </Tab.Navigator>
    
  )
}

export default TabNavigator