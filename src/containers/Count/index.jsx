//1.引入count ui组件
import CountUI from '../../component/count'
//2.引入redux中的store(容器组件中的store不能亲自引入，要在上一层通过props传进来)
// import store from '../../redux/store'
//3.引入connect方法用于链接ui组件和redux的store
import { connect } from 'react-redux'
//4.引入action处理成对象
import {createIncrementAction,createDecrementAction,createIncrementAsyncAction} from '../../redux/count_action'


//简写
export default  connect(
    state =>({count:state}),
    //基本方式 ：createIncrementAction包装action  dispatch分发给store
    // (dispatch)=>({
    //     jia:num =>dispatch(createIncrementAction(num)) ,
    //     jian:num =>dispatch(createDecrementAction(num)) ,
    //     jiaAsync:(num,time) =>dispatch(createIncrementAsyncAction(num,time))
    // })

    //简单方法，直接传对象，reactredux封装了，所以不需要dispatch
    {
        jia:createIncrementAction,
        jian:createDecrementAction,
        jiaAsync:createIncrementAsyncAction
    }
)(CountUI)
