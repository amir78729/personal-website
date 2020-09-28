<template>
  <div id="app" :class="{'dark': isDark,'light': !isDark}" class="container-fluid" >
    <button class="btn no-focus " @click="toggleTheme"><i style="font-size: 15px " class="rounded-corner material-icons">brightness_medium</i></button>
    <hr>
    <button class="btn no-focus buttons-30x30 rounded-corner" :style="{backgroundColor: colors.red}" @click="changeColor('red')"></button>
    <button class="btn no-focus buttons-30x30 rounded-corner" :style="{backgroundColor: colors.yellow}" @click="changeColor('yellow')"></button>
    <button class="btn no-focus buttons-30x30 rounded-corner" :style="{backgroundColor: colors.green}" @click="changeColor('green')"></button>
    <button class="btn no-focus buttons-30x30 rounded-corner" :style="{backgroundColor: colors.blue}" @click="changeColor('blue')"></button>
    <button class="btn no-focus buttons-30x30 rounded-corner" :style="{backgroundColor: colors.purple}" @click="changeColor('purple')"></button>
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
      colors,
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
  .no-focus:focus{
    box-shadow: none;
    outline: none;
  }

  .rounded-corner{
    border-radius: 50%;
  }

  .buttons-30x30{
    height: 30px;
    width: 30px;
  }

  /******************************************************************************/

  .dark{
    background-color: #202020;
    color: #B0B0B0;
  }

  .light{
    background-color: #efefef;
    color: #202020;
  }

  .dark  i{
    color: #B0B0B0;

    border: solid transparent 10px;
  }

  .light  i{
    color: #202020;
    border: solid transparent 10px;


  }

  .dark  i:hover{
    color: #202020;
    background-color: #B0B0B0;
    transform: rotate(180deg);
  }

  .light  i:hover{
    color: #B0B0B0;
    background-color: #202020;
    transform: rotate(180deg);
  }
</style>
