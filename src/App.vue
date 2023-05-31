<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  data(){
    return{
    }
  }, 
  components: {
    AppHeader,
    AppFooter
  },
  methods: {
    addBgColor() {
      let container = document.getElementById('main-container');
      container.classList.add('black');
    },
    removeBgColor() {
      let container = document.getElementById('main-container');
      container.classList.remove('black');
    }
  }
}
</script>

<template>

  <div id="main-container">

    <AppHeader @changeColor="addBgColor()" @removeColor="removeBgColor()"></AppHeader>
    <router-view></router-view>
    <AppFooter></AppFooter>

  </div>

</template>

<style lang="scss" scoped>

  #main-container {
    width: 100vw;
    height: 100vh;
    transition: background-color .7s;
  }

  .black {
      background-color: black;
    }

</style>