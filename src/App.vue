<template>
  <div id="app" :class="{'dark': isDark,'light': !isDark}" class="container-fluid"  >

    <div class="left-panel">
      <div class="content secondary" >
        <div class="handle">
          <i style="font-size: 20px" class=" material-icons" :style="{color: currentColor}">settings</i>
        </div>
        <p style="margin: 0px 5px 0px 10px; font-size: 18pt" class="title-font">color</p>
        <div style="text-align: center;">
          <button class="btn no-focus buttons-30x30 rounded-corner" :style="{backgroundColor: colors.red}" @click="changeColor('red')"></button>
          <button class="btn no-focus buttons-30x30 rounded-corner" :style="{backgroundColor: colors.yellow}" @click="changeColor('yellow')"></button>
          <button class="btn no-focus buttons-30x30 rounded-corner" :style="{backgroundColor: colors.green}" @click="changeColor('green')"></button>
          <button class="btn no-focus buttons-30x30 rounded-corner" :style="{backgroundColor: colors.blue}" @click="changeColor('blue')"></button>
        </div>
        <hr :style="{backgroundColor: currentColor}" style="width: 80%">
        <p style="margin: -10px 5px -10px 10px; font-size: 18pt" class="title-font">theme</p>
        <div style="text-align: center">
          <button class="btn no-focus buttons-30x30 rounded-corner toggle"  @click="toggleTheme"><i style="font-size: 20px" class=" material-icons" >brightness_medium</i></button>
        </div>
      </div>
    </div>



    <div class="title">
      <div class="text title-font">
        <p style="margin-bottom: -40px">Amirhossein</p>
        <p style="letter-spacing: 6px">Alibakhshi</p>
      </div>
    </div>
    <div class="container-fluid partition" :style="{borderColor: currentColor}">
      <div  class="row">

        <div class="col-xs-6 col-sm-6 col-md-5 col-lg-4">
          <img src="https://sdk.bitmoji.com/render/panel/7b0d608b-8b79-4d57-a49f-f15a558f61c8-9b405aba-93b2-440f-862b-045521d28ada-v1.png?transparent=1&palette=1" alt="education" class="pic">
        </div>

        <div class="col-xs-6 col-sm-6 col-md-7 col-lg-8">
          <h1 :style="{color: currentColor}">education</h1>
          <p>I'm a computer engineering student at <b>Amirkabir University of Technology</b> - Tehran Polytechnic (AUT) </p>
        </div>

      </div>
    </div>

    <div class="image1"> </div>

    <div class="container-fluid partition" :style="{borderColor: currentColor}">
      <div  class="row">
        <div class="col-xs-6 col-sm-6 col-md-7 col-lg-8">
          <h1 :style="{color: currentColor}">programming</h1>
          <p>Coding is a passion of mine!</p>
          <p>Specifically with languages like:</p>
          <div class="row">
            <div class="col-sm-4 col-md-3 col-lg-2" style="text-align: center">
              <i :style="{color:currentColor}" class='fab fa-java' style='font-size:36px'></i>
              <p>Java</p>
            </div>
            <div class="col-sm-4 col-md-3 col-lg-2" style="text-align: center">
              <i :style="{color:currentColor}" class='fab fa-python' style='font-size:36px'></i>
              <p>Python</p>
            </div>
            <div class="col-sm-4 col-md-3 col-lg-2" style="text-align: center">
              <i :style="{color:currentColor}" class='fab fa-cuttlefish' style='font-size:36px'></i>
              <p>C</p>
            </div>
          </div>
          <hr :style="{backgroundColor:currentColor}">
          <div class="row container">
            <p>Here is a link to my Github account:</p>
            <a href="https://github.com/amir78729" target="_blank">
              <button class="no-focus btn" :style="{backgroundColor: currentColor}" style="margin-left: 20px ;color: white; height: 40px; border-radius: 20px">

                <span>
                  <i  class='fab fa-github '  style="cursor: pointer"></i>
                </span>
                <b class="title-font">/amir78729</b>
              </button>
            </a>
          </div>
        </div>

        <div class="col-xs-6 col-sm-6 col-md-5 col-lg-4">
          <img src="https://sdk.bitmoji.com/render/panel/042c5481-28ec-4d85-8f58-1e8f2376bfc6-9b405aba-93b2-440f-862b-045521d28ada-v1.png?transparent=1&palette=1" alt="education" class="pic" style="border-radius: 50%">
        </div>

      </div>
    </div>


    <div class="image2"> </div>

    <div class="container-fluid partition" :style="{borderColor: currentColor}">
      <div  class="row">
        <div class="col-xs-6 col-sm-6 col-md-7 col-lg-8">
          <h1 :style="{color: currentColor}">contact me!</h1>
          <p>You can contact me with one of this ways:</p>
          <div class="row">
            <div class="col-sm-6 row">
              <div class="col-sm-4 col-md-3 col-lg-2" style="text-align: center">
                <a href="https://instagram.com/amirhosseinalibakhshi">
                  <i class='fa fa-google' style='font-size:36px'></i>
                </a>
              </div>
              <div class="col-sm-4 col-md-3 col-lg-2" style="text-align: center">
                <a href="https://t.me/amirhosseinalibakhshi">
                  <i class='fa fa-telegram' style='font-size:36px'></i>
                </a>
              </div>
              <div class="col-sm-4 col-md-3 col-lg-2" style="text-align: center">
                <a href="https://linkedin.com/in/amirhosseinalibakhshi">
                  <i class='fa fa-linkedin' style='font-size:36px'></i>
                </a>
              </div>
              <div class="col-sm-4 col-md-3 col-lg-2" style="text-align: center">
                <a href="https://instagram.com/amirhosseinalibakhshi">
                  <i class='fa fa-instagram' style='font-size:36px'></i>
                </a>
              </div>
              <div class="col-sm-4 col-md-3 col-lg-2" style="text-align: center">
                <a href="https://github.com/amir78729">
                  <i class='fa fa-github' style='font-size:36px'></i>
                </a>
              </div>
            </div>
          </div>
        </div>


        <div class="col-xs-6 col-sm-6 col-md-5 col-lg-4">
          <img src="https://sdk.bitmoji.com/render/panel/d0a21abe-de3b-47d8-a82f-77f72d52fd40-9b405aba-93b2-440f-862b-045521d28ada-v1.png?transparent=1&palette=1" alt="education" class="" style=" margin: -50px; padding: 0; float: right ; ">
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
    /*font-family: 'HammerThin';*/
    font-family: 'IRANSans Light';
    font-size: 15pt;
    /*width: 100%;*/
    padding: 0px;
    margin: 0;
    /*transition: all .3s;*/
  }
  .title-font{
    font-family: 'HammerThin';
  }
  *{
    transition: all .3s ;
  }
  p,h1,h2,i {
    cursor: default;
  }

  button:hover{
    box-shadow: 0 0 0 100px #00000022 inset;
  }

  h1{
    font-family: Rage ;
    font-size: 48pt;
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
    left: -100px;
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

  .image1{
    position: relative;
    background-image: url("https://cdn.discordapp.com/attachments/732234196487241741/761651635982041148/photo_2020-08-14_15-45-53.jpg");
    background-repeat: no-repeat;
    background-size: 105%;
    background-position: center;
    background-attachment: fixed;
    height: 350px;
    width: 100%;
    box-shadow: 0 0 400px 400px #00000099 inset;
  }
  .image2{
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
    position: absolute;
    left:5px ;
    top: 4px;
    margin: auto auto;

  }

  /* Style all font awesome icons */
  .fa {
    padding: 10px;
    font-size: 15px;
    width: 50px;
    height: 50px;
    text-align: center;
    text-decoration: none;
    margin: 5px 2px;
    opacity: .7;
    border-radius: 50%;
  }

  /* Add a hover effect if you want */
  .fa:hover {
    opacity: 1;
  }

  /* Set a specific color for each brand */

  /* Facebook */
  .fa-facebook {
    background: #3B5998;
    color: white;
  }

  /* Twitter */
  .fa-twitter {
    /*background: #55ACEE;*/
    /*color: white;*/
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

  .light .left-panel .content .handle {
    background-color: #ededed;
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

  a:link{
    color: white;
  }

</style>
