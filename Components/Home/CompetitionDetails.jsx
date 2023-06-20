import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function CompetitionDetails() {
  return (
    <View style={styles.card}>
      <Text style={[styles.color, styles.title]}>Adorable Enchantment</Text>
      <View>
        <Text style={styles.color}>Type: Art</Text>
        <Text style={styles.color}>Submitted Entry: Yes</Text>
        <Text style={[styles.color, styles.countDown]}>Days left: 3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: "space-between",
    // alignItems: "space-between",
    padding: 12,
  },
  color: {
    color: "#fff",
    textAlign: "center",
  },
  title: {
    fontSize: 20,
    // marginTop: 12,
  },
  countDown: {},
});
