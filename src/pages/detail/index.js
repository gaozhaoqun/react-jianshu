import React, { Component } from 'react'
import { connect } from 'react-redux'
import { DetailWrapper, Title, Content } from './style'
import { actionCreators } from './store'
import { withRouter } from 'react-router-dom'

class Detail extends Component {
  render() {
	// console.log(this.props.match.params.id ) // 获取地址栏中的 id - http://localhost:3000/detail/1
  	const { list } = this.props
    return (
      <DetailWrapper>
				<Title>{list.title}</Title>
				<Content 
					// dangerouslySetInnerHTML 让字符串在html显示
					dangerouslySetInnerHTML = {{ __html: list.content }}
				/>
      </DetailWrapper>
    )
  }

  componentDidMount() {
  	const { getList } = this.props
  	getList(this.props.match.params.id)
  }
}

const mapState = state => {
	return {
		list: state.getIn(['detail', 'detailsList'])
	}
}

const mapDispatch = dispatch => {
	return {
		getList(id) {
			dispatch(actionCreators.getListAction(id))
		}
	}
}

// withRouter: 由于用了 loadable.js 不能直接获取路由里的内容
// 因为它不是route路由直接对应的组件
// 意思是: 让Detail 有能力获取到 router里的所有的参数和内容
// 引入 import { withRouter } from 'react-router-dom'
export default connect(mapState, mapDispatch)(withRouter(Detail)) 









































