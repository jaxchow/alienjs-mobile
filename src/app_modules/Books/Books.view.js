/**
* @Author: jax <jaxchow>
* @Date:   2016-02-25T15:21:34+08:00
* @Email:  jaxchow@gmail.com
* @Last modified by:   jaxchow
* @Last modified time: 2016-02-25T15:21:34+08:00
* @Description: BooksListView
*/



import React from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Accordion from 'react-native-accordion'

//import PullToRefreshListView from 'react-native-pulltorefresh-listview'
import {Actions} from 'react-native-router-flux'
import * as actions from './Books.action'
import BooksForm from './Books.form'
import styles,{bookItemStyle} from './Books.style'

const {
  Component,
  View,
  StyleSheet,
  ListView,
  TouchableOpacity,
  Image,
  Text
}= React

export {BooksForm}

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
    renderItem(){
      let {model}=this.props
  		return(
        <View style={{flex:1,flexDirection:'row'}}>
          <Image source={{uri:model.images}} style={bookItemStyle.bookImage}/>
          <View style={{flex:1,flexDirection:'column',marginLeft:10,paddingRight:30}}>
  					<Text style={bookItemStyle.articleTitle}>{model.bookname}</Text>
  					<Text style={bookItemStyle.articleDate}>{model.format}</Text>
  					<Text style={bookItemStyle.articleContent}>{model.publisher}</Text>
  					<Text style={bookItemStyle.articleContent}>{model.isbn}</Text>
  					<Text style={bookItemStyle.articleContent} numberOfLines={3}>{model.description}</Text>
          </View>
        </View>
  		)
    }
    renderDescript(){
      let {model}=this.props
  		return(
          <View>
           <Text>{model.description}</Text>
         </View>
       )
    }
  	render(){
      let {model}=this.props
  		return(
  			<View style={bookItemStyle.itemRowStyle}>
          {this.renderItem()}
        {/*
        <Accordion
           header={this.renderItem()}
           content={this.renderDescript()}
           easing="easeOutCubic"
         />
         */}
  			</View>
  		)
  	}
}

class BooksView extends Component{
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

const mapStateToProps = (state) => {
  return {
    reduce:state.booksReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch),
    dispatch
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(BooksView)
