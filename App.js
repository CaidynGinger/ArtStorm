import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  createDrawerNavigator,
} from "@react-navigation/drawer";
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
import AppLoading from "expo-app-loading";
import { signOutUser } from "./firebase/Users/Users";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function AuthStack() {
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
}
function CustomDrawerContent(props) {
  const authCtx = useContext(AuthContext);
  const LogoutHandler = () => {
    authCtx.logout();
    signOutUser();
  };

  const { username } = authCtx.UserDetails;

  return (
    <DrawerContentScrollView style={{ backgroundColor: "#333" }} {...props}>
      <DrawerItem
        label={username}
        // onPress={LogoutHandler}
        // style={{position: 'absolute', bottom: 0, width: '100%'}}
      />
      <DrawerItemList {...props} />

      <DrawerItem
        label="Logout"
        onPress={LogoutHandler}
        // style={{position: 'absolute', bottom: 0, width: '100%'}}
      />
    </DrawerContentScrollView>
  );
}

function AuthenticatedStack({ setLocation, Location }) {
  const authCtx = useContext(AuthContext);
  // const { username } = authCtx.UserDetails;
  const { judge } = authCtx.UserDetails.userRecord;

  console.log(judge);
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
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreenNavigation}
        options={{ headerShown: Location == "Home" }}
        initialParams={{ setLocation: setLocation, Location: Location }}
      />
      {judge && (
        <Drawer.Screen
          name="CreateComp"
          options={{ title: "Create Competition" }}
          component={CreateCompetitionScreen}
        />
      )}
    </Drawer.Navigator>
  );
}

function Navigation({ setLocation, Location }) {
  const authCtx = useContext(AuthContext);

  return (
    <NavigationContainer
      theme={{
        colors: {
          background: "#333",
          text: "white",
        },
      }}
    >
      {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && (
        <AuthenticatedStack setLocation={setLocation} Location={Location} />
      )}
    </NavigationContainer>
  );
}

function Root({ setLocation, Location }) {
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
    return <AppLoading />;
  }
  return <Navigation setLocation={setLocation} Location={Location} />;
}

export default function App() {
  const [Location, setLocation] = useState("Home");

  return (
    <AuthContentProvider>
      <StatusBar style="light" />
      <Root setLocation={setLocation} Location={Location} />
    </AuthContentProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333",
  },
});
