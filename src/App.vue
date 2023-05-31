<script>
import {store} from './store.js';
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
    data(){
        return{
          store
        }
    }, 

    components: {
        AppHeader,
        AppFooter
    },

    methods: {

      bgColor() {
        let container = document.getElementById('main-container');

        if(this.store.isActive == true) {
            container.classList.add('background-change');
        } else {
            container.classList.remove('background-change');
        }
      }

    }
}
</script>

<template>

  <div id="main-container" class="background">

    <AppHeader @changeColor="bgColor()"></AppHeader>
    <router-view></router-view>
    <AppFooter></AppFooter>

  </div>

</template>

<style lang="scss" scoped>
@use './components/style/_variables.scss' as *;

#main-container {
    width: 100vw;
    height: 100vh;
}
.background {
    background-image: linear-gradient(black, black );
    background-size: 100% 0%;
    background-repeat: no-repeat;
    background-position: bottom;
    transition: background-size 1s ease-in-out;
    color: black;
}

.background-change {
    background-size: 100% 100%;
}

</style>