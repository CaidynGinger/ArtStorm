import { View, Text } from "react-native";
import React, { useEffect } from "react";

import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import CompetitionFullView from "../Components/CompetitionFullView";
import { useIsFocused } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function HomeScreenNavigation({ navigation, route }) {

  const { setLocation, Location } = route.params;

  // useEffect(() => {
  //   // setLocation("Home")
  //   console.log(isFocused);
  //   console.log(route.name);
  //   if (route.name == 'Home') {
  //     // setLocation("Home")
  //   }
  // }, [isFocused])

  // const isFocused = useIsFocused();
  

  return (
    <Stack.Navigator initialRouteName="Landing">
      <Stack.Screen
        options={{ headerShown: Location !== 'Home' }}
        name="Landing"
        component={HomeScreen}
      />
      <Stack.Screen
        name="CompetitionFullView"
        component={CompetitionFullView}
        initialParams={{setLocation: setLocation}}
      />
    </Stack.Navigator>
  );
}
