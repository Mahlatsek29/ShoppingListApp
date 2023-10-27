import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Ionicons } from '@expo/vector-icons';
import { useSelector } from "react-redux/es/hooks/useSelector";

const data = [
  { id: 1, title: "Fruits" },
  { id: 2, title: "Vegetables" },
];

const ShoppingList = () => {

    const list= useSelector {(state) => state.lists};  
  const [items, setItems] = useState(data);

  const deleteItem = (itemId) => {
    const updatedItems = items.filter(item => item.id !== itemId);
    setItems(updatedItems);
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{item.title}</Text>
        <TouchableOpacity 
          style={styles.deleteButton}
          onPress={() => {
            deleteItem(item.id);
          }}
        >
          <Ionicons name="trash" size={30} color="black" />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={items}
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
    justifyContent:"space-between",
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
