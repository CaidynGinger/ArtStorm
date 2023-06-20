import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React from "react";

// const Competition = {
//   Title: "Adorable Enchantment",
//   Description: "This is a competition for art",
//   Category: "Art",
//   Image: "https://picsum.photos/200/300",
//   StartDate: "2023-07-01T00:00:00",
//   EndDate: "2023-07-05T00:00:00",
//   CompetitionId: 1,
//   judgingCriteria: [
//     "Adherence to the cute and cuddly theme",
//     "Creativity",
//     "Technical skill",
//     "Overall impression",
//   ],
//   guidelines: [
//     {
//       guidelineCriteria: "Theme",
//       details: `The artwork should revolve around a creature or scene that evokes cuteness and cuddliness.
//         This could include adorable animals, whimsical creatures, or delightful characters.
//         The goal is to create an artwork that brings a smile to viewers' faces.`,
//     },
//     {
//       guidelineCriteria: "Art Style",
//       details: `Artists are free to choose their preferred art style, whether it be realistic, cartoonish,
//         or stylized. The style should complement the theme and enhance the overall charm of the piece.`,
//     },
//   ],
//   winner: null,
// };

export default function CompetitionView() {
  return (
    <View>
      <ImageBackground>
        <Text>Adorable Enchantment</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({});
