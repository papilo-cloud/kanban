<template>
  <div>
      <!-- <HelloWorldVue /> -->
      <!-- <Hello /> -->
    <!-- <div> -->
      
    <!-- </div> -->
      <!-- <ul>
        <li v-for="data in datas" :key="data.id">{{data.name}} <br> <span>
          {{data.done}}
        </span> <button @click="isDones(data.id)">isDone ??</button> </li>
      </ul> -->
      <Board />
  </div> 
</template>
  <script>
import Board from './components/Board.vue';
  
    export default {
  components: { Board },
      name: 'App',
      data() {
        return{
          datas: []
        }
      },
      mounted() {
        const x =  this.$store.getters.getState;
        const y =  this.$store.getters.getColumn;
        console.log(x)
        console.log(y)
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

/* .grab-bing {
  cursor : -webkit-grab;
  cursor : -moz-grab;
  cursor : -o-grab;
  cursor : grab;
  width: 100%;
}
.grab-bing:active {
  cursor : -webkit-grabbing;
  cursor : -moz-grabbing;
  cursor : -o-grabbing;
  cursor : grabbing;
}
li{
  font-size: 20px;
}
span{
  background: #0077de;
  padding: 4px;
  color: white;
} */
/* nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
