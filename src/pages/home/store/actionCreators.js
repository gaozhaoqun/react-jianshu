import * as constants from './constants'
import axios from 'axios'

const handleGetList = data => ({
  type: constants.GET_LIST,
  list: data,
  totalPage: Math.ceil(data.topList.length / 3)  // 算出总页数, 除以三就是每页显示3条
})

export const changePage = page => ({
  type: constants.CHANGE_PAGE,
  page
})

export const getListAction = () => {
  // src/store/index 引入了 redux-thunk
  // 在actionCreators 里就可以创建一个获取数据的 (不用返回对象的函数了)
  // 必须return一个 方法, 传参 dispatch
  return dispatch => {
    axios.get('/api/indexContent.json')
      .then(
        res => dispatch(handleGetList(res.data.data))
      )
      .catch(
        err => console.log(err)
      )
  }
}

const actionMoreList = (data, page) => ({
  type: constants.GET_MORE_LIST,
  list: data,
  page
})

export const getMoreList = (page) => {
  return dispatch => {
    axios.get('/api/moreList.json?page=' + page)
      .then(
        res => {
          dispatch(actionMoreList(res.data.data, page + 1))
        }
      )
  }
}

export const showTopAction = show => ({
  type: constants.SHOW_TOP,
  show
})