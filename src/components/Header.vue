<template>
  <header>
        <h2>Platform Launch</h2>
        <div>
            <button>+Add New Task</button> 
           <button> <img src="../assets/icon-vertical-ellipsis.svg" alt="ellipsis"></button>
        </div>
  </header>
</template>

<script>
export default {

}
</script>

<style scoped>
  header {
    position: relative;
    background: #2B2C37;
    /* width: calc(100% - 0); */
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
  }
  header div{
    position: relative;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  header button{
    background: none;
    border: none;
    cursor: pointer;
  }
  header button:nth-child(1){
    background: #635FC7;
    color: #fff;
    padding: 10px 12px;
    font-size: 10px;
    border: none;
    border-radius: 20px;
  }
</style>