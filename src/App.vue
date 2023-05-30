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
  }
}
</script>

<template>

  <div id="main-container">

    <AppHeader></AppHeader>
    <router-view></router-view>
    <AppFooter></AppFooter>

  </div>

</template>

<style lang="scss" scoped>

  #main-container {
    width: 100vw;
    height: 100vh;
  }

</style>