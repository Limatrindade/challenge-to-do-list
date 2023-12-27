import { TextInput, View, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function TodoDescription() {
    return (
        <View style={styles.container}>
          <TextInput
            placeholder="  Adicione uma nova tarefa"
            placeholderTextColor={'#808080'} 
            keyboardType="default"
            style={styles.input}
          />
          <TouchableOpacity>
          <View style={styles.button}>
            <Image source={require('../../../assets/buttonadd.png')} />
          </View>
          </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
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
    marginRight: 8
  },
  button: {
    width: 52,
    height: 52,
    backgroundColor: "#1E6F9F",
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  }
})