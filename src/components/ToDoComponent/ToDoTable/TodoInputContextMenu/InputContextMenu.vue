<template>
  <div class="fix context-menu" v-if="showContext">
    <div class="fix">
      <input class="fix" type="search" v-model="categoria.name" :placeholder="placeholder" list="listCat">
      <datalist id="listCat">
        <option v-for="item in getTasks.active" :key="item.id" :value="item.categoria" />
      </datalist>
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
  computed : {
    getTasks() {
      return this.$store.getters.getTasks
    }
  },

  data () {
    return {
      listCat: 1,
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
      },
      placeholder: 'Enter the category name'
    }
  },
  methods: {
    whatColor(event){
      this.categoria.color = event.target.attributes.style.value

    },
    transferCategoria() {
      if(this.categoria.name.length !== 0 && this.categoria.color.length !== 0) {
        this.getTasks.active.forEach((el) => {
          if (el.categoria !== this.categoria.name) {
            this.$emit('transferCategoria', this.categoria)
          } else {
            this.categoria.name = ''
            setTimeout(() => this.placeholder = 'This category already exists!!!', 300)
            setTimeout(() => this.placeholder = 'Enter the category name', 1000)
          }
        })
      }

      setTimeout(() => {
        this.categoria.color = '';
        this.categoria.name = '';
      },50)
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
  gap: 10px;
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