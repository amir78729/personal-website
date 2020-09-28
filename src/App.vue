<template>
  <div id="app" :class="{'dark': isDark,'light': !isDark}" class="container-fluid" >
    <button class="btn no-focus " @click="toggleTheme"><i style="font-size: 15px " class="rounded-corner material-icons">brightness_medium</i></button>
    <button class="btn no-focus buttons-30x30 rounded-corner" :style="{backgroundColor: colors.red}" @click="changeColor('red')"></button>
    <button class="btn no-focus buttons-30x30 rounded-corner" :style="{backgroundColor: colors.yellow}" @click="changeColor('yellow')"></button>
    <button class="btn no-focus buttons-30x30 rounded-corner" :style="{backgroundColor: colors.green}" @click="changeColor('green')"></button>
    <button class="btn no-focus buttons-30x30 rounded-corner" :style="{backgroundColor: colors.blue}" @click="changeColor('blue')"></button>
    <button class="btn no-focus buttons-30x30 rounded-corner" :style="{backgroundColor: colors.purple}" @click="changeColor('purple')"></button>
    <hr>
    <h1 :style="{color: currentColor}">{{currentColor}}</h1>
    <p>hi</p>



    <div class="title">

    </div>
    <div class="secondary container-fluid " style="margin: 0">
      hi
    </div>
    <div class="title">

    </div>

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
    padding: 0px;
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

  .title{
    background-image: url("https://cdn.pixabay.com/photo/2018/10/30/16/06/water-lily-3784022_1280.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    height: 400px;
    width: 100%;
  }
  .secondary{
    padding: 0;
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

  .dark .secondary{
    background-color: #303030;
    color: #B0B0B0;
  }

  .light .secondary{
    background-color: #dedede;
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

  /*********************/
  /* width */
  ::-webkit-scrollbar {
    width: 8px;
    height: 5px;
    transition: .5s;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background-color: #333333;
    transition: .5s;
    /*box-shadow: inset 0 0 5px grey;*/
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #555555;
    transition: .5s;
    /*border-radius: 10px;*/
  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #666666;
    transition: .5s;
  }

</style>
