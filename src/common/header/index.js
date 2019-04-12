import React from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'

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

const Header = props => {
  const { focused, handleFocus, handleBlur } = props
  return ( 
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
              className={focused ? 'focused' : ''}
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
  )
}


const mapStateToProps = state => {
  return {
    focused: state.header.focused  // 数据结构多了一层
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleFocus() {
      dispatch(actionCreators.handleFocusAction())
    },
    handleBlur() {
      dispatch(actionCreators.handleBlurAction())
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
