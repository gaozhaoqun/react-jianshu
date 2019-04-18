import { fromJS } from 'immutable'
import * as constants from './constants'

const defaultState = fromJS({
  topList: [],
  contentList: [],
  recommendList: [],
  page: 1,
  totalPage: 1,
})

export default (state = defaultState, action) => {
  switch(action.type) {
    case constants.GET_LIST:
      return state.merge({
        contentList: action.list.contentList,
        topList: action.list.topList,
        recommendList: action.list.recommendList,
        totalPage: action.totalPage
      })
    case constants.CHANGE_PAGE: 
      return state.set('page', action.page)
    default:
      return state
  }
}
