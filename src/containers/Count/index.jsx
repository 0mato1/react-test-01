//1.引入count ui组件
import CountUI from '../../component/count'
//2.引入redux中的store(容器组件中的store不能亲自引入，要在上一层通过props传进来)
// import store from '../../redux/store'
//3.引入connect方法用于链接ui组件和redux的store
import { connect } from 'react-redux'
//4.引入action处理成对象
import {createIncrementAction,createDecrementAction,createIncrementAsyncAction} from '../../redux/count_action'
//a函数返回的是一个对象
//中的key作为传递给ui组件props的key，value就是传递给props的value  --状态
function mapStateToProps (state){
    return {count:state}
}
//b函数传递的是操作状态的方法   --方法
function mapDispatchToProps (dispatch){
    return {
        jia:num =>dispatch(createIncrementAction(num)) ,
        jian:num =>dispatch(createDecrementAction(num)) ,
        jiaAsync:(num,time) =>dispatch(createIncrementAsyncAction(num,time))
}}
//使用connect创建count的容器组件，包裹ui组件
export default  connect(mapStateToProps,mapDispatchToProps)(CountUI)
