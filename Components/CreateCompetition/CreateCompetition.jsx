import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { PrimaryButton } from "../UI/PrimaryButton";
import { SafeAreaView } from "react-native-safe-area-context";

import Colors from "../../constants/colors";
import { Input } from "../UI/TextInput";
import { TextInput } from "@react-native-material/core";
import Title from "../UI/Title";
import { ScrollView } from "react-native";
import { FlatList } from "react-native";

export default function CreateCompetition() {
  const [CompetitionName, setCompetitionName] = useState("Mystical Masters");
  const [CompetitionDescription, setCompetitionDescription] = useState(
    "In this competition, artists are challenged to create a captivating and powerful wizard card for Magic: The Gathering. The focus should be on designing a wizard character with unique abilities that showcase their mastery over magic and provide strategic depth to gameplay."
  );
  const [GuidelineTitle, setGuidelineTitle] = useState("Guidelines");
  const [GuidelineDescription, setGuidelineDescription] = useState("")
  const [Guidelines, setGuidelines] = useState([]);
  const [numberOfGuidelines, setNumberOfGuidelines] = useState(1);

  // const CompetitionNameHandler = (enteredText) => {
  //     // console.log(enteredText);
  //     setCompetitionName(enteredText);
  // };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Title style={{ marginVertical: 0 }}>Competition Name</Title>
        <TextInput
          value={CompetitionName}
          onChangeText={(enteredText) => {
            setCompetitionName(enteredText);
          }}
          variant="standard"
          color={Colors.primary500}
          inputStyle={{ color: "white" }}
          style={{ marginVertical: 0, marginTop: -20 }}
        />
        <Title style={{ marginVertical: 0 }}>Competition Details</Title>
        <TextInput
          value={CompetitionDescription}
          onChangeText={(enteredText) => {
            setCompetitionDescription(enteredText);
          }}
          variant="standard"
          // label="Competition Details"
          multiline={true}
          color={Colors.primary500}
          inputStyle={{ color: "white" }}
          style={{ paddingVertical: 10, marginTop: -20 }}
        />
        <Title style={{ marginVertical: 0 }}>Add Guide Lines</Title>
        <Title style={{ marginVertical: 0 }}>Guideline</Title>
        <TextInput
          value={GuidelineTitle}
          onChangeText={(enteredText) => {
            setGuidelineTitle(enteredText);
          }}
          variant="standard"
          color={Colors.primary500}
          inputStyle={{ color: "white" }}
          style={{ paddingVertical: 10, marginTop: -20 }}
        />
        {/* <FlatList
          data={CATEGORIES}
          keyExtractor={(item) => item.id}
          renderItem={renderCategoryItem}
          numColumns={2}
        /> */}
        <PrimaryButton>Add Guideline</PrimaryButton>
        <PrimaryButton>Upload Card</PrimaryButton>
      </View>
      <View>
        <PrimaryButton>Create Competition</PrimaryButton>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "space-between",
    // alignItems: "center",
    padding: 20,
    backgroundColor: "#111111",
  },
});
