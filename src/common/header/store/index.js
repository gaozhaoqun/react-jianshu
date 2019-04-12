/*
  把大的 reducer拆分成小的, header部分的 就单独建一个,
  然后 用index.js 作为入口统一导出出去

  export default 导出的 就用import 直接用
  export 导出的 引入的时候 import { 解构赋值 }
*/

import reducer from './reducer'
import * as actionCreators from './actionCreators'
import * as constants from './constants'

export { reducer, actionCreators, constants }