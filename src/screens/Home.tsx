import { View, StyleSheet, Image } from "react-native";
import TodoDescription from "../components/TodoDescription";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Image source={require('../../assets/Logo.png')} />
      </View>
      <TodoDescription/>
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
  }
})