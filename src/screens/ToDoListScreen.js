import React, { useContext } from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import { ToDoListContext } from '../ToDOListContext'



const ToDoListScreen = () => {
    const { toDoList, removeToDo } = useContext(ToDoListContext);
  

    return(
            <ScrollView>
                {/* iterate to the list of todos  */}
                {toDoList.map( toDo => (
                    <View key={ toDo.id } > 
                    <Text>{toDo.text}</Text>
                    {/* every item can be removed pressing the button  */}
<Button title='remove' onPress={() => removeToDo(toDo.id)}/>
                    </View>
                ))}

            </ScrollView>
    )
}

export default ToDoListScreen