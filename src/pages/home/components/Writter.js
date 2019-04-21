import React, { Component } from 'react'
import { WritterWrapper, TopDesc, WritterItem } from '../style'
import { connect } from 'react-redux'
import { actionCreators } from '../store' 

class Writter extends Component {
  render() {
    const { list, page, totalPage } = this.props
    const pageList = []
    if (list.length) {
      for (let i = (page - 1) * 3; i < page * 3; ++ i) {
        list[i] && pageList.push(
          <WritterItem key={list[i].id}>
            <div className="item-left">
              <div className="imgBox">
                <img src={list[i].imgUrl} alt=""/>
              </div>
              <div className="desc">
                <div className="author">{list[i].title}</div>
                写了317.7K文字·3.6K喜欢
              </div>
            </div>
            <div className="item-right">+关注</div>
          </WritterItem>
        )
      }
    }
    return (
      <div>
        <WritterWrapper>
          <TopDesc>
            <p>推荐作者</p>
            <span
              onClick={() => {this.props.spin(page, totalPage, this.icon)}}
            >
              <i 
                className="iconfont change"
                ref={(icon) => {this.icon = icon}}   
                >&#xe606;
              </i>
              换一批
            </span>
          </TopDesc>
          {pageList}
        </WritterWrapper>
      </div>
    )
  }
}

const mapState = state => ({
  list: state.getIn(['home', 'topList']),
  totalPage: state.getIn(['home', 'totalPage']),
  page: state.getIn(['home', 'page']),
})

const mapDispatch = dispatch => {
  return {
    spin (page, totalPage, rotateDiv) {
      let originAngel = rotateDiv.style.transform.replace(/[^0-9]/ig, '') // 这里是要获取DOM上的rotate的值, 不能写死为0!
      if(!originAngel) {
        originAngel = 0
      } else {
        originAngel = parseInt(originAngel) // 必须转为number类型
      }
      rotateDiv.style.transform = 'rotate(' + (originAngel + 360) + 'deg)'
  
      if (page < totalPage) {
        dispatch(actionCreators.changePage(page + 1))
      } else {
        dispatch(actionCreators.changePage(1))
      }
    }
  }
}

export default connect(mapState, mapDispatch)(Writter)




















