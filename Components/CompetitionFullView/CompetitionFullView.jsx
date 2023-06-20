import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect } from "react";
import { ImageBackground } from "react-native";
import Title from "../UI/Title";
import { Image } from "react-native";
import { ScrollView } from "react-native";
import { PrimaryButton } from "../UI/PrimaryButton";
import CompetitionCriteriaCard from "./CompetitionCriteriaCard";
import { AuthContext } from "../../Store/auth-context";

export default function CompetitionFullView({ route, navigation, compId }) {
  const { setLocation } = route.params;

  const userSubmitted = true;

  const authCtx = useContext(AuthContext);

  //  console.log(authCtx.UserDetails.userRecord);

  console.log(authCtx.UserDetails.userRecord);

  const { judge } = authCtx.UserDetails.userRecord;

  function submissionUxHandler() {
    if (userSubmitted) {
      return (
        <View>
          <Title style={styles.submissionTitle}>Submission</Title>
          <Image
            style={styles.cardBear}
            source={require("../../assets/img/subbmition.png")}
          />
          <PrimaryButton>Re-Submit Image</PrimaryButton>
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
        source={require("../../assets/img/Comp1.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.gradient}>
          <Title style={styles.title}>Adorable Enchantment</Title>
          <Text style={styles.date}>Start Date: 1/9/2023</Text>
          <Text style={styles.date}>End Date: 1/12/2023</Text>
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
        {judge && <PrimaryButton>Judge</PrimaryButton>}
        <View style={styles.cardBearContainer}>
          <Image
            style={styles.cardBear}
            source={require("../../assets/img/Card.png")}
          />
        </View>
        <View>
          <Title style={styles.criteria}>Criteria</Title>
          <CompetitionCriteriaCard
            criteria={"Theme"}
            description={
              "The artwork should revolve around a creature or scene that evokes cuteness and cuddliness. This could include adorable animals, whimsical creatures, or delightful characters. The goal is to create an artwork that brings a smile to viewers' faces."
            }
          />
          <CompetitionCriteriaCard
            criteria={"Art Style"}
            description={
              "Artists are free to choose their preferred art style, whether it be realistic, cartoonish, or stylized. The style should complement the theme and enhance the overall charm of the piece."
            }
          />
        </View>
        {submissionUxHandler()}
      </View>
    </ScrollView>
  );
}

// CompetitionCriteriaCard.jsx

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#111111",
  },
  date: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 6,
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
    paddingHorizontal: 20,
  },
  cardBear: {
    width: "100%",
    height: undefined,
    //    height: 600,\
    aspectRatio: 28 / 39,
  },
  criteria: {
    textAlign: "center",
    textDecorationLine: "underline",
  },
  submissionTitle: {
    textAlign: "center",
    textDecorationLine: "underline",
  },
});
