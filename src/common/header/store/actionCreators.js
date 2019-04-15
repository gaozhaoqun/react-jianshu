import * as constants from './constants'
import { fromJS } from 'immutable' // 处理一下, 变成immutable类型的数组
import axios from 'axios'

export const handleFocusAction = () => ({
  type: constants.SEARCH_FOUCES
})
export const handleBlurAction = () => ({
  type: constants.SEARCH_BLUR
})

export const mouseIn = () => ({
  type: constants.MOUSE_ENTER
})

export const mouseOut = () => ({
  type: constants.MOUSE_LEAVE
})

export const changePage = (page) => ({
  type: constants.CHANGE_PAGE,
  page
})

const handleList = (data) => ({
  type: constants.GET_LIST,
  data: fromJS(data), // 数据类型统一, 这里要处理一下, 变成immutable类型的数组
  totalPage: Math.ceil(data.length / 10) // 算出总页数, 每页10条
})

export const getList = () => {
  // redux-thunk 必须返回一个函数, 函数可以接收一个dispatch方法
  return (dispatch) => {
    axios.get('/api/headerList.json')
      .then(res => {
        dispatch(handleList(res.data.data))
      })
  }
} 