/*
 * @Author: your name
 * @Date: 2021-08-06 09:45:07
 * @LastEditTime: 2021-08-12 14:22:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-app-01\src\component\count\index.js
 */
import React, { Component } from 'react'

export default class Count extends Component {
 
    increment= () => {
        const {value} = this.selectNum
    }
    //减
    decrement=()=>{
        const {value} = this.selectNum
    }
    //奇数加
    addWhenOne=()=>{
        const {value} = this.selectNum
       
    }
    //异步加
    addSetOne=()=>{
        const {value} = this.selectNum
    }
    render() {
        return (
            <div>
                <h1>当前求和为：</h1>
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
