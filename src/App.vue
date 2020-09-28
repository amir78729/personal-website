<template>
  <div id="app" :class="{'dark': isDark,'light': !isDark}" class="container" >
    <button @click="toggleTheme">toggle</button>
    <hr>
    <button @click="changeColor('red')">red</button>
    <button @click="changeColor('blue')">blue</button>
    <button @click="changeColor('green')">green</button>
    <button @click="changeColor('yellow')">yellow</button>
    <button @click="changeColor('purple')">purple</button>
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
    width: 100%;
    transition: all .3s;
  }
  *{
    transition: all .3s;
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
