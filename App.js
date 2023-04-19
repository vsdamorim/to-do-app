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
  Button,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
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
        borderWidth: 1,
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
        <View style={styles.appHeader}>
          <View style={styles.appIconContainer}>
            <MaterialCommunityIcons
              style={styles.appIcon}
              name="note-edit"
              size={28}
            />
          </View>
          <View style={styles.appTextContainer}>
            <Text style={styles.appText}>Notify</Text>
          </View>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Digite o nome para tarefa."
            selectionColor="black"
            placeholderTextColor={"#888"}
            onChangeText={setInputText}
            value={inputText}
          />
          <TouchableOpacity onPress={addItem} style={styles.touchableOpacity}>
            <Ionicons style={styles.appIcon} name="create" size={28} />
          </TouchableOpacity>
        </View>

        <View style={styles.listContainer}>
          <ScrollView>
            {items.map((item, index) => {
              return (
                <ToDoItem
                  key={index}
                  text={item}
                  id={index}
                  onCheck={deleteItem}
                />
              );
            })}

            <View style={styles.colorsContainer}>
              <FlatList numColumns={4} data={colors} renderItem={renderItem} />
            </View>

            <Button color="black" onPress={clearItems} title="Clear" />
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, marginTop: 30, marginBottom: 30, alignItems: "center" },

  appHeader: {
    flexDirection: "row",
  },

  appIconContainer: { margin: 5, justifyContent: "center" },

  appIcon: {
    color: "white",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 4,
  },

  appTextContainer: {
    justifyContent: "center",
  },

  appText: {
    margin: 5,
    padding: 5,
    fontFamily: "Helvetica",
    fontWeight: 600,
    fontSize: 32,
    color: "white",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 4,
  },

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
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    backgroundColor: "black",
  },

  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },

  listContainer: {
    flex: 1,
  },

  colorsContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 10,
  },
});
