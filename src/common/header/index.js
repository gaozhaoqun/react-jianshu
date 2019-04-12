import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleFocusAction, handleBlurAction } from '../../store/actionCreators'
import { CSSTransition } from 'react-transition-group'
import { 
  HeaderWrapper, 
  Logo,
  Nav,
  NavItem,
  NavIput,
  Addition,
  Button,
  SearchWrapper
} from './style'

class Header extends Component {
  render() {
    const { focused, handleFocus, handleBlur } = this.props
    return (
      <div>
        <HeaderWrapper>
          <Logo /> 
          <Nav>
            <NavItem className='left active'><i className='iconfont'>&#xe6e8;</i>&nbsp;首页</NavItem>
            <NavItem className='left'><i className='iconfont'>&#xe60c;</i>&nbsp;下载APP</NavItem>
            <NavItem className='right'>登录</NavItem>
            <NavItem className='right'>
              <i className='iconfont'>&#xe636;</i>
            </NavItem>
            <SearchWrapper>
              <CSSTransition
                timeout={200}
                in={focused}
                classNames='slide'
              >
                <NavIput 
                  onFocus={handleFocus} 
                  onBlur={handleBlur}
                  className={this.props.focused ? 'focused' : ''}
                ></NavIput>
              </CSSTransition>
              <i className={focused ? 'iconfont focused' : 'iconfont'}>&#xe60b;</i>
            </SearchWrapper>
          </Nav>
          <Addition>
            <Button className='reg'>注册</Button>
            <Button className='writting'><i className="iconfont">&#xe61b;</i>写文章</Button>
          </Addition>
        </HeaderWrapper>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.focused
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleFocus() {
      const action = handleFocusAction()
      dispatch(action)
    },
    handleBlur() {
      const action = handleBlurAction()
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)

// let Person = {
//   name: 'name',
//   age: 12,
//   sex: 'male'
// }

// let person = new Proxy(Person, {
//   get(target, key) {
//     return target[get]
//   },
//   set(target, key, value) {
//     if (key !== 'sex') {
//       return target[key] = value
//     }
//   }
// })
