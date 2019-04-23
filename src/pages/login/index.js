import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { LoginWrapper, Main, Button } from './style'
import { actionCreators } from './store'

class Login extends PureComponent {
	render() {
		const { handleLogin, login } = this.props
		if (login) {
			return <Redirect to='/' />  // 路由重定向到首页
		} else {
			return (
				<LoginWrapper>
					<Main>
						<div>
							<input 
								className="borderBottom" 
								placeholder="手机号或邮箱" 
								type="text" 
								ref={input => this.input = input}  // ref可以获取到输入框的值
							/>
						</div>
						<div>
							<input 
								placeholder="密码" 
								type="password" 
								ref={input => this.password = input}
							/>
						</div>
						<Button onClick={() => handleLogin(this.input, this.password)}>Login</Button>
					</Main>
				</LoginWrapper>
			)
		}	
	}
}

const mapState = state => ({
	login: state.getIn(['login', 'login'])
})

const mapDispatch = dispatch => ({
	handleLogin(input, password) {
		dispatch(actionCreators.login(input.value, password.value))
	}
})

export default connect(mapState, mapDispatch)(Login)
















