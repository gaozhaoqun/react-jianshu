import { combineReducers } from 'redux'
import { reducer as headerReducer }  from '../common/header/store' // 把大的reducer拆分成小的reducer, 再整合成一个 reducer, as 是起个别名

const reducer =  combineReducers({
  header: headerReducer  // 数据结构多了一层, 组件中使用: state.deader.focused
})

export default reducer