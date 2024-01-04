import { useState } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";

interface IProps {
  textTask: String
  onFinallyTask: () => void;
  onRemove: () => void;
  check: boolean
}

export default function List({ textTask, onFinallyTask, onRemove, check }: IProps) {
  
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onFinallyTask}
      >
        { check ? <Image source={require('../../../assets/Layer1.png')} /> : <Image source={require('../../../assets/Layer1closed.png')}/> }
        {/* <Image source={require('../../../assets/Layer1.png')} /> */}
      </TouchableOpacity>
      <Text style={styles.text}>{textTask}</Text>
      <TouchableOpacity
        onPress={onRemove}
        style={{ width: 20, height: 20, justifyContent: "center", alignItems: "center" }}
      >
        <Image source={require('../../../assets/Layer2.png')} style={{ width: 10, height: 14 }} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 327,
    height: 64,
    borderRadius: 8,
    backgroundColor: "#262626",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 20,
    padding: 15
  },
  text: {
    fontSize: 14,
    color: "#F2F2F2"
  }
})