import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { PrimaryButton } from "../UI/PrimaryButton";
import { SafeAreaView } from "react-native-safe-area-context";
import * as ImagePicker from 'expo-image-picker';
import Colors from "../../constants/colors";
import { Input } from "../UI/TextInput";
import { TextInput } from "@react-native-material/core";
import Title from "../UI/Title";
import { ScrollView } from "react-native";
import { FlatList } from "react-native";
import GuidelineItem from "./GuidelineItem";

export default function CreateCompetition() {
  const [CompetitionName, setCompetitionName] = useState("Mystical Masters");
  const [CompetitionDescription, setCompetitionDescription] = useState(
    "In this competition, artists are challenged to create a captivating and powerful wizard card for Magic: The Gathering. The focus should be on designing a wizard character with unique abilities that showcase their mastery over magic and provide strategic depth to gameplay."
  );
  const [GuidelineTitle, setGuidelineTitle] = useState("Theme");
  const [GuidelineDescription, setGuidelineDescription] = useState(
    "The artwork and abilities of the wizard should reflect their expertise and command over magic. Artists are encouraged to explore different magical schools, elements, or specialties to bring diversity and intrigue to the character's concept."
  );
  const [Guidelines, setGuidelines] = useState([]);
  const [Image, setImage] = useState(null)


  // const CompetitionNameHandler = (enteredText) => {
  //     // console.log(enteredText);
  //     setCompetitionName(enteredText);
  // };

  const AddGuidelineHandler = () => {
    setGuidelines([
      ...Guidelines,
      {
        title: GuidelineTitle,
        description: GuidelineDescription,
      },
    ]);
    setGuidelineTitle("");
    setGuidelineDescription("");
  };

  function renderGuidelineItem(itemData) {
    // function pressHandler() {
    //   navigation.navigate("MealsOverview", {categoryId: itemData.item.id});
    // }
    return (
      <GuidelineItem
        title={itemData.item.title}
        description={itemData.item.description}
      />
    );
  }


  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [28, 39],
      quality: 1,
    });

    console.log(result);
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  useEffect(() => {
    console.log(Image);
  }, [Image]);


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
        <PrimaryButton onPress={AddGuidelineHandler}>Add Guideline</PrimaryButton>

        <Title style={{marginTop: 10, marginVertical: 0 }}>Guideline</Title>
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
        <Title style={{ marginVertical: 0 }}>Guideline Detail</Title>
        <TextInput
          value={GuidelineDescription}
          onChangeText={(enteredText) => {
            setGuidelineDescription(enteredText);
          }}
          variant="standard"
          color={Colors.primary500}
          multiline={true}
          inputStyle={{ color: "white" }}
          style={{ paddingVertical: 10, marginTop: -20 }}
        />
        <FlatList
          data={Guidelines}
          keyExtractor={(item) => item.title}
          renderItem={renderGuidelineItem}
          numColumns={1}
        />
        <View style={styles.imageRoot}>
        <PrimaryButton onPress={pickImage}>Upload Card Image</PrimaryButton>
        {/* {Image && <ImageViewer uri={Image} />} */}
        {Image && <Image source={{ uri: Image }} style={{ width: 200, height: 200 }} />}
        </View>
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
  imageRoot:{
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: Colors.primary500,
    paddingTop: 20,
  },
});
