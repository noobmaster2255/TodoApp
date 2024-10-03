import React, { useState } from 'react';
import { View } from 'react-native';
import Form from './components/Form/Form';
import Tasks from './components/Tasks/Tasks';
import styles from './styles';

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title) => {
    if (title.trim()) {
      setTasks([...tasks, { id: Date.now(), title, status: false }]);
    }
  };

  const toggleStatus = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, status: !task.status } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <View style={styles.container}>
      <Form addTask={addTask} />
      <Tasks tasks={tasks} toggleStatus={toggleStatus} deleteTask={deleteTask} />
    </View>
  );
}

