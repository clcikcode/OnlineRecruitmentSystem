// 初始化一个vuex的实例（数据仓库） 导出即可
import Vuex from 'vuex'
import WsModule from './modules/WsModule'

// 初始化
const store = new Vuex.Store({
  // 配置（state|mutations|actions）
  modules: {
    ws: WsModule
  }
})

export default store
