import React, { Component } from 'react'
import { StyleSheet, View, Text, Button, Image } from 'react-native'
import hookah from '../assets/hookah.png'

export default class App extends Component {
  createNewSong() {
    const { navigation } = this.props
    navigation.navigate('Text')
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>מזרחומט</Text>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this.createNewSong.bind(this)}
            title="צור שיר"
            color="#6bafbc"
            accessibilityLabel="צור שיר"
          />
        </View>
        <Image
          style={{ width: 300, height: 300 }}
          source={hookah}
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
    backgroundColor: '#e8f9fc'
  },
  label: {
    fontSize: 50,
    marginTop: 80,
    fontWeight: '600',
    color: 'white',
    textShadowColor: '#00434f',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10
  },
  buttonContainer: {
    marginTop: 50,
    marginBottom: 50
  }
})
