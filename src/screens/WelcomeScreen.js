import React from 'react'
import { Text } from '@rneui/base'
import { ScrollView, View, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native'
import AddToDoScreen from './AddToDoScreen'
import ToDoListScreen from './ToDoListScreen'


const WelcomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView>
        <View>
            <Text h2>Hey Fabs</Text>

            <AddToDoScreen/>
            <ToDoListScreen/>

        </View>

        </ScrollView>
        

    </SafeAreaView>
    
  )
}

export default WelcomeScreen


const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10
    }
    
})