import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ToDoItem = (props) => {
  const [isDone, setIsDone] = useState(false);

  return (
    <View style={styles.itemContainer}>
      <Text
        onPress={() => {
          setIsDone(!isDone);
        }}
        style={{
          margin: 5,
          fontSize: 18,
          fontWeight: 600,
          textDecorationLine: isDone ? "line-through" : "none",
        }}
      >
        {props.text}
      </Text>
      <View style={styles.deleteIconContainer}>
        <Ionicons
          onPress={() => {
            props.onCheck(props.id);
          }}
          style={styles.deleteIcon}
          name="trash"
          size={16}
          color="black"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    padding: 5,
    marginHorizontal: 30,
    flexDirection: "row",
    borderRadius: "10px",
    justifyContent: "center",
  },

  deleteIconContainer: {
    justifyContent: "center",
  },

  deleteIcon: {
    margin: 5,
  },
});

export default ToDoItem;
