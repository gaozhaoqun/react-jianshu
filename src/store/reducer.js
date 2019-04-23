import { combineReducers } from 'redux-immutable'
import { reducer as headerReducer }  from '../common/header/store' // 把大的reducer拆分成小的reducer, 再整合成一个 reducer, as 是起个别名
import { reducer as homeReducer } from '../pages/home/store'
import { reducer as detailReducer } from '../pages/detail/store'
import { reducer as loginReducer } from '../pages/login/store'

const reducer =  combineReducers({
  header: headerReducer,  // 数据结构多了一层, 组件中使用: state.deader.focused
  home: homeReducer,
  detail: detailReducer,
  login: loginReducer
})

export default reducer