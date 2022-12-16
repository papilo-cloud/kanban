import { createStore } from 'vuex'
import data from '../datas/data.json';

export default createStore({
  state: {
    index: [
     { name: 'Jonh', done: false, id:0},
      {name: 'Doe', done: true, id: 1},
     {name: 'ABU', done: true, id: 2}
    ],
    mainBoard: [data],
    boardsIndex: 1,
    boardsColumn: 0
  },
  getters: {
    getState(state) {
      return state.mainBoard[0].boards
    },
    getColumn(state){
      return state.mainBoard[0].boards[state.boardsIndex].columns
      // return state.boards[state.boardsIndex].columns[state.selectionColumn]
    }
  },
  mutations: {
    loadStore(state) {
			if(localStorage.getItem('stoe')) {
          this.replaceState(
          Object.assign(state, JSON.parse(localStorage.getItem('stor'))));
        }
       
		},
    // DONES(state, payload){
    //   const index = state.index.find(idx => idx.id == payload)
    //   index.done = !index.done
    //   console.log(index)
    // }
  },
  actions: {
    // dones(context, payload){
    //   context.commit('DONES', payload)
    // }
  },
  modules: {
  }
})
