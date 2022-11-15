import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: [
      { id: 'food', name: 'Food' },
      { id: 'transport', name: 'Transport' },
      { id: 'clothing', name: 'Clothing' },
      { id: 'other', name: 'Other' }
    ],
    /*     startList: [{ number: '#', date: 'Date', category: 'Category', value: 'Value' },
        { number: 1, date: '01.01.2000', category: 'Food', value: '50$' },
        { number: 2, date: '02.01.2000', category: 'Transport', value: '100$' },
        { number: 3, date: '03.01.2000', category: 'Clothing', value: '200$' }], */
    list: [{ number: '#', date: 'Date', category: 'Category', value: 'Value' },
    { number: 1, date: '01.01.2000', category: 'Food', value: '50$' },
    { number: 2, date: '02.01.2000', category: 'Transport', value: '100$' },
    { number: 3, date: '03.01.2000', category: 'Clothing', value: '200$' }],
  },
  getters: {
    getCategories: (state) => state.categories,
    getStartList: (state) => state.startList,
    getList: (state) => state.list,
  },
  mutations: {
    setList: (state, newline) => {

      newline.number = state.list[state.list.length - 1].number + 1;
      newline.value = newline.value + '$';

      state.list.push({ ...newline })
    },

  },
  actions: {
    /*  start: (context, data) => context.commit('setList', data) */
  },
  modules: {
  }
}
)
