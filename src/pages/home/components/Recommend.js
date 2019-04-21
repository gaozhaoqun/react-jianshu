import React, { Component } from 'react'
import { RecommendWrapper, IecommendItem } from '../style'
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
          <IecommendItem imgUrl="//upload-images.jianshu.io/upload_images/5412749-7dca779718cd3d09.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"></IecommendItem>
        </RecommendWrapper>
      </div>
    )
  }
}

const marState = state => ({
  recommendList: state.getIn(['home', 'recommendList'])
})

export default connect(marState, null)(Recommend)