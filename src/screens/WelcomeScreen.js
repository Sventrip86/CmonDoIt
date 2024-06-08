import React from 'react'
import { Text } from '@rneui/base'
import { ScrollView, View, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native'


const WelcomeScreen = () => {
  return (
    <SafeAreaView>
        <ScrollView>
        <View>
            <Text>Welcome</Text>
            
        </View>

        </ScrollView>
        

    </SafeAreaView>
    
  )
}

export default WelcomeScreen


const styles = StyleSheet.create({
    
})