import React, { Component } from 'react'
import { StyleSheet, ScrollView, View, Text } from 'react-native'
import generateSong from '../utils/songGenerator'

export default class App extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{generateSong()}</Text>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center' 
  },
  text: {
    marginTop: 40,
    marginBottom: 40
  }
})
