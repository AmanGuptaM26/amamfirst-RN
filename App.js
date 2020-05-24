import React, { useState } from 'react';
import {
  StyleSheet, View,  FlatList
} from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput'

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    // console.log(enteredGoal);
    setCourseGoals(currentGoals =>
      [...currentGoals,
      { id: Math.random().toString(), value: enteredGoal }
      ]);
    setEnteredGoal('');
  };

  return (
    <View style={styles.screen}>
      <GoalInput
      goalInputHandler={goalInputHandler}
      enteredGoal={enteredGoal}
      addGoalHandler={addGoalHandler}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => (
         <GoalItem title={itemData.item.value} />
        )} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 90
  }
})