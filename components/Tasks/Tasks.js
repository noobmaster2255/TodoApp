import React from "react";
import { FlatList, View, Text, Switch, TouchableOpacity } from "react-native";
import styles from "./styles";

const Tasks = ({ tasks, toggleStatus, deleteTask }) => {
  return (
    <View>
      {tasks.length === 0 ? (
        <Text style={styles.emptyText}>Todo list is empty</Text>
      ) : (
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.taskCard}>
              <Text>{item.title}</Text>
              <Switch value={item.status} onValueChange={() => toggleStatus(item.id)} />
              <TouchableOpacity onPress={() => deleteTask(item.id)}>
                <Text style={styles.deleteButton}>Delete</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default Tasks;
