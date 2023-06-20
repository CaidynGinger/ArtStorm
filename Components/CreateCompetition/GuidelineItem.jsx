import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function GuidelineItem({ title, description }) {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{description}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        color: "#fff",
        fontWeight: "bold",
    },
    text: {
        fontSize: 16,
        color: "#fff",
    },
})