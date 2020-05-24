import React from 'react';
import {View, TextInput, StyleSheet, Button} from 'react-native';



const GoalInput = props =>{
    return (
        <View style={goalInputStyle.inputContainer}>
        <TextInput
          placeholder='add new goal'
          style={goalInputStyle.input}
          onChangeText={props.goalInputHandler}
          value={props.enteredGoal}
        />
        <Button title="Add" onPress={props.addGoalHandler} />
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