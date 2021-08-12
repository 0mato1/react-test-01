/*
 * @Author: your name
 * @Date: 2021-08-06 16:44:33
 * @LastEditTime: 2021-08-06 18:06:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-app-01\src\redux\count_action.js
 */
import {INCREMENT,DECREMENT} from './constant'
import store from './store'

export const createIncrementAction =(data) => {
    return {type:INCREMENT,data}
}
export const createDecrementAction =(data) => {
    return {type:DECREMENT,data}
}
export const createIncrementAsyncAction =(data,time) => {
    return ()=>{
        setTimeout(() => {
            store.dispatch(createIncrementAction(data)) 
        }, time);
    }
}