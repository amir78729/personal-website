<template>
  <div id="app" :class="{'dark': isDark,'light': !isDark}" class="container-fluid"  >

    <div class="left-panel">
      <div class="content secondary" >
        <div class="handle">
          <i style="font-size: 20px" class=" material-icons" :style="{color: currentColor}">settings</i>
        </div>
        <p style="margin: 0px 5px 0px 10px;">color</p>
        <div style="text-align: center;">
          <button class="btn no-focus buttons-30x30 rounded-corner" :style="{backgroundColor: colors.red}" @click="changeColor('red')"></button>
          <button class="btn no-focus buttons-30x30 rounded-corner" :style="{backgroundColor: colors.yellow}" @click="changeColor('yellow')"></button>
          <button class="btn no-focus buttons-30x30 rounded-corner" :style="{backgroundColor: colors.green}" @click="changeColor('green')"></button>
          <button class="btn no-focus buttons-30x30 rounded-corner" :style="{backgroundColor: colors.blue}" @click="changeColor('blue')"></button>
        </div>
        <hr :style="{backgroundColor: currentColor}" style="width: 80%">
        <p style="margin: -10px 5px -10px 10px;">theme</p>
        <div style="text-align: center">
          <button class="btn no-focus buttons-30x30 rounded-corner toggle"  @click="toggleTheme"><i style="font-size: 20px" class=" material-icons" >brightness_medium</i></button>
        </div>
      </div>
    </div>



    <div class="title">
      <div class="text">
        <p style="margin-bottom: -40px">Amirhossein</p>
        <p style="letter-spacing: 6px">Alibakhshi</p>
<!--        <p style="font-family: 'Lucida Handwriting';-->
<!--         position: absolute;-->
<!--         right: -10px;-->
<!--         bottom: 15px;-->
<!--         font-size: 18pt;-->
<!--         transform: rotate(-10deg)"-->
<!--        :style="{color:currentColor}">-->
<!--          personal <br>website-->
<!--        </p>-->
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
  p,h1,h2,i {
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

  .left-panel{
    position: fixed;
    opacity: .4;
    height: 100%;
    width: 1px;
    background-color: #000;
    z-index: 5;
  }
  .left-panel:hover{
    opacity: .95;

  }
  .left-panel .content{
    position: absolute;
    height: 100%;
    width: 100px;
    left: -99px;
  }
  .left-panel:hover .content{
    left: 0px;
    box-shadow: 0 0 50px 0 #00000099;
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

  .toggle {
    position: relative;
  }
  .toggle i{
    position: absolute;
    left: 3.5pt;
    top: 3.2pt;
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
  .handle {
    height: 30px;
    width: 30px;
    top: calc(50% - 15px);
    right: -15px;
    border-radius: 50%;
    text-align: center;
    position: absolute;
  }
  .handle i{
    /*position: absolute;*/
    /*left:5px ;*/
    /*top: 4px;*/
    margin: auto auto;

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

  .dark .toggle{
    color: #B0B0B0;
    height: 30px;
    width: 30px;
    text-align: center;
    box-shadow: 0 0 10px 10px transparent inset;

    /*border: solid transparent 10px;*/
  }

  .light .toggle{
    color: #202020;
    height: 30px;
    width: 30px;
    text-align: center;
    box-shadow: 0 0 10px 10px transparent inset;

    /*border: solid transparent 10px;*/


  }

  .dark .toggle:hover {
    /*color: #202020;*/
    /*background-color: #B0B0B0;*/
    box-shadow: 0 0 10px 10px #00000055 inset;
    /*transform: rotate(180deg);*/
  }


  .light .toggle:hover{
    /*color: #B0B0B0;*/
    /*background-color: #202020;*/
    box-shadow: 0 0 10px 10px #00000055 inset;
    /*transform: rotate(180deg);*/
  }

  .light .toggle:hover i{
    transform: rotate(180deg);
  }

  .dark .toggle:hover i{
    transform: rotate(180deg);
  }

  .dark .left-panel .content .handle {
    background-color: #404040;
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
  /**************************/
  ::-moz-selection { /* Code for Firefox */
    /*color: red;*/
    background: transparent;
  }

  ::selection {
    /*color: red;*/
    background: transparent;
  }

</style>
