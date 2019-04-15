import React, { Component } from 'react'
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
  SearchWrapper,
  SearchInfo,
  SearchTop,
  SearchBox,
} from './style'


class Header extends Component {
  searchClick = () => {
    this.focused = true;
  }

  showSearchInfo () {
    const { focused, list, page, totalPage, handleMouseIn, handleMouseOut, mouseIn, handleChangePage } = this.props

    const pageList = []
    const jsList = list.toJS() // immutable 类型数组转为普通js数组
    // reducer 里初始值: page: 1
    if (jsList.length) {
      for (let i = (page - 1) * 10; i < page * 10; ++ i) { // 如果是第一页 i 就是0 到 9, 如果是page=2 第二页, i就是 10 到 19
        // console.log(i) // 如果是第一页 i 就是0 到 9, 如果是page=2 第二页, i就是 10 到 19
        jsList[i] && pageList.push(
          <span key={jsList[i]}>{jsList[i]}</span>
        )
      }
    }

    if (focused || mouseIn) {
      return (
        <SearchInfo onMouseEnter={handleMouseIn} onMouseLeave={handleMouseOut}>
          <SearchTop>
            <p>热门搜索</p>
            <span onClick={() => handleChangePage(page, totalPage)}>换一批</span>
          </SearchTop>
          <SearchBox>
            { pageList }
          </SearchBox>
        </SearchInfo>
      )
    } else {
      return null
    }
  }

  render() {
    const { focused, handleFocus, handleBlur } = this.props
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
            {this.showSearchInfo()}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className='reg'>注册</Button>
          <Button className='writting'><i className="iconfont">&#xe61b;</i>写文章</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = state => {
  return {  
    // focused: state.get('header').get('focused')  // 引入了 immutable 数据结构多了一层
    focused: state.getIn(['header', 'focused']), // 意思是从 state里取值, 取的是 header下面的focused这个值
    mouseIn: state.getIn(['header', 'mouseIn']),
    list: state.getIn(['header', 'data']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage'])
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleFocus() {
      dispatch(actionCreators.handleFocusAction())
      dispatch(actionCreators.getList())
    },
    handleBlur() {
      dispatch(actionCreators.handleBlurAction())
    },
    handleMouseIn() {
      dispatch(actionCreators.mouseIn())
    },
    handleMouseOut() {
      dispatch(actionCreators.mouseOut())
    },
    handleChangePage(page, totalPage) {
      if (page < totalPage) {
        dispatch(actionCreators.changePage(page + 1))
      } else {
        dispatch(actionCreators.changePage(1))
      }
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
