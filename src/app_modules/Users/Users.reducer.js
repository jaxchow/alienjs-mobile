/**
* @Author: jax <jaxchow>
* @Date:   2016-02-23T20:34:45+08:00
* @Email:  jaxchow@gmail.com
* @Last modified by:   jaxchow
* @Last modified time: 2016-02-23T20:35:48+08:00
*/



import { createStore, combineReducers } from 'redux';

import {
  SAVE_ITEM,
  SAVE_BATCH,
  REMOVE_ITEM,
  GET_ITEM,
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  LIST_ITEM,
} from './Users.action'

// TODO: 调整本地数据结构
const initialState={
  map: new Map(),
  total:0,
  stateCode:0,
  list:new Array(),
  params:{}
}
//TODO： 拆分reduce。update\get
function reduce(state = initialState, action) {
  let {map}=state
  switch (action.type) {
    case LIST_ITEM:
      return Object.assign({},state,{
        list:[...map].slice(action.idx-1, action.offset).map((it)=>it[1])
      })
    case GET_ITEM:
      return Object.assign({},state, {
        list:[map.get(action.key)]
    })
    case REMOVE_ITEM:
      let item=map.get(action.key)
      map.delete(action.key)
      return Object.assign(state, {
  //      list:[item]
      })
  //  case EDIT_ITEM:
    case SAVE_ITEM:
      map.set(action.key,action.item)
      return Object.assign(state, {
      //  list:[item]
      })
    case SAVE_BATCH:
      action.items.map((it)=>{
        map.set(it.id,it)
      })
      return Object.assign(state, {
        total:action.total
      })
    case FETCH_FAILURE:
    case FETCH_SUCCESS:
    case FETCH_REQUEST:
      return Object.assign(state,{
        code:action.code
      })
    default:
      return state;
  }
}

//const userReducer = combineReducers({reduce});
export {reduce,initialState};
export default reduce;
