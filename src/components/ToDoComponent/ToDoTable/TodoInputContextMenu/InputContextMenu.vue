<template>
  <div class="fix context-menu" v-if="showContext">
    <div class="fix">
      <p class="fix">Enter the category name</p>
      <input type="text" v-model="categoria.name">
    </div>
    <div class="fix">
      <ul class="fix">
        <li v-for="value in colors" :key="value">
          <div class="fix color-block" :style="{background:value}" @click="whatColor($event)"></div>
        </li>
      </ul>
    </div>
    <div>
      <button class="fix" @click="transferCategoria">add Cathegoria</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "InputContextMenu",


  props : {
    showContext: {
      type: Boolean
    },
  },
  data () {
    return {
      categoria: {
        name: '',
        color: ''
      },
      colors: {
        1: '#FF0000',
        2: '#FF4500',
        3: '#FFFF00',
        4: '#00FF00',
        5: '#0000FF',
        6: '#800080',
        7: '#000000',
      }
    }
  },
  methods: {
    whatColor(event){
      this.categoria.color = event.target.attributes.style.value

    },
    transferCategoria() {
      this.$store.commit('transferCategoria', this.categoria)

      this.categoria.color = '',
      this.categoria.name = ''
    }
  }

}
</script>

<style scoped>
.context-menu {
  position: absolute;
  z-index: 2;
  right: 30px;
  top: 40px;
  width: 50%;
  height: 300px;
  background-color: #E5E5E5;
  border: 1px solid #81776f;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.color-block {
  width: 20px;
  height: 20px;
  cursor: pointer;
  border-radius: 50%;
}

ul {
  padding: 0!important;
  display: flex;
  gap: 10px;
}

li {
  list-style: none;
}
</style>