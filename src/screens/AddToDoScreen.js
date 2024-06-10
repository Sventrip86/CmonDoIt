import React, { useContext, useState} from "react";
import { Text } from "@rneui/base";
import { ScrollView, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native";
import { Input } from "@rneui/themed";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { ToDoListContext } from "../ToDOListContext";
import { ListItem } from '@rneui/themed';



const AddToDoScreen = () => {


    const [newTODO, setNewTODO] = useState('')
    const [ priority, setPriority] = useState('normal')
    const { addToDo } = useContext(ToDoListContext)
    // hold index to set the prio button group
    const [selectedButtonIndex, setSelectedButtonIndex] = useState(0);

    // add  a new to do and reset the text field
    const handleAddToDo = () => {
        //control for the prio selected 
        let prio 
        if(selectedButtonIndex === 0){
            prio = 'low'
        } else if (selectedButtonIndex === 2){
            prio = 'high'
        } else prio = 'normal'

        addToDo({id: Date.now().toString(), text: newTODO, priority: prio })
        setNewTODO('')
    }


  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          {/* <Text h4 style={styles.title}>ADD TO DO</Text> */}

          <Input
            autoFocus={true} // If true, focuses the input on componentDidMount or useEffect. The default value is false
            cursorColor='green'
            containerStyle={{}}
            disabledInputStyle={{ background: "#ddd" }}
            inputContainerStyle={{}}
            errorMessage="Required"
            errorStyle={{}}
            errorProps={{}}
            inputStyle={{}}
            label="TODO"
            labelStyle={{}}
            labelProps={{}}
            leftIcon={<Icon name="pencil" size={20} />}
            leftIconContainerStyle={{}}
            rightIcon={<Icon raised name="plus-box-outline" size={30} onPress={handleAddToDo}/>}
            rightIconContainerStyle={{}}
            placeholder="Enter TODO"
            onChangeText={setNewTODO} // set text for the TODO
            value={newTODO} 
            
          />
 <ListItem.ButtonGroup

                buttons={['Low', 'Normal', 'High']}
                selectedIndex={selectedButtonIndex}
                onPress={(index) => setSelectedButtonIndex(index)}
              />

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddToDoScreen;

const styles = StyleSheet.create({
    title: {
        textAlign: 'center'
    }
});
