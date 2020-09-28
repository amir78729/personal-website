<template>
  <div id="app" :class="{'dark': isDark,'light': !isDark}" class="container-fluid" >
    <button class="btn" @click="toggleTheme"><i class="mo"></i></button>
    <hr>
    <button class="btn btn-danger" @click="changeColor('red')">red</button>
    <button class="btn btn-info" @click="changeColor('blue')">blue</button>
    <button class="btn btn-success" @click="changeColor('green')">green</button>
    <button class="btn btn-warning" @click="changeColor('yellow')">yellow</button>
    <button class="btn btn-dark" @click="changeColor('purple')">purple</button>
    <hr>
    <h1 :style="{color: currentColor}">{{currentColor}}</h1>
    <p>hi</p>

  </div>
</template>

<script>
import {colors} from "./colors";

export default {
  name: 'App',
  data() {
    return {
    }
  },methods: {
    toggleTheme(){
      this.$store.state.isDark = !this.$store.state.isDark;
    },
    changeColor(color){
      if(color === 'red')
        this.$store.state.currentColor = colors.red;
      else if(color === 'blue')
        this.$store.state.currentColor = colors.blue;
      else if(color === 'green')
        this.$store.state.currentColor = colors.green;
      else if(color === 'yellow')
        this.$store.state.currentColor = colors.yellow;
      else if(color === 'purple')
        this.$store.state.currentColor = colors.purple;
    }
  },computed:{
    isDark(){
      return this.$store.state.isDark;
    },
    currentColor(){
      return this.$store.state.currentColor;
    },
  },
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    /*width: 100%;*/
    padding: 10px;
    margin: 0;
    /*transition: all .3s;*/
  }
  *{
    transition: all .3s ;
  }
  .dark{
    background-color: #202020;
    color: #B0B0B0;
  }

  .light{
    background-color: #efefef;
    color: #202020;
  }
</style>
