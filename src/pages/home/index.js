import React, { PureComponent } from 'react'  // PureComponent 需配合 immutable 来使用
import { connect } from 'react-redux'
import Toppic from './components/Toppic'
import List from './components/List'
import Writter from './components/Writter'
import Recommend from './components/Recommend'
import { actionCreators } from './store'
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style'

class Home extends PureComponent {
  render() {
    const { handleToTop, showToTop } = this.props
    return (
      <div>
        <HomeWrapper>
          {/* 左侧 */}
          <HomeLeft>
            <img
              className="banner-img"
              src="https://www.rongxin365.com/file/4b0f9e20-d517-4730-8524-92d56c1bb15a.jpg"
              alt=""
            />
            <Toppic />
            <List />
          </HomeLeft>

          {/* 右侧 */}
          <HomeRight>
            <Recommend />
            <Writter />
          </HomeRight>
        </HomeWrapper>
        {
          showToTop ? <BackTop onClick={handleToTop}>Top</BackTop> : null
        }
      
      </div>
    )
  }

  componentDidMount() {
    this.props.getList()
    this.bindEvents()
  }

  bindEvents() {
    const { changeScroll } = this.props
    window.addEventListener('scroll', changeScroll)
  }

}


const mapState = state => ({
  handleToTop() {
    window.scroll(0, 0)
  },
  showToTop: state.getIn(['home', 'showToTop'])
})

const mapDispatch = dispatch => ({
  getList() {
    dispatch(actionCreators.getListAction())
  },
  changeScroll() {
    if (document.documentElement.scrollTop > 200) {
      dispatch(actionCreators.showTopAction(true))
    } else {
      dispatch(actionCreators.showTopAction(false))
    }
  }
})

export default connect(mapState, mapDispatch)(Home)
