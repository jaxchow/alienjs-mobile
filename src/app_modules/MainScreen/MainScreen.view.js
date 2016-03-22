import React from 'react-native'
import styles from './MainScreen.style'

const {
  View,
  Text,
  Component,
} = React;

export default class MainScreenView extends Component{
  render(){
    return (
      <View style={styles.container}>
        <Text>Dashborad</Text>
      </View>
    )
  }
}
