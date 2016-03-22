import fetch from 'isomorphic-fetch'
//import { routeActions } from 'react-router-redux'
import {reduce,initialState} from './Books.reducer'

const URL_DOMAIN='http://192.168.222.63:4000'
//const URL_DOMAIN='http://192.168.2.176:4000'

//TODO: 调整命名及常量定义
export const SAVE_ITEM='BOOK_SAVE_ITEM'
export const REMOVE_ITEM= 'BOOK_REMOVE_ITEM'
export const GET_ITEM= 'BOOK_GET_ITEM'
export const LIST_ITEM = 'BOOK_LIST_ITEM'
export const SAVE_BATCH= 'BOOK_SAVE_BATCH'
export const FETCH_REQUEST = 'BOOK_FETCH_REQUEST'
export const FETCH_SUCCESS = 'BOOK_FETCH_SUCCESS'
export const FETCH_FAILURE = 'BOOK_FETCH_FAILURE'


function getItem(key){
  return {
    type: GET_ITEM,
    key
  }
}

function removeItem(key){
  return {
    type: REMOVE_ITEM,
    key
  }
}

function saveItem(key,item){
  return {
    type: SAVE_ITEM,
    key,
    item
  }
}

function saveBatch(items,total){
  return {
    type: SAVE_BATCH,
    items,
    total
  }
}


function listItem(idx,offset){
  return {
    type: LIST_ITEM,
    idx,
    offset
  }
}

function fetchFailure(stateCode){
  return {
    type:FETCH_FAILURE,
    stateCode
  }
}

function fetchRequest(stateCode){
  return {
    TYPE:FETCH_REQUEST,
    stateCode
  }
}

function fetchSuccess(stateCode){
  return {
    TYPE:FETCH_SUCCESS,
    stateCode
  }
}

export function listAction(start=1,offset=-1){
  return (dispatch,getState) =>{
    let reducer=getState().bookReducer
    //if(reducer.total<=(start+offset)){
    if(true){
      return fetch(`${URL_DOMAIN}/book/`)
        .then(res => res.json())
        .then(json => {
          //TODO : 业务异常未处理
          dispatch(saveBatch(json.list,json.total))
        })
        .then(()=>{
          dispatch(listItem(start,offset))
        })
        .catch(ex => {
          alert(ex)
          return dispatch(fetchFailure(ex))
        })
    }else{
      return dispatch(listItem(start,offset))
    }
  }
}

export function loadAction(key){
  return (dispatch,getState) =>{
    let reducer=getState().bookReducer
    if(!reducer.map.has(key)){
      return fetch(`${URL_DOMAIN}/user/${key}`)
        .then(res => res.json())
        .then(json => {
          //TODO : 业务异常未处理

          dispatch(saveItem(json.list[0].id,json.list[0]))
        })
        .then(()=>{
          dispatch(getItem(key))
        })
        .catch(ex => {
          return dispatch(fetchFailure(ex))
        })
    }else{
      return dispatch(getItem(key))
    }
  }
}


export function saveAction(item){
//  return dispatch => dispatch(saveItem(item))
  return dispatch => {
    //dispatch(loadItemRequest(key))
    return fetch(`${URL_DOMAIN}/user/`,{
        method: 'post',
        body:JSON.stringify(item)
      })
      .then(res => {
        return res.json()
      })
      .then(json => dispatch(loadItemSuccess(json.data.id,json.data)))
      /*
      .then(json => {
        return dispatch(saveItemStore(json.data))
      })
      */
      .catch(ex => {
        return dispatch(loadItemFailure(ex))
      })
  }
}
/*
export function listRoute(){
  return dispatch => dispatch(routeActions.push('/Users/'))
}
*/
