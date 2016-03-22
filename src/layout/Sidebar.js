/**
* @Author: jax <jaxchow>
* @Date:   2016-02-26T13:37:08+08:00
* @Email:  jaxchow@gmail.com
* @Last modified by:   jaxchow
* @Last modified time: 2016-02-26T13:37:08+08:00
* @Description: description
*/



import React from 'react-native'
import SideMenu from 'react-native-side-menu'
import {Actions} from 'react-native-router-flux'

const {
  Dimensions,
  StyleSheet,
  ScrollView,
  View,
  Image,
  TouchableHighlight,
  Text,
  Component,
} = React;

const window = Dimensions.get('window');
const uri = 'http://pickaface.net/includes/themes/clean/img/slide4.png';

export {SideMenu}
export default class Sidebar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView scrollsToTop={false} bounces={false}>
          <View style={styles.avatarContainer}>
          <Image style={styles.avatar} source={{uri}}/>
            <Text style={styles.name}>jaxchow</Text>
          </View>
          <View style={styles.menuContainer}>
            <TouchableHighlight onPress={Actions.login}>
              <Text style={styles.item}>Profiles</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={Actions.booksScreen}>
              <Text style={styles.item,styles.selected}>Books</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={Actions.login}>
              <Text style={styles.item}>Logout</Text>
            </TouchableHighlight>
          </View>
        </ScrollView>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    width:120,
    height: window.height,
    flexDirection:'row',
    backgroundColor: '#2b3643',
    borderRightColor:'#2b3643',
    borderRightWidth:1
  },
  avatarContainer: {
    marginBottom: 20,
    marginTop: 20,
    alignItems: 'center',
    height:80,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 5,
    flex: 1,
  },
  name: {
    color:'#fff'
  },
  menuContainer:{
    borderTopColor:'#dcdcdc',
    borderTopWidth:1
  },
  selected:{
    backgroundColor:'#4182c4',
    fontSize: 16,
    color:'#fff',
    paddingVertical: 5,
  },
  item: {
    fontSize: 16,
    fontWeight: '300',
    color:'#b2bfdc',
    paddingVertical: 5,
  },
});
