import { fromJS } from 'immutable'
import * as constants from './constants'

const defaultState = fromJS({
  detailsList: []
})

export default (state = defaultState, action) => {

  switch (action.type) {
		case constants.GET_DETAIL_LIST:
			return state.merge({
				detailsList: action.data
			})

    default: 
      return state
  }
}




