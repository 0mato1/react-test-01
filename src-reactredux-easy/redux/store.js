/*
 * @Author: your name
 * @Date: 2021-08-06 14:24:03
 * @LastEditTime: 2021-08-06 18:09:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-app-01\src\redux\store.js
 */
//引入createstore用于创建store
import {createStore,applyMiddleware} from 'redux'
//引入为count组件服务的reducer
import countReducer from './count_reducer'
//引入redux-thunk支持异步action
import thunk from 'redux-thunk'
//暴露store
export default  createStore(countReducer,applyMiddleware(thunk))