import { View, StyleSheet, Image, Text, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";
import { useState } from "react";
import List from "../components/List";
import LabelEmpty from "../components/LabelEmpty";

export default function Home() {
  const [task, setTask] = useState("");
  const [listOfTask, setListOfTask] = useState<string[]>
    ([])
  const [notHaveTask, setNotHaveTask] = useState(true);

  function handleListWithTasks() {
    if (task.length <= 3) {
      alert("Por favor adicione uma tarefa");
      setTask("");
      return
    }

    if (listOfTask.includes(task)) {
      Alert.alert("Essa tarefa já foi adicionada");
      setTask("");
      return
    }

    // console.log(task)

    setNotHaveTask(false);

    setListOfTask([...listOfTask, task])
    // setListOfTask(prevState => [...prevState, task])

    console.log(listOfTask)

    setTask("");
  }

  function handleRemoveTask(item: string) {
    // console.log(item)

    // Alert.alert('Tem certeza que deseja apagar essa tarefa?', [
    //   {
    //     text: 'Cancelar',
    //     onPress: () => console.log('Cancel Pressed'),
    //     style: 'cancel',
    //   },
    //   { text: 'OK', onPress: () => console.log('OK Pressed') },
    // ]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Image source={require('../../assets/Logo.png')} />
      </View>

      <View style={styles.containerInput}>
        <TextInput
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor={'#808080'}
          style={styles.input}
          value={task}
          onChangeText={e => setTask(e)}
        />
        <TouchableOpacity
          onPress={handleListWithTasks}
        >
          <View style={styles.button}>
            <Image source={require('../../assets/buttonadd.png')} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.containerReminder}>
        <View style={styles.reminderCriadas}>
          <Text style={styles.criadas}>Criadas</Text>
          <View style={{ backgroundColor: "#333333", borderRadius: 9 }}>
            <Text style={styles.label}>  0</Text>
          </View>
        </View>

        <View style={styles.reminderConcluidas}>
          <Text style={styles.concluidas}>Concluídas</Text>
          <View style={{ backgroundColor: "#333333", borderRadius: 9 }}>
            <Text style={styles.label}>  0</Text>
          </View>
        </View>
      </View>

      <View style={{ width: 327, height: 2, backgroundColor: "#262626", marginTop: 20, marginBottom: 20 }}></View>

      {/* <FlatList
        keyExtractor={item => item}
        data={listOfTask}
        renderItem={({ item }) => (
          <List
            key={item}
            textTask={task}
            onRemove={() => handleRemoveTask(item)}
          />
        )} /> */}

      {
        notHaveTask ? <LabelEmpty /> : <FlatList
          keyExtractor={item => item}
          data={listOfTask}
          renderItem={({ item }) => (
            <List
              key={item}
              textTask={task}
              onRemove={() => handleRemoveTask(item)}
            />
          )} />
      }

    </View>
  )
}

const styles = StyleSheet.create({
  containerInput: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 18
  },
  input: {
    backgroundColor: "#262626",
    width: 271,
    height: 54,
    borderRadius: 6,
    color: "#fff",
    marginRight: 8,
    padding: 16
  },
  button: {
    width: 52,
    height: 52,
    backgroundColor: "#1E6F9F",
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    justifyContent: "center",
    alignItems: "center"
  },
  containerLogo: {
    marginTop: 90,
    marginBottom: 40
  },
  containerReminder: {
    flexDirection: "row",
    width: 327,
    height: 19,
    justifyContent: "space-between",
    marginTop: 30
  },
  reminderCriadas: {
    flexDirection: "row",
    width: 87,
    gap: 8
  },
  criadas: {
    color: "#4EA8DE",
    fontSize: 14,
    fontWeight: "bold",
  },
  label: {
    color: "#D9D9D9",
    width: 25,
    height: 19,
    fontWeight: "bold"
  },
  reminderConcluidas: {
    flexDirection: "row",
    width: 87,
    gap: 8
  },
  concluidas: {
    color: "#8284FA",
    fontSize: 14,
    fontWeight: "bold",
  }
})