import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


const GoalItem = props =>{
    return (
        <View style={goalItemStyle.listItem}>
        <Text>{props.title}</Text>
      </View>
    );
};


const goalItemStyle = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1
      }
});
export default GoalItem;