import React, { Component } from 'react'
import { ListWrapper, ListInfo } from '../style'
import { connect } from 'react-redux'
import { actionCreators } from '../store'

class List extends Component {
  render() {
    const { contentList } = this.props
    return (
      <div>
        {
          contentList.map( item => (
            <ListWrapper key={item.id}>
              <ListInfo>
                <h1>{item.title}</h1>
                <p className="content">{item.brief}</p>
                <div className="bottom">
                  <span>{item.author}</span>
                  <span><i className="iconfont">&#xe613;</i>{item.message}</span>
                  <span><i className="iconfont">&#xe741;</i>{item.heart}</span>
                </div>
              </ListInfo>
              <img src={item.imgUrl} />
            </ListWrapper>
          ))
        }
      </div>
    )
  }
  componentDidMount() {
    this.props.getList()
  }
}

const mapState = state => ({
  contentList: state.getIn(['home', 'contentList'])
})

const mapDispatch = dispatch => ({
  getList() {
    dispatch(actionCreators.getListAction())
  }
})

export default connect(mapState, mapDispatch)(List)