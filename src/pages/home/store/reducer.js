import { fromJS } from 'immutable'
import * as constants from './constants'

const defaultState = fromJS({
  topList: [],
  contentList: []
})

export default (state = defaultState, action) => {
  switch(action.type) {
    case constants.GET_LIST:
      return state.merge({
        contentList: action.list.contentList,
        topList: action.list.topList
      })
    default:
      return state
  }
}