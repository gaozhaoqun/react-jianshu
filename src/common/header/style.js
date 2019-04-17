import styled from 'styled-components'
import logoPic from '../../statics/images/jianshu-logo.png'

export const HeaderWrapper = styled.div`
  position: relative;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`

export const Logo = styled.a.attrs({
  href: '/'
})`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100px;
  height: 56px;
  background: url(${logoPic});
  background-size: contain;
  background-repeat: no-repeat;
`

export const Nav = styled.div`
  width: 960px;
  height: 100%;
  margin: 0 auto;
  box-sizing: border-box;
`

export const NavItem = styled.div`
	line-height: 56px;
	padding: 0 15px;
	font-size: 17px;
  color: #333;
  cursor: pointer;
	&.left {
		float: left;
	}
	&.right {
		float: right;
		color: #969696;
	}
	&.active {
		color: #ea6f5a;
	}
`;

export const NavIput = styled.input.attrs({
  placeholder: 'Search'
})`
  width: 160px;
  height: 38px;
  margin-top: 9px;
  margin-left: 20px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  padding: 0 35px 0 20px;
  font-size: 14px;
  &.focused {
    width: 240px;
  }
  &::placeholder {
    color: #999;
  }
` 

export const Addition = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 56px; 
`

export const Button = styled.div`
  float: left;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 20px;
  border-radius: 19px;
  line-height: 38px;
  border: 1px solid #ec6149;
  font-size: 14px;
  text-align: center;
  box-sizing: border-box;
  &.reg {
    width: 80px;
    color: #ec6149;
    cursor: pointer;
    transition: all .1s linear;
    &:hover {
      background-color: rgba(236,97,73,.05);
      transition: all .1s linear;
    }
  }
  &.writting {
    background: #ec6149;
    width: 110px;
    color: #fff;
    cursor: pointer;
  }
`

export const SearchWrapper = styled.div`
  position: relative;
  float: left;
  .zoom {
    position: absolute;
    top: 12px;
    right: 10px;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 50%;
    &.focused {
      background: #ccc;
      color: #fff;
    }
  }
  .slide-enter {
    transition: all .2s linear;
  }
  .slide-enter-active {
    width: 240px;
  }
  .slide-exit {
    transition: all .2s linear;
  }
  .slide-exit-active {
    width: 160px;
  }
`

export const SearchInfo = styled.div`
  position: absolute;
  top: 57px;
  left: -40px;
  width: 340px;
  text-align: center;
  padding: 20px 10px;
  box-sizing: border-box;
  border: 1px solid #f0f0f0;
  box-shadow: 0 0 5px rgba(0, 0, 0, .3);
  background: #fff;
  .change{ 
    display: inline-block;
    margin-right: 2px;
    transform: rotate(90deg);
    transition: all .2s ease-in;
    transform-origin: center center;
  }
`

export const SearchTop = styled.div`
  width: 100%;
  height: 40px;
  p {
    float: left;
  }
  span {
    display: block;
    float: right;
    color: #282;
    cursor: pointer;
    text-decoration: none;
  }
`

export const SearchBox = styled.div`
  width: 100%;
  text-align: left;
  margin-top: -20px;
  span {
    display: inline-block;
    font-size: 12px;
    padding: 3px 14px;
    border: 1px solid #ccc;
    border-radius: 3px;
    margin-right: 10px;
    margin-top: 10px;
  }
`