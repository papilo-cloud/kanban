<template>
 <div  class="board" v-dragscroll:nochilddrag >
     <div class="main-board" v-for="(column, idx) in $store.getters.getColumn" :key="idx">
       <p><span></span>{{column.name}} ({{ column.tasks.length }})</p>
       <div >
        <Tasks :column="column" />
       </div>
     </div>
  </div>
</template>

<script>
import Tasks from './Tasks.vue';

    export default {
    name: "Board",
    components: { Tasks }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .board{
    position: relative;
    width: 840px;
    height: calc(100vh - 80px);
    overflow: auto;
    display: flex;
    gap: 10px;
    padding: 20px;
  }
  .board::-webkit-scrollbar {
  display: none;
}
  .main-board{
    position: relative;
    width: 280px;
  }
  .main-board p{
    margin-bottom: 20px;
  }
  .main-board p span{
    width: 10px;
    height: 10px;
    background: #fff;
    display: inline-block;
    border-radius: 50%;
    margin-right: 10px;
  }
</style>
