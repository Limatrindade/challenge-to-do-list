import { View, Image, Text, StyleSheet } from "react-native";

export default function LabelEmpty() {
  return (
    <View style={styles.containerEmpty}>
      <Image source={require('../../../assets/Clipboard.png')} style={{ width: 56, height: 56 }} />
      <Text style={styles.textEmptyLarge}>Você ainda não tem tarefas cadastradas</Text>
      <Text style={styles.textEmptySmall}>Crie tarefas e organize seus itens a fazer</Text>
    </View>
  )
}

const styles = StyleSheet.create({
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
});

