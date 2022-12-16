<template>
 <div  class="grab-bing">
     <div class="main-board" v-for="(board, idx) in $store.getters.getColumn" :key="idx">
       <p>{{board.name}}</p>
       <p v-for="(task, i) in board.tasks " :key="i">{{task.title }}</p>
     </div>
  </div>
</template>

<script>
//  import { dragscroll } from 'vue-dragscroll'
    export default {
      name: 'Board',
      // directives: {
      //   dragscroll 
      // },
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
div{
  overflow: auto;
  /* overflow-y: auto; */
  /* transition: .4s;
  width: 400px;
  height: 490px;
}  */
</style>
