import React from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import { deleteList } from "../redux/listSlice";

const ShoppingList = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.list);

  const renderItem = ({ item }) => {
    const deleteItem = () => {
      dispatch(deleteList({ id: item.id }));
    };

    return (
      <View style={styles.item}>
        <Text style={styles.title}>{item.name}</Text>
        <TouchableOpacity style={styles.deleteButton} onPress={deleteItem}>
          <Ionicons name="trash" size={30} color="black" />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={list}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#e9e9e9",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
  },
  deleteButton: {
    fontSize: 24,
    color: "red",
  },
});

export default ShoppingList;
