import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  const [inputText, setInputText] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite o nome para tarefa."
          placeholderTextColor={"#888"}
          onChangeText={setInputText}
        />
        <Button
          // onPress={setToDoList((prevValue) => {
          //   return [...prevValue, inputText];
          // })}
          title="OK"
        />
      </View>

      <View>
        <Text>{inputText}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightgray",
  },

  input: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    margin: 5,
  },

  inputContainer: {
    flexDirection: "row",
  },
});
