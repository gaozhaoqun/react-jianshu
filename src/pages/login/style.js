import styled from 'styled-components'

export const LoginWrapper = styled.div`
	height: 100%;
  min-height: 750px;
  text-align: center;
  font-size: 14px;
  background-color: #f1f1f1;
`

export const Main = styled.div`
	width: 400px;
  margin: 60px auto 0;
  padding: 50px 50px 30px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0, 0, 0, .1);
  vertical-align: middle;
  display: inline-block;
  box-sizing: border-box;		
  div {
  	width: 100%;
  	.borderBottom {
	    border-bottom: none;
			border-radius: 4px 4px 0 0;
  	}
  }
  input {
  	outline: none;
  	border-bottom: none;
    border-radius: 4px 4px 0 0;
    width: 100%;
    height: 50px;
    margin-bottom: 0;
    padding: 4px 12px 4px 35px;
    border: 1px solid #c8c8c8;
    border-radius: 0 0 4px 4px;
    background-color: hsla(0,0%,71%,.1);
    vertical-align: middle;
    box-sizing: border-box;
  }
`

export const Button = styled.div`
	  margin-top: 20px;
    width: 100%;
    height: 40px;
    padding: 12px 18px 9px;
    font-size: 14px;
    border: none;
    border-radius: 25px;
    color: #fff;
    background: #3194d0;
    cursor: pointer;
    outline: none;
    display: block;
    clear: both;
    box-sizing: border-box;
    user-select: none;
`



