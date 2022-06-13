<template>
  <div id="app">
    <to-do-view-component />
  </div>
</template>

<script>


import ToDoViewComponent from "@/components/ToDoComponent/ToDoViewComponent";
export default {
  name: 'App',
  components: {ToDoViewComponent},
}
</script>

<style>
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #EA5959;
  width: 100%;
  height: 100vh;
}
</style>
