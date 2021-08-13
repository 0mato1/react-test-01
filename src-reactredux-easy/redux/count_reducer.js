/*
 * @Author: your name
 * @Date: 2021-08-06 14:24:15
 * @LastEditTime: 2021-08-06 17:12:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-app-01\src\redux\count_reducer.js
 */

/*
1.用于创建一个为count服务的reducer reducer接受参数输出返回值，本质为一个函数
2.会接到两个参数，prestate之前的状态(state)，动作对象(action)
3.

*/
import {INCREMENT,DECREMENT} from './constant'
const initState = 0
export default function countReducer(preState=initState,action){
    const {type,data} = action
    switch (type) {
        case INCREMENT:
            return preState + data
        case DECREMENT:
            return preState - data
    
        default:
            return preState
    }
}