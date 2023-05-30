<script>
import AppHeader from './components/AppHeader.vue';
import AppAside from './components/AppAside.vue';
import AppMain from './components/AppMain.vue';

export default {
  data(){
    return{
    }
  }, 
  components: {
    AppHeader,
    AppAside,
    AppMain,
}
}
</script>

<template>

  <div id="outer-container">

    <AppAside></AppAside>

    <div id="main-container">

      <AppHeader></AppHeader>
      <router-view></router-view>

    </div>

  </div>

</template>

<style lang="scss" scoped>
@use './components/style/_variables.scss' as *;

#outer-container {
    display: flex;
    width: 100vw;
    height: 100vh;

    #main-container {
      width: calc(100vw - $aside-width);
      height: 100vh;
    }
}

</style>