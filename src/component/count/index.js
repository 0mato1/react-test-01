/*
 * @Author: your name
 * @Date: 2021-08-06 09:45:07
 * @LastEditTime: 2021-08-06 18:03:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-app-01\src\component\count\index.js
 */
import React, { Component } from 'react'
//引入store获取状态
import store  from '../../redux/store'
//引入actioncreate负责格式化参数
import {createIncrementAction,createDecrementAction,createIncrementAsyncAction} from '../../redux/count_action'
export default class Count extends Component {
    //加
    // increment=()=>{
    //     const {value} = this.selectNum
    //     const {count} = this.state
    //     this.setState({count:count + value*1})
    // }
    increment= () => {
        const {value} = this.selectNum
        store.dispatch(createIncrementAction(value*1))
    }
    //减
    decrement=()=>{
        const {value} = this.selectNum
        store.dispatch(createDecrementAction(value*1))
    }
    //奇数加
    addWhenOne=()=>{
        const {value} = this.selectNum
        const count = store.getState()
        if(count % 2!==0){ 
            store.dispatch(createIncrementAction(value*1))
        }
    }
    //异步加
    addSetOne=()=>{
        const {value} = this.selectNum
        setTimeout(() => {
            store.dispatch(createIncrementAsyncAction(value*1,500))
        }, 500);
    }
    render() {
        return (
            <div>
                <h1>当前求和为：{store.getState()}</h1>
                <select ref={c=>this.selectNum=c}>
                <option value='1'>1</option>
                <option value='2'>2</option> 
                <option value='3'>3</option>     
                 </select>
                 <button onClick={()=>{this.increment()}}>+</button>
                 <button onClick={()=>{this.decrement()}}>-</button>
                 <button onClick={()=>{this.addWhenOne()}}>奇数加</button>
                 <button onClick={()=>{this.addSetOne()}}>异步加</button>

            </div>
        )
    }
}
