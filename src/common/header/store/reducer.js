import * as constants from './constants'

//immutable 为避免直接操作state导致报错
import { fromJS } from 'immutable'

const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  data: [],  // 这里定义的数组是普通数组, 从actionCreators接收的(如果不处理也是普通的)
  page: 1,
  totalPage: 1
})

const reducer = (state = defaultState, action) => {
  // 编程基础知识 - switch使用场景
  switch (action.type) {
    case constants.SEARCH_FOUCES: 
      return state.set('focused', true)
    case constants.SEARCH_BLUR:
      return state.set('focused', false)
    case constants.GET_LIST:
      return state.set('data', action.data).set('totalPage', action.totalPage)
    case constants.MOUSE_ENTER: 
      return state.set('mouseIn', true)
    case constants.MOUSE_LEAVE:
      return state.set('mouseIn', false)
    case constants.CHANGE_PAGE:
      return state.set('page', action.page)
    default: 
    return state
  }
}

export default reducer