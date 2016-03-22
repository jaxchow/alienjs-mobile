/**
* @Author: jax <jaxchow>
* @Date:   2016-02-26T13:30:41+08:00
* @Email:  jaxchow@gmail.com
* @Last modified by:   jaxchow
* @Last modified time: 2016-02-26T13:30:41+08:00
* @Description:  App store
*/



import { createStore, applyMiddleware,combineReducers} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {booksReducer} from '../app_modules/Books'
import {usersReducer} from '../app_modules/Users'

// .. import renduer

const reducers = combineReducers({
  //... renderscounter
  booksReducer,
  usersReducer
})
const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware // 允许我们 dispatch() 函数
)(createStore)

const store = createStoreWithMiddleware(reducers)

export default store
