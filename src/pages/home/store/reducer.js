import { fromJS } from 'immutable'
import * as constants from './constants'

const defaultState = fromJS({
  topList: [],
  contentList: [],
  recommendList: [],
  page: 1,
  totalPage: 1,
  contentPage: 1,
  showToTop: false
})

const getList = (state, action) => (
  state.merge({
    contentList: action.list.contentList,
    topList: action.list.topList,
    recommendList: action.list.recommendList,
    totalPage: action.totalPage
  })
)

const getMoreList = (state, action) => (
  state.merge({
    contentList: state.get('contentList').concat(action.list),
    contentPage: action.page
  })
)

export default (state = defaultState, action) => {
  switch(action.type) {
    case constants.GET_LIST:
      return getList(state, action)

    case constants.CHANGE_PAGE: 
      return state.set('page', action.page)

    case constants.GET_MORE_LIST:
      return getMoreList(state, action)

    case constants.SHOW_TOP: 
      return state.set('showToTop', action.show)
    default:
      return state
  }
}
