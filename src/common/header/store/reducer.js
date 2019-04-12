import * as constants from './constants'

const defaultState = {
  focused: false
}

const reducer = (state = defaultState, action) => {
  if (action.type === constants.SEARCH_FOUCES) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.focused = true
    return newState
  }
  if (action.type === constants.SEARCH_BLER) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.focused = false
    return newState
  }
  return state
}

export default reducer