import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Globalstyle } from './style'
import { GlobalIconStyle } from './statics/iconfont/iconfont'

ReactDOM.render(
  <div>
    <Globalstyle />
    <GlobalIconStyle />
    <App />
  </div>
, document.getElementById('root'));