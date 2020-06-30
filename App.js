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
        key: Math.random().toString(), 
        value: goalTitle
      }
    ]);
  };

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler}/>

      <FlatList 
        keyExtractor={(item, index) => item.key}
        data={courseGoals} 
        renderItem={itemData =>
          <GoalItem title={itemData.item.value} />
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

