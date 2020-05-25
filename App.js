import React, { useState } from 'react';
import {
  StyleSheet, View, FlatList, Button
} from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput'

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddModel, setAddModel] = useState(false);

  const addGoalHandler = (goalTitle) => {
    // console.log(enteredGoal);

    if(goalTitle.length===0)
    {
      return;
    }
    setCourseGoals(currentGoals =>
      [...currentGoals,
      { id: Math.random().toString(), value: goalTitle }
      ]);
    //setEnteredGoal('');
    setAddModel(false);
  };

  const removeGoalHandler = (goalId) => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) =>
        goal.id !== goalId
      );
    });
  };

  const cancelGoalHandler =() =>{
    setAddModel(false);
  }

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setAddModel(true)} />
      <GoalInput
        onAddGoal={addGoalHandler}
        visible={isAddModel}
        onCancel={cancelGoalHandler}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem
            title={itemData.item.value}
            onDelete={removeGoalHandler}
            id={itemData.item.id}
          />
        )} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 90
  }
})