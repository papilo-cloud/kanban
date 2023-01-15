<template>
  <section>
    <draggable :list="column.tasks" itemKey="name">
      <template #item="{element}">
        <div class="task" >
        <p>{{ element.title }}</p>
        <span>{{ element.subtasks.filter(x => x.isCompleted).length }} of {{ element.subtasks.length }} subtasks</span>
      </div>
      </template>
    </draggable>
  </section>
</template>

<script>
import draggable from "vuedraggable";
  
export default {
  components: {
    draggable,
  },
    props: {
        column: Object
    },
    mounted() {
      console.log(this.column);
    }
}
</script>

<style scoped>
  section{
    position: relative;
    width: 100%;
    margin: 0;
    padding: 0;
  }
  .task{
    position: relative;
    background: #2B2C37;
    margin-bottom: 1em;
    padding: 20px;
    border-radius: 8px;
    letter-spacing: .7px;
  }
  .task p{
    margin-bottom: 10px;
  }
  .task span{
    font-size: 12px;
    color: #bbb;
  }

</style>