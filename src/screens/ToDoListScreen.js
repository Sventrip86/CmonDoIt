import React, { useContext } from 'react';
import { View,  Button, ScrollView, StyleSheet } from 'react-native';
import { ToDoListContext } from '../ToDOListContext'
import { Text } from '@rneui/base';



const ToDoListScreen = () => {
    const { toDoList, removeToDo } = useContext(ToDoListContext);

    
  

    return(
            <ScrollView style={styles.container}>
                {/* iterate to the list of todos  */}
                {toDoList.map( toDo => (
                    <View key={ toDo.id } > 
                    <Text h4>{toDo.text}</Text>
                    <Text>PRIORITY: {toDo.priority} CREATED: {toDo.createdAt}</Text>
                    {/* every item can be removed pressing the button  */}
<Button title='remove' onPress={() => removeToDo(toDo.id)}/>
                    </View>
                ))}

            </ScrollView>
    )
}

export default ToDoListScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10
    }, 
    title: {
        textAlign: 'center'
    }
    
})