import React,{useState} from 'react';
import {View, TextInput, StyleSheet, Button, Modal} from 'react-native';



const GoalInput = props =>{
    const [enteredGoal, setEnteredGoal] = useState('');
    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
      };
    
    return (
        <Modal visible={props.visible} animationType="slide">
        <View style={goalInputStyle.inputContainer}>
        <TextInput
          placeholder='add new goal'
          style={goalInputStyle.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        {/* 
        use arrow function or use bind function
        <Button title="Add" onPress={()=>
            props.onAddGoal(enteredGoal)} /> */}
            <Button title="Add" on onPress={props.onAddGoal.bind(this,enteredGoal)}/>
      </View>
      </Modal>
    );
};


const goalInputStyle = StyleSheet.create({
    input: {
        borderColor: 'black',
        borderWidth: 1,
        width: 150,
        padding: 10,
        marginBottom:5
      },
    inputContainer: {
        //flexDirection: 'row',
        //justifyContent: 'space-between',
        alignItems: 'center',
        flex:1,
        justifyContent:'center'
      }
});



export default GoalInput;