<template>
  <div id="app" @click="eventCloseContext">
    <to-do-view-component/>
  </div>
</template>

<script>


import ToDoViewComponent from "@/components/ToDoComponent/ToDoViewComponent";
export default {
  name: 'App',
  components: {ToDoViewComponent},
  methods : {
    eventCloseContext(event) {
      if (event.target.tagName !== 'svg' && event.target.tagName !== 'INPUT' && event.target.classList[0] !== 'fix') {
        this.$store.commit('eventCloseContext')
      }

    }
  }
}
</script>

<style>
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d7b4a9;
  width: 100%;
  height: 100vh;
}
</style>
