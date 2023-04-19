import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ToDoItem from "./components/ToDoItem";

export default function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);
  const colors = [
    "white",
    "#FFC09F",
    "#FFEE93",
    "#A0CED9",
    "#ADF7B6",
    "#FFCCF9",
    "#ECD4FF",
    "#FFABAB",
  ];
  const [backgroundColor, setBackgroundColor] = useState("");

  const addItem = () => {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  };

  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  };

  const clearItems = () => {
    setItems([]);
  };

  const renderItem = ({ item }) => (
    <Pressable
      style={{
        backgroundColor: item,
        borderWidth: 2,
        borderColor: "black",
        borderRadius: "100%",
        marginHorizontal: 5,
        marginVertical: 3,
        width: 25,
        height: 25,
      }}
      onPress={() => {
        setBackgroundColor(item);
      }}
    ></Pressable>
  );

  return (
    <View style={{ flex: 1, backgroundColor: backgroundColor }}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Digite o nome para tarefa."
            placeholderTextColor={"#888"}
            onChangeText={setInputText}
            value={inputText}
          />
          <TouchableOpacity onPress={addItem} style={styles.touchableOpacity}>
            <Ionicons name="create" size={28} color="black" />
          </TouchableOpacity>
        </View>

        <ScrollView>
          {items.map((item, index) => {
            return <ToDoItem text={item} id={index} onCheck={deleteItem} />;
          })}
        </ScrollView>

        <View style={{ position: "absolute", bottom: 50 }}>
          <FlatList numColumns={4} data={colors} renderItem={renderItem} />
        </View>

        <Pressable style={styles.button} onPress={clearItems}>
          <Text style={styles.buttonText}>Clear</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, marginTop: 30, marginBottom: 30, alignItems: "center" },

  input: {
    paddingVertical: 7,
    paddingHorizontal: 10,
    margin: 5,
    flexWrap: "wrap",
  },

  inputContainer: {
    flexDirection: "row",
    marginHorizontal: 30,
  },

  touchableOpacity: {
    justifyContent: "center",
    margin: 5,
  },

  itemText: {
    padding: 5,
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
  },

  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
