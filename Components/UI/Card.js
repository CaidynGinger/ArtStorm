import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Card({ children, style }) {
  return <View style={[styles.card , style]}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    elevation: 4,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
});
