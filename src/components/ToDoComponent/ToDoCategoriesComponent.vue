<template>
  <div class="todo__categories">
    <div class="categories__wrapper">
      <button class="button__categories" v-if="getTasks.active.length !== 0" @click="switchWindow('actTaskShow')">Active</button>
      <button class="button__categories" v-if="getTasks.completed.length !== 0" @click="switchWindow('compTaskShow')">Completed</button>
      <button class="button__categories" v-if="getTasks.deleted.length !== 0" @click="switchWindow('delTaskShow')">Deleted</button>
    </div>
    <div>
      <ul>
        <li class="categoria__item" v-for="item in filterCategoria"  :key="item.id">
            <div class="color-block" :style="item.color"></div>
            <p>{{item.categoria}}</p>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
export default {
  name: "ToDoCategories",
  computed:{
    getTasks() {
      return this.$store.getters.getTasks
    },
    filterCategoria () {
      return this.$store.getters.filterCategoria
    }
  },
  methods: {
    switchWindow(arg) {
      this.$store.commit('switchWindow', arg)
    },
  //   filterCategoria () {
  //     let arrCat = this.getTasks.active.map((el) => el.categoria.length !== 0)
  //     console.log(arrCat)
  //   }
  }

}
</script>

<style scoped>
.todo__categories {
  display: flex;
  flex-direction: column;
  width: 25%;
  height: 100%;
  border-right: 2px solid #D8D8D8;
}
.categories__wrapper {
  width: 100%;
  margin-top: 30%;
  row-gap: 20px;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.button__categories {
  font-family: 'Inconsolata', monospace;
  color: white;
  font-size: 16px;
  line-height: 1em;
  max-width: 200px;
  width: 50%;
  min-width: 80px;
  padding: 10px 10px;
  border: none;
  border-radius: 10px;
  background-color: rgba(42, 147, 116, 0.4);
  cursor: pointer;
}

.button__categories:active {
  color: black;
  background-color: #c0bbc5;
}

.color-block {
  width: 20px;
  height: 20px;
  cursor: pointer;
  border-radius: 50%;
}

.categoria__item {
  font-family: 'Inconsolata', monospace;
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  list-style: none;
  padding: 15px;
}

</style>