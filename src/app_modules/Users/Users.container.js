/**
* @Author: jax <jaxchow>
* @Date:   2016-03-22T11:14:41+08:00
* @Email:  jaxchow@gmail.com
* @Last modified by:   jaxchow
* @Last modified time: 2016-03-22T11:16:50+08:00
*/



import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {Actions} from 'react-native-router-flux'

import UsersView from './Users.view'
import * as actions from './Users.action'

const mapStateToProps = (state) => {
  return {
    reduce:state.usersReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch),
    dispatch
  };
}

let UsersViewContainer=connect(mapStateToProps,mapDispatchToProps)(UsersView)

export default UsersViewContainer
