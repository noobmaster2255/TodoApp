import React, { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";
import styles from "./styles";

const Form = ({ addTask }) => {
  const [title, setTitle] = useState("");

  const handleAddTask = () => {
    addTask(title);
    setTitle("");
  };

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Task Form</Text>
      <TextInput
        placeholder="Enter task title"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />
      <Button title="Add Task" onPress={handleAddTask} disabled={!title.trim()} />
    </View>
  );
};

export default Form;
