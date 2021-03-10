import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import CoinsScreen from "./CoinScreen";
import CoinDetailsScreen from "../coinDetail/CoinsDetailScreen";
import Colors from "../../resources/colors";
const Stack = createStackNavigator();
const CoinsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.blackPearl,
          shadowOpacity: Colors.blackPearl,
        },
        headerTintColor: Colors.white,
      }}>
      <Stack.Screen name="Coins" component={CoinsScreen} />
      <Stack.Screen name="CoinDetails" component={CoinDetailsScreen} />
    </Stack.Navigator>
  );
};
export default CoinsStack;
