import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback } from 'react-native'; 
// TouchableNativeFeedback only works for Andriod

const GoalItem = props => {
  return (
    <TouchableOpacity 
      onPress={props.onDelete.bind(this, props.id)} 
      activeOpacity={0.8}
      underlayColor="blue"
    >
      <View style={styles.listItem} >
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    // backgroundColor: "#ccc",
    borderColor: 'black',
    opacity: 0.8,
    borderWidth: 1,
  }
});

export default GoalItem;