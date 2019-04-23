import * as constants from './constants'
import axios from 'axios'



const loginAction = () => ({
	type: constants.LOGIN,
	value: true
})

export const login = (account, password) => {
	return dispatch => {
		axios.get('/api/login.json?account=' + account + '&password=' + password)
			.then(res => {
				const result = res.data.data
				if (result) {
					dispatch(loginAction())
				} else {
					alert('error')
				}
			})
	}
}

export const logout = () => ({
	type: constants.LOGOUT,
	value: false
})