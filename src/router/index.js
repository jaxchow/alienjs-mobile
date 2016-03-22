/**
* @Author: jax <jaxchow>
* @Date:   2016-02-26T13:17:11+08:00
* @Email:  jaxchow@gmail.com
* @Last modified by:   jaxchow
* @Last modified time: 2016-02-26T13:17:11+08:00
* @Description: globe router config
*/



import React,{Component,Text,Navigator,Platform} from 'react-native'
import RouterRedux from 'react-native-router-flux'

import AppTabBar from '../layout/'
import TabIcon from '../layout/TabIcon'
// TODO: remove LoginApp
import LoginApp from '../app_modules/LoginModule/'
import MainScreenRouter from '../app_modules/MainScreen/MainScreen.router'
import UsersRouter from '../app_modules/Users'
import BooksRouter from '../app_modules/Books'

const {
  Router, Route, Schema, Animations, TabBar
} =RouterRedux

// assets={assets}
//<Schema name="tab" type="switch" icon={TabIcon}  style={{paddingTop:bannerHeight}} />
class AppRouter extends Component{
  render(){
    return(
      <Router {...this.props} hideNavBar={true} >
        <Schema name="default" sceneConfig={Navigator.SceneConfigs.FloatFromRight}/>
        <Schema name="modal" sceneConfig={Navigator.SceneConfigs.FloatFromBottom}/>
        <Schema name="withoutAnimation"/>
        <Schema name="tab" type="switch" icon={TabIcon}  />
        <Schema name="tabBarStyle"/>
        <Route name="login" component={LoginApp} schema="modal" />
        <Route name="layout" initial={true} type="reset">
          <AppTabBar name="tabbar">
            <Route name="books" schema="tab" title="Books" >
              <BooksRouter />
            </Route>
            <Route name="user" schema="tab" title="User" >
              <UsersRouter />
            </Route>
            <Route name="main" schema="tab" title="Dashborad" >
              <MainScreenRouter />
            </Route>
          </AppTabBar>
        </Route>
      </Router>
    )
  }
}

export default AppRouter;
