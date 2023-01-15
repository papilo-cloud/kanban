<template>
   <main>
    <h1>Kanban</h1>
    <p>ALL BOARDS ({{ $store.getters.getState.length }})</p>
    <div class="aside" v-for="bar in $store.getters.getState" :key="bar.id">
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
    padding: 20px;
    background: #2B2C37;
    height: 100vh;
  }
</style>