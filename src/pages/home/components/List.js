import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ListWrapper, ListInfo, LoadMore } from '../style'
import { actionCreators } from '../store'

class List extends Component {
  render() {
    const { contentList, handleLoadMore, contentPage } = this.props
    return (
      <div>
        {
          contentList.map((item, index) => (
            <ListWrapper key={index}>
              <ListInfo>
                <h1>{item.title}</h1>
                <p className="content">{item.brief}</p>
                <div className="bottom">
                  <span>{item.author}</span>
                  <span><i className="iconfont">&#xe613;</i>{item.message}</span>
                  <span><i className="iconfont">&#xe741;</i>{item.heart}</span>
                </div>
              </ListInfo>
              <img src={item.imgUrl} alt=''/>
            </ListWrapper>
          ))
        }
        <LoadMore onClick={() => handleLoadMore(contentPage)}>Load More</LoadMore>
      </div>
    )
  }
}

const mapState = state => ({
  contentList: state.getIn(['home', 'contentList']),
  contentPage: state.getIn(['home', 'contentPage'])
})

const mapDispatch = dispatch => ({
  handleLoadMore(page) {
    dispatch(actionCreators.getMoreList(page))
  }
})

export default connect(mapState, mapDispatch)(List)
