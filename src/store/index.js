import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 机构列表的id
   agentId: '1010000000000',
  //  机构名称
  agentName: '北京分行'
  },
  mutations: {
    // 修改机构列表的id
    change_agent_id (state, value) {
      state.agentId = value
    },
    // 修改机构名称
    change_agent_name (state, value) {
      state.agentName = value
    }
  }
})
