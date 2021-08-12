/*
 * @Author: your name
 * @Date: 2021-08-06 09:28:09
 * @LastEditTime: 2021-08-06 16:41:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-app-01\src\index.js
 */
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './redux/store'

ReactDOM.render(<App/>,document.getElementById('root'))
store.subscribe(() => {
    ReactDOM.render(<App/>,document.getElementById('root'))
})
