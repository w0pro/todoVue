<template>
  <div class="fix context-menu" v-if="showContext">
    <div class="fix">
      <input class="fix" type="search" v-model="name" :placeholder="placeholder" list="listCat">
      <datalist id="listCat">
        <option v-for="item in getCategorias" :key="item.id" :value="item.categoria" />
      </datalist>
    </div>
    <div class="fix" v-if="showColor">
      <ul class="fix color-box">
        <li v-for="item in colors" :key="item">
          <div class="fix color-block" :style="{background:item}" @click="whatColor($event)">
            <div></div>
          </div>
        </li>
      </ul>
    </div>
    <div>
      <button class="fix" @click="transferCategoria">add Cathegoria</button>
    </div>
  </div>
</template>

<script>

import {placeholderReaction} from "@/components/mixins/placeholderReaction";

export default {
  name: "InputContextMenu",
  mixins: [placeholderReaction],
  props : {
    showContext: {
      type: Boolean
    },
  },
  computed : {
    getTasks() {
      return this.$store.getters.getTasks
    },
    getCategorias () {
      return this.$store.getters.getCategorias
    },
    getCheckColors() {
      return this.$store.getters.getCheckColors
    }
  },

  data () {
    return {

        name: '',
        color: '',

      colors: {
        1: 'rgb(255, 0, 0)',
        2: 'rgb(255, 69, 0)',
        3: 'rgb(255, 255, 0)',
        4: 'rgb(0, 255, 0)',
        5: 'rgb(0, 0, 255)',
        6: 'rgb(128, 0, 128)',
        7: 'rgb(0, 0, 0)',
      },
      result : [],
      showColor: true,
      placeholder: 'Enter the category name and color'
    }
  },
  watch: {
    getCheckColors(newVal){
      newVal.forEach((el) =>{
        this.result.push(el.toString().substring(12, el.length -1 ))
      })
    for (let key in this.colors){
      this.result.forEach((el) => {
        el === this.colors[key]? delete this.colors[key]: '';
      })
    }
    },
    name(newVal) {
        if (this.getCategorias.find((el) => el.categoria === newVal)) {
          this.showColor = false;
          this.getCategorias.forEach((el) => {
            el.categoria === newVal?this.color = el.color:''
          })
        }
        else  {
          this.showColor = true
        }

    }
  },
  methods: {
    whatColor(event){
      event.target.children[0].classList.toggle('color__active')
      this.color = event.target.attributes.style.value;
    },
    transferCategoria() {
      if(this.name && this.color) {
        this.$emit('transferCategoria', {name: this.name, color:this.color});
        setTimeout(() => this.color = '');
        setTimeout(() => this.name = '')
      } else {
        this.name = '';
        this.color = '';
        !this.color || !this.name? this.placeholder = this.placeholderReaction('Add to categoria name and color', this.placeholder): ''
      }
    },
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

.color__active {
  width: 10px;
  height: 10px;
  cursor: pointer;
  border-radius: 50%;
  background-color: black;
}

ul {
  padding: 0!important;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
}

li {
  list-style: none;
}
</style>