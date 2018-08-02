import React, { Component } from 'react'
import { StyleSheet, ScrollView, View, Text } from 'react-native'
import { generateLabel, generateAuthor, generateSong } from '../utils/songGenerator'

export default class App extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.textContainer}>
          <Text style={styles.label}>{generateLabel()}</Text>
          <Text style={styles.author}>{generateAuthor()}</Text>
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
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 40
  },
  label: {
    marginBottom: 12,
    fontSize: 22,
    fontWeight: '600',
    textDecorationLine: 'underline'
  ,
  },
  author: {
    marginBottom: 16,
    fontSize: 18
  },
  text: {

  }
})
