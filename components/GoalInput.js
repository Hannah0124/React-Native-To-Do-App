import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Modal } from 'react-native'; 

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput 
          placeholder="Course Goal" 
          style={styles.input} 
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        {/* <Button title="ADD" onPress={() => props.onAddGoal(enteredGoal)} /> */}

        {/* Same as above */}
        <Button title="CANCEL" color="red" onPress={props.onCancel} />
        <Button title="ADD" onPress={props.onAddGoal.bind(this, enteredGoal)} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1, // important to be in the center!
    // flexDirection: 'column', 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  input: {
    width: '80%', 
    borderBottomColor: 'black', 
    borderBottomWidth: 1,
    padding: 10,
    marginBottom: 10
  }
});

export default GoalInput;