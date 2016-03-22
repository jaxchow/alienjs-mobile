import React,{Component,Text} from 'react-native'
import {Router,Route,TabBar,Schema,Animations,NavBar} from 'react-native-router-flux'
//import Button from 'react-native-button'

import UsersViewContainer,{NewButton,BooksForm} from './Users.container'

class UsersRouter extends Component{
  render(){
    return (
      <Router {...this.props} hideNavBar={true}  >
        <Route name="usersView" component={UsersViewContainer} title="BooksView" />
        <Route name="usersFrom" component={BooksForm} title="BooksForm" type="push"/>
      </Router>
    )
  }
}

export default UsersRouter
