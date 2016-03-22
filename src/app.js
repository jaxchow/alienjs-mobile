/**
* @Author: jax <jaxchow>
* @Date:   2016-02-24T12:46:00+08:00
* @Email:  jaxchow@gmail.com
* @Last modified by:   jaxchow
* @Last modified time: 2016-02-24T14:34:50+08:00
* @Description: Application entry
*/



import React, { Component, StyleSheet } from 'react-native';
import { bindActionCreators } from 'redux';
import { Provider } from 'react-redux/native';

import store from './store'
import AppRouter from './router'

class App extends Component{
  render(){
    return(
      <Provider store={store}>
        {() => <AppRouter /> }
      </Provider>
    )
  }
}

export default App;
