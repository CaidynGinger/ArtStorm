import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Title from "../UI/Title";
import Colors from "../../constants/colors";

export default function CompetitionCriteriaCard({ criteria, description }) {
  return (
    <View style={styles.root}>
      <Title style={styles.title}> {criteria} </Title>
      <Text style={styles.text}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginBottom: 12,
  },
  title:{
    marginBottom: 6,
    fontSize: 16,
    color: Colors.primary500
  },
  text: {
    color: "#fff",
    paddingHorizontal: 6
  },
});
