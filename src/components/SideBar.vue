<template>
   <main>
    <div class="name">
      <h1><img src="../assets/logo-light.svg" alt="logo"></h1>
      <p>ALL BOARDS ({{ $store.getters.getState.length }})</p>
    </div>
    <div class="aside" v-for="bar in $store.getters.getState" :key="bar.id" :class="{'active': bar.id == $store.state.boardsIndex}">
      <img src="../assets/icon-board.svg" alt="">
      <button>{{ bar.name }}</button>
    </div>
  </main>
</template>
<script>
import draggable from "vuedraggable";
export default {
  components: {
    draggable,
  },
  data() {
    return {
      list1: [{ name: "Drag Me!"}],
      list2: [{ name: "Drag Me Too!" }],
      myList: ['name', "Drag Me Too!", 'hello'],
    };
  },
};
</script>
<style scoped>
  main{
    position: relative;
    width: 100%;
    padding: 20px 0;
    padding-right: 20px;
    background: #2B2C37;
    height: 100vh;
    border-right:1px solid #3E3F4E;
  }
  main .name{
    padding: 0 20px;
  }
  main h1{
    margin-bottom: 1em;
    padding: 0;
  }
  main p{
    letter-spacing: 1px;
    margin-bottom: 1em;
    color: #aaa;
  }
  .aside{
    position: relative;
    width: 100%;
    display: flex;
    padding: 12px 20px;
    align-items: center;
    border-radius: 0 40px 40px 0;
    gap: 10px;
  }
  .active{
    background-color: #635FC7;
  }
  .aside button{
    background: inherit;
    font-size: 10px;
    border: none;
    letter-spacing: .7px;
    color: #aaa;
    cursor: pointer;
  }
</style>