import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "react-native";
import { ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native";
import CompetitionDetails from "./CompetitionDetails";
import { useNavigation } from "@react-navigation/native";

export default function CompetitionCard() {
  const navigate = useNavigation();

  const navigationHandler = () => {
    navigate.navigate("CompetitionFullView");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={navigationHandler}
        style={{ flex: 1, backgroundColor: "black" }}
      >
        <ImageBackground
          source={require("../../assets/img/Comp1.jpg")}
          resizeMode="cover"
          style={styles.image}
        >
          <View style={styles.innerContainer}>
            <CompetitionDetails />
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 180,
    width: 180,
    borderRadius: 20,
    backgroundColor: "#fff",
    overflow: "hidden",
    elevation: 5,
  },
  image: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
});
