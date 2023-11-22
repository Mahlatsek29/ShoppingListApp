import React from "react";
import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import ShoppingListHeader from "./src/components/ShoppingListHeader";
import ShoppingList from "./src/components/ShoppingList";
import SplashScreen from "./src/screens/SplashScreen";
import LoginScreen from "./src/screens/LoginScreen";
import RegistrationScreen from "./src/screens/RegistrationScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}  />
        <Stack.Screen name="Register" component={RegistrationScreen} options={{ headerShown: false }} />
        <Stack.Screen
          name="Home"
          component={({ navigation }) => (
            <Provider store={store}>
              <SafeAreaView>
                <ShoppingListHeader />
                <ShoppingList />
              </SafeAreaView>
            </Provider>
          )}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
