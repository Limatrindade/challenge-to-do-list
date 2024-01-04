import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";

interface IProps {
  textTask: String
  onFinallyTask: () => void;
  onRemove: () => void;
  check: boolean
  ativo: boolean
}

type StyleSheet = {
  ativo: React.CSSProperties;
  inativo: React.CSSProperties;
};

export default function List({ textTask, onFinallyTask, onRemove, check, ativo }: IProps) {
  const estiloDinamico = ativo ? styles.ativo : styles.inativo;
  
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onFinallyTask}
      >
        { 
          check ? <Image source={require('../../../assets/Layer1.png')} /> : <Image source={require('../../../assets/Layer1closed.png')}/> 
        }
      </TouchableOpacity>
      <Text style={[estiloDinamico]}>{textTask}</Text>
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
    padding: 15,
  },
  ativo: {
    fontSize: 14,
    color: "#F2F2F2"
  },
  inativo: {
    fontSize: 14,
    color: "#808080",
    textDecorationLine: 'line-through'
  }
})