import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import CompetitionCard from "../Components/Home/CompetitionCard";
import { log } from "react-native-reanimated";

export default function HomeScreen({ navigation, route }) {
  // console.log(route.params)


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Entered Competitions</Text>
      <ScrollView horizontal={true}>
        <CompetitionCard />
        {/* <CompetitionCard />
        <CompetitionCard />
        <CompetitionCard /> */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111111",
    padding: 12,
  },
  title: {
    color: "#fff",
    // textAlign: "center",
    fontSize: 24,
    marginBottom: 18,
    // underlineColor: "#fff",
    // borderBottomColor: "#fff",
    // borderBottomWidth: 1,
    // borderStyle: "solid",
  },
});
