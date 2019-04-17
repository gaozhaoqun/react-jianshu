import React, { Component } from 'react'
import Toppic from './components/Toppic'
import List from './components/List'
import Writter from './components/Writter'
import Recommend from './components/Recommend'
import { 
  HomeWrapper,
  HomeLeft,
  HomeRight
} from './style'

class Home extends Component {
  render() {
    return (
      <div>
        <HomeWrapper>
          {/* 左侧 */}
          <HomeLeft>
            <img className="banner-img" src="https://www.rongxin365.com/file/4b0f9e20-d517-4730-8524-92d56c1bb15a.jpg" alt=""/>
            <Toppic />
            <List />
          </HomeLeft>

          {/* 右侧 */}
          <HomeRight>
            <Recommend />
            <Writter />
          </HomeRight>

        </HomeWrapper>
      </div>
    )
  }
}

export default Home

/*
# 21:00 - 下雨
# 26:12 - 郑州
# 30:07 - 来了
# 59: 40 - 想起了他
# 1:13:44 - 广场
# 1:25:10 - 人民不需要自由
*/