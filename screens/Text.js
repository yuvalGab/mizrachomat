import React, { Component } from 'react'
import { StyleSheet, ScrollView, View, Button, Text } from 'react-native'
import { generateLabel, generateAuthor, generateSong } from '../utils/songGenerator'

export default class App extends Component {
  backToHomePage() {
    const { navigation } = this.props
    navigation.navigate('Home')
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.song}>
          <Button
            onPress={this.backToHomePage.bind(this)}
            title="חזור"
            color="#6bafbc"
            accessibilityLabel="חזור"
          />
          <Text style={styles.label}>{generateLabel()}</Text>
          <Text style={styles.author}>{generateAuthor()}</Text>
          <Text style={styles.text}>{generateSong()}</Text>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e8f9fc'
  },
  song: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 60,
    paddingBottom: 40,
  },
  label: {
    marginTop: 20,
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
