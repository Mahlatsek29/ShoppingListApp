import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity, Alert,
} from "react-native";
import React, { useState } from "react";
import {useDispatch} from " react-redux";

const ShoppingListHeader = () => {
  const dispatch = useDispatch();
  const [shopping, setShopping] = useState("");

  const onSubmitList = () => {
    if (shopping.trim().length === 0) {
      console.log('empty');
      Alert.alert("You need to enyer a list"
      );
      setShopping("");
      return;
    }

    dispatch(addShopping(shopping)); 

    setShopping("");
  };

  return (
    <View>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          textAlign: "center",
          marginTop: 10,
        }}
      >
        Shopping List
      </Text>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextInput
          style={{
            borderColor: "black",
            borderWidth: 1,
            padding: 10,
            margin: 10,
            width: "90%",
            borderRadius: 5,
          }}
          placeholder="Add Shopping List"
          onChangeText={setShopping}
          value={shopping}
        />
        <TouchableOpacity
          style={{
            backgroundColor: "black",
            padding: 10,
            margin: 10,
            width: "90%",
            borderRadius: 5, // Corrected 'boarderRadius' to 'borderRadius'
            alignItems: "center",
          }}
          onPress={onSubmitList} // Corrected the onPress handler
        >
          <Text style={{ color: "white" }}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ShoppingListHeader;