import { createStackNavigator } from 'react-navigation'
import Home from './screens/Home'
import Text from './screens/Home'

export default createStackNavigator({
  Home: { screen: Home },
  Text: { screen: Text }
})
