'use strict';
import {
  AppRegistry,
  Platform
} from 'react-native';

import App from './src/app'

AppRegistry.registerComponent('alienjs', () => App);
if(Platform.OS == 'web'){
  var app = document.createElement('div');
  document.body.appendChild(app);
  AppRegistry.runApplication('alienjs', {
    rootTag: app
  })
}
