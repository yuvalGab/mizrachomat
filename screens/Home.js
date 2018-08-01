import React, { Component } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

export default class App extends Component {
  createNewSong() {
    const { navigation } = this.props
    navigation.navigate('Text')
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text>מזרחומט</Text>
        <Button
          onPress={this.createNewSong.bind(this)}
          title="צור שיר"
          color="#841584"
          accessibilityLabel="צור שיר"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
