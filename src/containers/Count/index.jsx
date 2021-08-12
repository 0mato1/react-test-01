//1.引入count ui组件
import CountUI from '../../component/count'
//2.引入redux中的store(容器组件中的store不能亲自引入，要在上一层通过props传进来)
// import store from '../../redux/store'
//3.引入connect方法用于链接ui组件和redux的store
import { connect } from 'react-redux'

//使用connect创建count的容器组件，包裹ui组件
export default  connect()(CountUI)
