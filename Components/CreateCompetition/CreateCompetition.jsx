import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { PrimaryButton } from "../UI/PrimaryButton";
import { SafeAreaView } from "react-native-safe-area-context";

import Colors from "../../constants/colors";
import { Input } from "../UI/TextInput";

export default function CreateCompetition() {

    const [CompetitionName, setCompetitionName] = useState('')

    const CompetitionNameHandler = (enteredText) => {
        // console.log(enteredText);
        setCompetitionName(enteredText);
    };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        {/* <Input onChange={CompetitionNameHandler} value={CompetitionName} label={'Competition Name'} color={Colors.primary500}/> */}
        {/* <Input onChange={CompetitionNameHandler} value={CompetitionName} label={'Competition Name'} color={Colors.primary500}/> */}
        
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
        margin: 20,
    },
});
