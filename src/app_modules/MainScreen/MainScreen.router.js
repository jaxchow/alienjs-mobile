import React,{Component,Text} from 'react-native'
import {Router,Route,TabBar,Schema} from 'react-native-router-flux'

import MainScreenView from './MainScreen.view'

class MainScreenRouter extends Component{
  render(){
    return (
      <Router {...this.props}>
        <Route name="dashborad" component={MainScreenView} title="Dashborad" hideNavBar={false} />
      </Router>
    )
  }
}

export default MainScreenRouter
