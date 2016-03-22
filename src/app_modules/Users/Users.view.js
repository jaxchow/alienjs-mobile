/**
* @Author: jax <jaxchow>
* @Date:   2016-02-25T15:21:34+08:00
* @Email:  jaxchow@gmail.com
* @Last modified by:   jaxchow
* @Last modified time: 2016-02-25T15:21:34+08:00
* @Description: UsersListView
*/



import React from 'react-native'


import Swipeout from 'react-native-swipeout'
//import PullToRefreshListView from 'react-native-pulltorefresh-listview'
import UsersForm from './Users.form'
import styles,{bookItemStyle} from './Users.style'

const {
  Component,
  View,
  StyleSheet,
  ListView,
  TouchableOpacity,
  Text
}= React

export {UsersForm}

//    <Swipeout right={[{text: 'Del'},{text: 'Edit'}]}>
//       </Swipeout>

/**
 *  ListItemView
 *
 *
 */
class ListItemView extends Component{
  	onPress() {
    //  Actions.booksFrom();
  	}
    swipeoutBtns(){
      return [{text: 'remove',onPress:()=>alert("del")}]
    }
  	render(){
      let {model}=this.props
  		return(
  			<View style={bookItemStyle.itemRowStyle}>
          <Swipeout right={this.swipeoutBtns()} backgroundColor="transparent" autoClose={true}>
      			<TouchableOpacity onPress={this.onPress}>
      					<Text style={bookItemStyle.articleTitle}>{model.username}</Text>
      					<Text style={bookItemStyle.articleDate}>{model.format}</Text>
      					<Text style={bookItemStyle.articleContent}>jaxchow</Text>
      					<Text style={bookItemStyle.articleContent}>{model.email}</Text>
      			</TouchableOpacity>
          </Swipeout>
  			</View>
  		)
  	}
}

class UsersView extends Component{
  componentWillMount(){
    let {actions}=this.props
    actions.listAction()
  }
  reloadArticles(){
    let {actions}=this.props
    actions.listAction()
  }
  loadMoreArticles(){
    let {actions}=this.props
    actions.listAction()
  }
  render(){
    let {reduce}=this.props;
    let list = reduce.list || []
    return(
      <View style={[styles.container]}>
        <ListView
        //dataSource={this.state.dataSource}
          dataSource={new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}).cloneWithRows(list)}
          onRefresh={this.reloadArticles}
          onPull={this.loadMoreArticles}
          refreshDescription="下拉刷新中"
          minBetweenTime={500}
          minPulldownDistance= {80}
          renderRow={article => <ListItemView model={article} />}
        />
      </View>
    )
  }
}

export default UsersView
