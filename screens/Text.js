import React, { Component } from 'react'
import { StyleSheet, ScrollView, Text } from 'react-native'
import generateSong from '../utils/songGenerator'

export default class App extends Component {
  render() {
    return (
      <ScrollView>
        <Text>{generateSong()}</Text>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({

})
