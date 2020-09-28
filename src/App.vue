<template>
  <div id="app" :class="{'dark': isDark,'light': !isDark}" class="container-fluid"  >




    <div class="title">
      <div class="text">
        <p style="margin-bottom: -40px">Amirhossein</p>
        <p style="letter-spacing: 6px">Alibakhshi</p>
      </div>
    </div>
    <div class="container-fluid partition" :style="{borderColor: currentColor}">
      <div  class="row">
        <div class="col-xs-6 col-sm-6 col-md-7 col-lg-8">
          <h1 :style="{color: currentColor}">Education</h1>
          <p>I'm a computer engineering student at <b>Amirkabir University of Technology</b> - Tehran Polytechnic (AUT) </p>
        </div>
        <div class="col-xs-6 col-sm-6 col-md-5 col-lg-4">
          <img src="https://sdk.bitmoji.com/render/panel/7b0d608b-8b79-4d57-a49f-f15a558f61c8-9b405aba-93b2-440f-862b-045521d28ada-v1.png?transparent=1&palette=1" alt="education" class="pic">
        </div>
      </div>
    </div>

    <button class="btn no-focus " @click="toggleTheme"><i style="font-size: 15px " class="rounded-corner material-icons">brightness_medium</i></button>
    <button class="btn no-focus buttons-30x30 rounded-corner" :style="{backgroundColor: colors.red}" @click="changeColor('red')"></button>
    <button class="btn no-focus buttons-30x30 rounded-corner" :style="{backgroundColor: colors.yellow}" @click="changeColor('yellow')"></button>
    <button class="btn no-focus buttons-30x30 rounded-corner" :style="{backgroundColor: colors.green}" @click="changeColor('green')"></button>
    <button class="btn no-focus buttons-30x30 rounded-corner" :style="{backgroundColor: colors.blue}" @click="changeColor('blue')"></button>
    <button class="btn no-focus buttons-30x30 rounded-corner" :style="{backgroundColor: colors.purple}" @click="changeColor('purple')"></button>
    <hr>
    <h1 :style="{color: currentColor}">{{currentColor}}</h1>

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
    font-family: 'HammerThin';
    font-size: 18pt;
    /*width: 100%;*/
    padding: 0px;
    margin: 0;
    /*transition: all .3s;*/
  }
  *{
    transition: all .3s ;
  }
  p,h1,h2 {
    cursor: default;
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

  .partition{
    border-bottom: solid 5px ;
    border-top: solid 5px ;
    padding: 50px;
    box-shadow: 0 0 100px 0 #000000 ;

  }

  .pic{
    /*background-position: center;*/
    /*background-repeat: no-repeat;*/
    /*background-size: cover;*/
    height: 350px;
    padding: 10px 10px 10px 10px;
  }
  .pic:hover{
    /*background-position: center;*/
    /*background-repeat: no-repeat;*/
    /*background-size: cover;*/
    -webkit-filter: drop-shadow(0px 0px 10px #00000099);
    filter:         drop-shadow(0px 0px 10px #00000099);
    padding: 8px 10px 12px 10px;
    /*margin-bottom: 10px;*/
  }



  .title{
    position: relative;
    background-image: url("https://cdn.discordapp.com/attachments/732234196487241741/760218343940292628/molana.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    height: 550px;
    width: 100%;
    box-shadow: 0 0 400px 400px #00000099 inset;
  }
  .title .text{
    color: white;
    cursor: default;
    font-size: 72pt;
    justify-content: center;
    align-content: center;
    text-align: center;
    margin: auto auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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
