<template>
  <div id="app" :class="{'dark': isDark,'light': !isDark}" >
    <button @click="toggleTheme">toggle</button>
    hi
    <img src="./assets/logo.png">
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      // isDark: true,
    }
  },methods: {
    toggleTheme(){
      this.$store.state.isDark = !this.$store.state.isDark;
      // this.isDark = !this.isDark;
    }
  },computed:{
    isDark(){
      return this.$store.state.isDark;
    }
  },
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    width: 100%;
    transition: all .3s;
  }
  .dark{
    background-color: #202020;
    color: #B0B0B0;
  }

  .light{
    background-color: #B0B0B0;
    color: #202020;
  }
</style>
