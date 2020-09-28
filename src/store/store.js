import Vue from 'vue';
import Vuex from 'vuex';
import {colors} from "../colors";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    isDark: false,
    // colors:{
    //   blue: '#5bc0de',
    //   green: '#28a745',
    //   yellow: '#ffc107',
    //   red: '#dc3545',
    //   purple: '#7b019a',
    // },
    currentColor: colors.blue,



  },getters: {

  },mutations: { //setters

  }
});
