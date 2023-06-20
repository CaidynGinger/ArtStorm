import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import Title from "../../Components/UI/Title";
import { ActivityIndicator, TextInput } from "@react-native-material/core";
import Colors from "../../constants/colors";
import { PrimaryButton } from "../../Components/UI/PrimaryButton";
import { ScrollView } from "react-native";
import { set } from "react-native-reanimated";
import { Dimensions } from "react-native";
import { signIn } from "../../firebase/Users/Users";
import { AuthContext } from "../../Store/auth-context";

export default function LoginScreen({ navigation }) {
  const [Email, setEmail] = useState("caidyn.ginger@gmail.com");
  const [Password, setPassword] = useState("catdog305");
  const [ISAuthenticating, setISAuthenticating] = useState(false);

  const authCtx = useContext(AuthContext);

  const onLoginHandler = async () => {
    setISAuthenticating(true);
    try {
      const user = await signIn(Email, Password);
      if (user === null) {
        setISAuthenticating(false);
        console.log("User not found");
        return;
      }
      const { accessToken } = user.stsTokenManager;
      authCtx.authenticate(accessToken);
      authCtx.setUserDetailsHandler(user.displayName, user.uid)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    return () => {
      setISAuthenticating(false);
    };
  }, []);

  return (
    <ScrollView style={styles.root}>
      <View style={styles.titleContainer}>
        <Title style={styles.title}>Art Storm</Title>
      </View>
      {ISAuthenticating && (
        <View style={[styles.loginCard, { alignItems: "center" }]}>
          <View style={{ flex: 1, justifyContent: "center" }}>
            <ActivityIndicator size={100} color={Colors.primary500} />
          </View>
        </View>
      )}
      {!ISAuthenticating && (
        <View style={styles.loginCard}>
          <Title style={styles.login}>Login</Title>
          <TextInput
            label="Email"
            variant="standard"
            color={Colors.primary500}
            style={{ marginBottom: 20 }}
            value={Email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            label="Password"
            variant="standard"
            secureTextEntry={true}
            color={Colors.primary500}
            style={{ marginBottom: 20 }}
            value={Password}
            onChangeText={(text) => setPassword(text)}
          />
          <PrimaryButton onPress={onLoginHandler}>Login</PrimaryButton>
          <PrimaryButton onPress={() => navigation.navigate("SignUp")}>
            Sign Up
          </PrimaryButton>
        </View>
      )}
    </ScrollView>
  );
}

const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#111111",
    padding: 20,
  },
  titleContainer: {
    marginVertical: 80,
    alignContent: "center",
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    fontWeight: "normal",
    fontSize: 50,
  },
  loginCard: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 100,
    borderBottomRightRadius: 100,
    padding: 20,
    paddingBottom: 80,
    height: deviceHeight - 320,
  },
  login: {
    textAlign: "center",
    color: Colors.primary500,
    fontSize: 30,
    fontWeight: "normal",
    marginBottom: 50,
    marginTop: 50,
  },
});
