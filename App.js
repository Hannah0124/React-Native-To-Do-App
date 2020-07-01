import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native'; // FlatList: infinite view

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (goalTitle) => {
    // setCourseGoals([...courseGoals, enteredGoal]); // [previousState, newState]
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { 
        id: Math.random().toString(), 
        value: goalTitle
      }
    ]);
  };

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler}/>

      <FlatList 
        keyExtractor={(item, index) => item.id}
        data={courseGoals} 
        renderItem={itemData =>
          <GoalItem 
            id={itemData.item.id}
            title={itemData.item.value} 
            onDelete={removeGoalHandler}
            // onDelete={removeGoalHandler.bind(this, itemData.item.id)}
          />
        } 
      />

      {/* Same as above */}
      {/* {courseGoals.map((goal, i) => <View style={styles.listItem}><Text key={i}>{goal}</Text></View>)} */}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});

