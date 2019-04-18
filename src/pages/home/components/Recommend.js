import React, { Component } from 'react'
import { RecommendWrapper } from '../style'
import { connect } from 'react-redux'

class Recommend extends Component {
  render() {
    return (
      <div>
        <RecommendWrapper>
          {
            this.props.recommendList.map(item => (
                <li key={item.id}><i style={{backgroundImage:"url(" + item.imgUrl + ")"}}>&emsp;</i></li>
            ))
          }
        </RecommendWrapper>
      </div>
    )
  }
}

const marState = state => ({
  recommendList: state.getIn(['home', 'recommendList'])
})

export default connect(marState, null)(Recommend)