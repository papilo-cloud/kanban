<template>
  <div class="app">
    <side-bar />
    <div class="over">
      <Header/>
      <div class="overflow">
        <Board/>
      </div>
    </div>
  </div> 
</template>
  <script>
import Header from './components/Header.vue';
import Board from './components/Board.vue';
import SideBar from './components/SideBar.vue';
  
    export default {
  components: { Board, SideBar, Header },
      name: 'App',
      data() {
        return{
          datas: []
        }
      },
      mounted() {
        const x =  this.$store.getters.getState;
        const y =  this.$store.getters.getColumn;
        const z =  this.$store.getters.getBoardsName;
        const c =  this.$store.getters.getTasks;
        console.log(x)
        console.log(y)
        console.log(z)
        console.log(c)
        // this.datas = x
        // console.log(this.datas)
      },
      beforeCreate() {
      this.$store.commit('loadStore');
	  },
    methods: {
      isDones(index){
        this.$store.dispatch('dones', index)
      }
    }
    }
  </script>
<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app{
  font-family: sans-serif;
  margin: 0;
  padding: 0;
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: 280px 1fr;
  background: #20212C;
  color: #fff;
  font-size: 14px;
  overflow: none;
}


.overflow, .over{
  overflow: auto;
}

.overflow::-webkit-scrollbar {
  display: none;
} 

</style>
