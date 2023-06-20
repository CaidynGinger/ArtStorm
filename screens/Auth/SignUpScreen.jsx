import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useState } from "react";
import Title from "../../Components/UI/Title";
import { TextInput } from "@react-native-material/core";
import Colors from "../../constants/colors";
import { PrimaryButton } from "../../Components/UI/PrimaryButton";
import { ScrollView } from "react-native";
import { createUser } from "../../firebase/Users/Users";
import { AuthContext } from "../../Store/auth-context";
import { ActivityIndicator } from "react-native";
import { Dimensions } from "react-native";

export default function SignUpScreen({ navigation }) {
  const [Email, setEmail] = useState("caidyn.ginger@gmail.com");
  const [Username, setUsername] = useState("Caveman822");
  const [Password, setPassword] = useState("catdog305");
  const [Re_Password, setRe_Password] = useState("");

  const [ISAuthenticating, setISAuthenticating] = useState(false);

  const authCtx = useContext(AuthContext);

  const onSignUpHandler = async () => {
    console.log("Sign Up");
    setISAuthenticating(true);
    const user = await createUser(Email, Password, Username);
    // console.log(user);
    const {accessToken} = user.stsTokenManager;
    authCtx.authenticate(accessToken);

    // createUser(Email, Password, Username);
    // console.log(user);
  };

  //   async function SignupHandler({ email, password }) {
  //     setIsAuthenticating(true);
  //     try {
  //       const token = await createUser(email, password);
  //     } catch (error) {
  //       Alert.alert("Signup failed", error.message);
  //       setIsAuthenticating(false);
  //     }
  //   }

  //   setEmailHandler = (text) => {
  //     console.log(text);
  //     // setEmail(text);
  //   };

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
          <Title style={styles.login}>Sign Up</Title>
          <TextInput
            label="Email"
            variant="standard"
            color={Colors.primary500}
            style={{ marginBottom: 20 }}
            value={Email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            label="Username"
            variant="standard"
            color={Colors.primary500}
            style={{ marginBottom: 20 }}
            value={Username}
            onChangeText={(text) => setUsername(text)}
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
          <TextInput
            label="Re-enter Password"
            variant="standard"
            secureTextEntry={true}
            color={Colors.primary500}
            style={{ marginBottom: 20 }}
            value={Re_Password}
            onChangeText={(text) => setRe_Password(text)}
          />
          <PrimaryButton onPress={onSignUpHandler}>Sign Up</PrimaryButton>
          <PrimaryButton onPress={() => navigation.navigate("Login")}>
            Login
          </PrimaryButton>
        </View>
      )}
    </ScrollView>
  );
}

const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  root: {
    flex: 1,
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
