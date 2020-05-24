import React,{useState} from 'react';
import {View, TextInput, StyleSheet, Button} from 'react-native';



const GoalInput = props =>{
    const [enteredGoal, setEnteredGoal] = useState('');
    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
      };
    
    return (
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
    );
};


const goalInputStyle = StyleSheet.create({
    input: {
        borderColor: 'black',
        borderWidth: 1,
        width: 150,
        padding: 10
      },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }
});



export default GoalInput;