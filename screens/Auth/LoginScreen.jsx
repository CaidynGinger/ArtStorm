import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Title from "../../Components/UI/Title";
import { TextInput } from "@react-native-material/core";
import Colors from "../../constants/colors";
import { PrimaryButton } from "../../Components/UI/PrimaryButton";
import { ScrollView } from "react-native";

export default function LoginScreen({ navigation }) {
  return (
    <ScrollView style={styles.root}>
      <View style={styles.titleContainer}>
        <Title style={styles.title}>Art Storm</Title>
      </View>
      <View style={styles.loginCard}>
        <Title style={styles.login}>Login</Title>
        <TextInput
          label="Username"
          variant="standard"
          color={Colors.primary500}
          style={{ marginBottom: 20 }}
        />
        <TextInput
          label="Password"
          variant="standard"
          secureTextEntry={true}
          color={Colors.primary500}
          style={{ marginBottom: 20 }}
        />
        <PrimaryButton>Login</PrimaryButton>
        <PrimaryButton onPress={() => navigation.navigate("SignUp")}>
          Sign Up
        </PrimaryButton>
      </View>
    </ScrollView>
  );
}

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
