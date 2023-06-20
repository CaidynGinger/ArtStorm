import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { TextInput } from "@react-native-material/core";

export const Input = ({value, onChange, label, color, style}) => {

  return (
    <TextInput variant="standard" onChangeText={onChange} value={value} color={color} label={label} style={style} />
  );
};
