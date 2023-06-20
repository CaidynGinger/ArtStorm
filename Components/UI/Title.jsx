import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Title({children, style}) {
  return (
      <Text style={[styles.title, style]}>{children}</Text>
  )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff",
        marginBottom: 12,
    }
})