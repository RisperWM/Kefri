import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../constants/colors'

const Support = () => {
  return (
    <View style={styles.container}>
    <HomeNav />
    <View>
      <Text style={styles.heading}>Support</Text>
    </View>
  </View>
  )
}

export default Support

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
    padding: 5,
    textAlign: "center",
  },
  heading: {
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
    marginVertical: 30,
    color: colors.white,
  },
})