import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    account_list:[ // 用于记账
      {
        type: "支出",
        abst: "测试数据1",
        money: 10,
        ts: 1507607368000,
      },
      { type: "支出", abst: "测试数据2", money: 10, ts: 1607607368001 },
      { type: "支出", abst: "测试数据3", money: 10, ts: 1607607368002 },
      { type: "支出", abst: "测试数据4", money: 10, ts: 1607607368230 },
      { type: "支出", abst: "买小零食", money: 10, ts: 1607607362000 },
      { type: "支出", abst: "买小零食", money: 10, ts: 1607607328000 },
      { type: "支出", abst: "买小零食", money: 10, ts: 1607607268000 },
    ],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
