import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { 
  ToppicWrapper,
  TopicItem,
} from '../style.js'

class Toppic extends PureComponent {
  render() {
    const { list } = this.props
    return (
      <div>
        <ToppicWrapper>
          {
            list.map(item => (
              <TopicItem key={item.id}>
                <img 
                  className="toppic-pic" 
                  src={item.imgUrl}
                  alt=''
                />
                <span>{item.title}</span>
              </TopicItem>
            ))
          }
        </ToppicWrapper>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    list: state.getIn(['home', 'topList'])
  }
}

export default connect(mapStateToProps, null)(Toppic)