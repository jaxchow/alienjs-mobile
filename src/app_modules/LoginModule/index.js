import React,{Component,View,Text,Button,StyleSheet} from 'react-native'
import {Actions} from 'react-native-router-flux'

export default class LoginApp extends Component{
  render(){
    const {actions} = this.props;
    return (
      <View style={styles.container}>
        <Text>login page</Text>
        <Text onPress={Actions.layout}>Login</Text>
      </View>
    )
  }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    }
});
