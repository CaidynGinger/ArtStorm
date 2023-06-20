import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import CreateCompetitionScreen from "./screens/CreateCompetitionScreen";
import { SafeAreaView } from "react-native";
import HomeScreenNavigation from "./routes/HomeScreenNavigation";
import { useContext, useEffect, useState } from "react";
import LoginScreen from "./screens/Auth/LoginScreen";
import AuthContentProvider, { AuthContext } from "./Store/auth-context";
import { createStackNavigator } from "@react-navigation/stack";
import SignUpScreen from "./screens/Auth/SignUpScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function App() {
  const [Location, setLocation] = useState("Home");

  const Auth = () => {
    return (
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  };

  const App = () => {
    return (
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
          options={{ headerShown: Location == "Home" }}
          initialParams={{ setLocation: setLocation, Location: Location }}
        />
        <Drawer.Screen
          name="CreateComp"
          options={{ title: "Create Competition" }}
          component={CreateCompetitionScreen}
        />
      </Drawer.Navigator>
    );
  };

  const authHandler = () => {
    const [isTryingLogin, setIsTryingLogin] = useState(true);

    const authCtx = useContext(AuthContext);
    useEffect(() => {
      async function fetchToken() {
        const storedToken = await AsyncStorage.getItem("token");
        if (storedToken) {
          authCtx.authenticate(storedToken);
        }
        setIsTryingLogin(false);
      }
      fetchToken();
    }, []);
    if (isTryingLogin) {
      return App();
    }
    return Auth();
  };

  return (
    <AuthContentProvider>
      <StatusBar style="light" />
      <NavigationContainer
        theme={{
          colors: {
            background: "#333",
            text: "white",
          },
        }}
      >
        {authHandler()}
      </NavigationContainer>
    </AuthContentProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333",
  },
});
