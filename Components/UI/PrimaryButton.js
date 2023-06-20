import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import Colors from '../../constants/colors'

export const PrimaryButton = ({ onPress ,children }) => {

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({pressed}) => pressed ? [styles.pressed, styles.buttonInnerContainer] : styles.buttonInnerContainer}
        onPress={onPress}
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
  },
  pressed:{
    opacity: 0.75
  }
});
