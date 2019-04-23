import styled from 'styled-components'

export const DetailWrapper = styled.div`
  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 40px;
  width: 620px;
`

export const Title = styled.div`
  word-break: break-word!important;
  word-break: break-all;
  margin: 20px 0 0;
  font-family: -apple-system,SF UI Display,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
  font-size: 34px;
  font-weight: 700;
  line-height: 1.3;
`

export const Content = styled.div`
  padding-bottom: 25px;
  width: 700px;
  margin-left: -40px;
  margin-top: 40px;	
  text-align: center;
	img {
		display: block;
		margin-bottom: 40px;
	  transition: all .15s linear;
	  z-index: 100;
	  -webkit-filter: blur(0);
	  filter: blur(0);
	  opacity: 1;
	  max-width: 100%;
    height: auto;
    vertical-align: middle;
    border: 0;
    cursor: -webkit-zoom-in;
    transition: all .25s ease-in-out;
	}
	p {
    margin: 0 0 25px;
    color: #2f2f2f;
    word-break: break-word!important;
    word-break: break-all;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.7;
    text-align: left;
	}
`

