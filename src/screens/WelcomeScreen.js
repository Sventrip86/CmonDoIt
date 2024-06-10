import React from 'react'
import { Text } from '@rneui/base'
import { ScrollView, View, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native'
import AddToDoScreen from './AddToDoScreen'
import ToDoListScreen from './ToDoListScreen'


const WelcomeScreen = () => {
  return (
    <SafeAreaView>
        <ScrollView>
        <View>
            <Text>Welcome</Text>

            <AddToDoScreen/>
            <ToDoListScreen/>

        </View>

        </ScrollView>
        

    </SafeAreaView>
    
  )
}

export default WelcomeScreen


const styles = StyleSheet.create({
    
})