<template>
   <main>
    <div class="mt-5 container">
      <div class="row justify-content-center border py-5">
        <div class="col-5">
          <h4 class="mb-3">Draggable 1</h4>
          <draggable class="draggable-list" :list="list1" 
          :group="{name:'mygroup', put: true }"
          itemKey="name"
          >z
            <template #item="{element}">
            <div class="list-item">
              {{ element.name}}
            </div>
          </template>
          </draggable>
        </div>

        <div class="col-5">
          <h4 class="mb-3">Draggable 1</h4>
          <draggable class="draggable-list" :list="list2" 
          :group="{name:'mygroup', pull:'clone', put: true }"
          itemKey="name"
          >z
            <template #item="{element}">
            <div class="list-item">
              {{ element.name}}
            </div>
          </template>
          </draggable>
        </div>
      </div>

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
.draggable-list {
  background: #3f51b5;
  color: #fff;
  border: 1px solid;
  height: 50vh;
}
.list-item {
  margin: 10px;
  padding: 40px;
  cursor: pointer;
  font-size: 18px;
  border-radius: 5px;
  background: #f44336;
  display: inline-block;
}
</style>