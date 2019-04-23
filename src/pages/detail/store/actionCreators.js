import * as constants from './constants'
import axios from 'axios'

const changeDetail = (data) => ({
	type: constants.GET_DETAIL_LIST,
	data
})

export const getListAction = (id) => {
	return dispatch => {
		axios.get('/api/details.json?id=' + id)
			.then(res => {
				dispatch(changeDetail(res.data.data))
			})
	}
}