import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import CreateCompetitionScreen from "./screens/CreateCompetitionScreen";
import { SafeAreaView } from "react-native";
import HomeScreenNavigation from "./routes/HomeScreenNavigation";
import { useEffect, useState } from "react";

const Drawer = createDrawerNavigator();

export default function App() {

  const [Location, setLocation] = useState('Home')

  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer
        theme={{
          colors: {
            background: "#333",
            text: "white",
          },
        }}
      >
        <Drawer.Navigator
          screenOptions={{
            drawerContentStyle: {
              backgroundColor: "#333",
            },
            drawerActiveBackgroundColor: {
              color: "transparent",
            },
            drawerActiveTintColor: "white",
            drawerInactiveTintColor: "white",
            headerTintColor: "white",
          }}
          initialRouteName="Home"
        >
          <Drawer.Screen
            name="Home"
            component={HomeScreenNavigation}
            options={{ headerShown: Location == 'Home' }}
            initialParams={{setLocation: setLocation, Location: Location}}
          />
          <Drawer.Screen
            name="CreateComp"
            options={{ title: "Create Competition" }}
            component={CreateCompetitionScreen}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333",
  },
});
