
/*
 * @Author: your name
 * @Date: 2021-08-05 16:13:05
 * @LastEditTime: 2021-08-12 14:48:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-app-01\src\App.js
 */
import React, { Component } from 'react'
import Count from './containers/Count'
import store from './redux/store'
export default class App extends Component {
    render() {
        return (
            <div>
                <Count store={store}></Count>
            </div>
        )
    }
}
