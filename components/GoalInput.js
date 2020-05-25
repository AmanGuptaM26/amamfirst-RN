import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button, Modal } from 'react-native';



const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');
    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };
    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
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
                <View style={goalInputStyle.buttonViewStyles}>
                    <View style={goalInputStyle.buttonStyles}>
                        <Button title="Cancel" color="red" onPress={props.onCancel} />
                    </View>
                    <View style={goalInputStyle.buttonStyles}>
                        <Button title="Add" onPress={addGoalHandler} />
                    </View>
                </View>
            </View>
        </Modal>
    );
};


const goalInputStyle = StyleSheet.create({
    input: {
        borderColor: 'black',
        borderWidth: 1,
        width: '80%',
        padding: 10,
        marginBottom: 10
    },
    inputContainer: {
        //flexDirection: 'row',
        //justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    },
    buttonViewStyles: {
        flexDirection: "row",
        justifyContent: 'space-between',
        width: '60%'
    },
    buttonStyles: {
        width: '40%'
    }
});



export default GoalInput;