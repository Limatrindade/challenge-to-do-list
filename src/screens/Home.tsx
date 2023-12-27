import { View, StyleSheet, Image, Text } from "react-native";
import TodoDescription from "../components/TodoDescription";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Image source={require('../../assets/Logo.png')} />
      </View>
      <TodoDescription/>
      <View style={styles.containerReminder}>
        <View style={styles.reminderCriadas}>
          <Text style={styles.criadas}>Criadas</Text>
          <Text style={styles.label}>0</Text>
        </View>

        <View style={styles.reminderConcluidas}>
          <Text style={styles.concluidas}>Concluídas</Text>
          <Text style={styles.label}>0</Text>
        </View>
      </View>

      <View style={styles.containerEmpty}>
        <Image source={require('../../assets/Clipboard.png')} style={{ width: 56, height: 56 }}/>
        <Text style={styles.textEmptyLarge}>Você ainda não tem tarefas cadastradas</Text>
        <Text style={styles.textEmptySmall}>Crie tarefas e organize seus itens a fazer</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
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
    color: "#D9D9D9"
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
  },
  containerEmpty: {
    width: 327,
    height: 208,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 39
  },
  textEmptyLarge: {
    color: "#808080",
    fontWeight: "bold",
    fontSize: 14,
    marginTop: 20
  },
  textEmptySmall: {
    color: "#808080",
    fontSize: 14
  }
})