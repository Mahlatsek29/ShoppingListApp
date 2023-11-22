import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const SplashScreen = ({ navigation }) => {
  const handleCartPress = () => {
    navigation.navigate("Login");
  };

  return (
    <ImageBackground
      source={require("../images/list.jpeg")} 
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View style={styles.circleContainer}>
          <TouchableOpacity
            onPress={handleCartPress}
            style={styles.cartContainer}
          >
            <Icon name="shopping-cart" size={250} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover", 
    justifyContent: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  splashText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "black",
  },
  circleContainer: {
    width: 300,
    height: 300,
    borderRadius: 300,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  cartContainer: {
    position: "absolute",
    bottom: 20,
  },
});

export default SplashScreen;
