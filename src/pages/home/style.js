import styled from "styled-components";

export const HomeWrapper = styled.div`

  width: 960px;
  margin: 0 auto;
  overflow: hidden;

`
export const HomeLeft = styled.div`
  float: left
  width: 625px;
  margin: 30px 0 0 15px;
  .banner-img {
    width: 625px;
  }
`
export const HomeRight = styled.div`
  float: right;
  width: 280px;
`
// 首页 小热门专题 START
export const ToppicWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0 10px 0;
  margin-left: -18px;
`

export const TopicItem = styled.div`
  float: left;
  height: 32px;
  line-height: 32px;
  font-size: 14px;
  background: #f7f7f7;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  padding-right: 12px;
  margin-left: 18px;
  margin-bottom: 15px;
  .toppic-pic {
    display: block;
    float: left;
    height: 32px;
    width: 32px;
    margin-right: 12px;
  }
`
// 首页 小热门专题 END

// 首页 左侧列表START
export const ListWrapper = styled.div`
  overflow: hidden;
  padding: 15px 0 20px;
  border-top: 1px solid #f0f0f0;
  img {
    display: block;
    float: right;
    width: 120px;
    height: 120px;
  }
`
export const ListInfo = styled.div`
  float: left;
  height: 120px;
  width: 500px;
  h1 {
    font-size: 22px;
    line-height: 48px;
    font-weight: 700;
  }
  .content {
    font-size: 14px;
    line-height: 24px;
    color: #666;
    height: 50px;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .bottom {
    width: 100%;
    height: 32px;
    line-height: 32px;
    color: #999;
  }
  .bottom span {
    display: inline-block;
    margin-right: 14px;
  }
  .bottom span i {
    margin-right: 4px;
  }
`
export const LoadMore = styled.div`
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background: #282a34;
  color: #f0f0f0;
  border-radius: 40px;
  cursor: pointer;
  user-select: none;
  margin: 40px auto;
  box-shadow: 0 5px 15px rgba(0, 0, 0, .6);
`

// 首页 左侧列表 END

// 右侧顶部 热门推荐 START
export const RecommendWrapper = styled.ul`
  min-height: 250px;
  margin-top: 30px;
  overflow: hidden;
  li {
    background: #f0f0f0;
    margin-bottom: 10px;
    i {
      height: 40px;
      line-height: 40px;
      display: block;
      background-size: 100% 100%;
    }
  }
`

export const IecommendItem = styled.div`
  width: 100%;
  height: 40px;
  background-size: 100%;
  background-repeat: no-repeat;
  background: url(${props => props.imgUrl })
`

// 右侧 推荐作家
export const WritterWrapper = styled.div`
  overflow: hidden;
  padding: 10px 0;
`

export const TopDesc = styled.div`
  height: 40px;
  line-height: 40px;
  color: #999;
  p {
    display: block;
    float: left;
  }
  span {
    display: block;
    float: right;
    cursor: pointer;
    user-select: none;
  }
  .change {
    display: inline-block;
    margin-right: 2px;
    transition: all .2s ease-in;
    transform-origin: center center;
  }
`

export const WritterItem = styled.div`
  height: 50px;
  clear: both;
  margin-bottom: 10px;
  .item-left {
    float: left;
    .imgBox {
      float: left;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      overflow: hidden;
      margin-right: 10px;
      img {
        width: 50px;
        height: 50px;
      }
    }
    .desc {
      float: left;
      height: 50px;
      font-size: 12px;
      padding: 6px 0;
      box-sizing: border-box;
      color: #999;
      .author {
        color: #333;
        margin-bottom: 6px;
      }
    }
  }
  .item-right {
    float: right;
    line-height: 24px;
    color: #383;
  }
`
// 返回顶部
export const BackTop = styled.div`
  position: fixed;
  bottom: 80px;
  right: 40px;
  width: 80px;
  height: 80px;
  line-height: 80px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 50%;
  color: #282a34;
  background: #fff;
  font-size: 10px;
  cursor: pointer;
  user-select: none;
  transition: all .2s linear;
  &:hover {
    background: #282a34;
    color: #fff;
    transition: all .2s linear;
  }
`