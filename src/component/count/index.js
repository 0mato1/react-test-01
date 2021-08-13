/*
 * @Author: your name
 * @Date: 2021-08-12 11:47:05
 * @LastEditTime: 2021-08-13 09:44:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-app-02\src\component\count\index.js
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import{createIncrementAction,createDecrementAction,createIncrementAsyncAction} from '../../redux/count_action'
 class Count extends Component {
    operation=()=>{
        this.props.add(1)
    }
    render() {
        return (
            <div>
                <div>当前求和为：{this.props.num}</div>
                <button onClick={this.operation}>点击我</button>

            </div>

            
        )
    }
}
export default connect(
    (state)=>({num:state}),
    {
        add:createIncrementAction,
        jian:createDecrementAction,
        jia:createIncrementAsyncAction
    }
)(Count)