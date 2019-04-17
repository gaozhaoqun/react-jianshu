import * as constants from './constants'
import axios from 'axios'

const handleGetList = data => ({
  type: constants.GET_LIST,
  list: data
})

export const getListAction = () => {
  // src/store/index 引入了 redux-thunk
  // 在actionCreators 里就可以创建一个获取数据的 (不用返回对象的函数了)
  // 必须return一个 方法, 传参 dispatch
  return dispatch => {
    axios.get('/api/indexContent.json')
      .then(
        res => {
          dispatch(handleGetList(res.data.data))
        }
      ).catch( err => console.log(err))
  }
}