import { createStackNavigator } from 'react-navigation'
import Home from './screens/Home'
import Text from './screens/Text'

export default createStackNavigator({
  Home: { screen: Home },
  Text: { screen: Text }
})
