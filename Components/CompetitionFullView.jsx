import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { ImageBackground } from "react-native";
import Title from "./UI/Title";
import { Image } from "react-native";
import { ScrollView } from "react-native";
import { PrimaryButton } from "./UI/PrimaryButton";

export default function CompetitionFullView({ route, navigation, compId }) {
  const { setLocation } = route.params;

  const userSubmitted = false;

  function submissionUxHandler() {
    if (userSubmitted) {
        return (
          <View>
            <Text>Competition 1</Text>
          </View>
        );
      }
      return <PrimaryButton>Submit Image</PrimaryButton>;
  }

  useEffect(() => {
    navigation.setOptions({ headerTitle: "Adorable Enchantment" });
    setLocation(route.name);
    return () => {
      setLocation("Home");
    };
  }, [route]);
  return (
    <ScrollView style={styles.root}>
      <ImageBackground
        source={require("../assets/img/Comp1.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.gradient}>
          <Title style={styles.title}>Adorable Enchantment</Title>
        </View>
      </ImageBackground>
      <View style={styles.container}>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>
            Artists are challenged to create a cute and cuddly art piece for a
            Magic: The Gathering card that showcases a lovable and endearing
            creature, "Cuddlekins, the Fluffmaster." The focus should be on
            creating a heartwarming piece that captures the essence of charm and
            innocence.
          </Text>
        </View>
        <View style={styles.cardBearContainer}>
          <Image
            style={styles.cardBear}
            source={require("../assets/img/Card.png")}
          />
        </View>
        {submissionUxHandler()}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },

  image: {
    justifyContent: "center",
    alignItems: "center",
    height: 300,
    backgroundColor: "black",
  },
  gradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    width: "100%",
  },
  title: {
    fontSize: 30,
  },
  container: {
    flex: 1,
    margin: 12,
  },
  description: {
    fontSize: 16,
    color: "#fff",
  },
  descriptionContainer: {
    marginTop: -100,
    backgroundColor: "rgba(0,0,0,0.6)",
    padding: 12,
    borderRadius: 12,
    marginBottom: 20,
  },
  cardBearContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "black",
    marginBottom: 20,
    paddingHorizontal: 40,
  },
  cardBear: {
    width: "100%",
    height: undefined,
    //    height: 600,\
    aspectRatio: 28 / 39,
  },
});
