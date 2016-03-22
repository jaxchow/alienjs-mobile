import React,{Component,Text} from 'react-native'
import {Router,Route,TabBar,Schema,Animations,NavBar} from 'react-native-router-flux'
//import Button from 'react-native-button'

import BooksView,{NewButton,BooksForm} from './Books.view'

class BooksRouter extends Component{
  render(){
    return (
      <Router {...this.props} hideNavBar={true}  >
        <Route name="booksView" component={BooksView} title="BooksView" />
        <Route name="booksFrom" component={BooksForm} title="BooksForm" type="push"/>
      </Router>
    )
  }
}

export default BooksRouter
