/**
* @Author: jax <jaxchow>
* @Date:   2016-02-26T13:32:52+08:00
* @Email:  jaxchow@gmail.com
* @Last modified by:   jaxchow
* @Last modified time: 2016-02-26T13:32:52+08:00
* @Description: App layout use sidevar
*/



import React,{Component,Text,Platform} from 'react-native'
import {Router,Route,TabBar,Schema} from 'react-native-router-flux'

import Sidebar,{SideMenu} from './Sidebar'

let bannerHeight;
if(Platform.OS === 'ios'){
  bannerHeight=64
}else if(Platform.OS === 'android') {
  bannerHeight=56
}
class AppTabBar extends Component{
  render(){
    return (
      <SideMenu menu={<Sidebar />} isOpen={false} openMenuOffset={120} >
        <Router {...this.props} footer={TabBar} navigationBarStyle={{backgroundColor:'#2f3139',borderColor:"#1f2020"}} titleStyle={{color:'#fff'}}  hideNavBar={true} tabBarStyle={{borderTopColor:'#151618',borderTopWidth:1,backgroundColor:'#292c2f'}} >
          {this.props.children}
        </Router>
      </SideMenu>
    )
  }
}

export default AppTabBar
