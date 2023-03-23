import { useState } from "react";
import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import Count from "../components/Count";
import Empty from "../components/Empty";
import Header from "../components/Header";
import Task from "../components/Task";
import { styles } from "./styles";

export function Home() {
  const [ items, setItems ] = useState([])
  const [task, setTask] = useState('')

  function handleItemAdd() {
    const newTask = {
      id: items.length + 1,
      title: task,
      isComplete: false
    };
    setItems(prevState => [...prevState, newTask])
    setTask('')
  }

  function handleItemDelete(id: number) {
    setItems(prevState => prevState.filter(item => item.id !== id))
  }

  function handleTaskComplete(id: number) {
    const updateTask = items.map(task => {
      if (task.id === id) {
        return {...task, isComplete: !task.isComplete}
      }
      return task
    })

    setItems(updateTask)
  }

  const tasksIsComplete = items.length > 0 ? items.filter(task => (task.isComplete)) : [];

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
          onChangeText={setTask}
          value={task}
        />
        <TouchableOpacity style={styles.button} onPress={handleItemAdd}>
          <Image source={require('../../assets/plus.png')} />
        </TouchableOpacity>
      </View>
      <Count countTasks={items.length} tasksIsComplete={tasksIsComplete.length} />
      <Empty itemsCount={items.length} />
      <FlatList 
        style={ [styles.flatList, items.length > 0 ? styles.dBlock : styles.dNone] }
        data={items}
        keyExtractor={item => item.id} 
        renderItem={({ item }) => <Task title={item.title} isComplete={item.isComplete} onComplete={() => handleTaskComplete(item.id)} onDelete={() => handleItemDelete(item.id)} />}
      />
    </View>
  )
}