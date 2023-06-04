<script>
import {store} from '../store.js';
export default {

  data() {
    return {
        store,
    }
  },

}

</script>

<template>
  <div id="not-found" :class="this.$route.path.includes('/projects') || this.$route.path.includes('/about') ? 'dark-mode' : ''">
    <h1>
      Error 404, page not found &#128532;
    </h1>  
  </div>

</template>

<style lang="scss" scoped>

    #not-found {
        padding: 7rem 5rem;
        width: 100%;
        overflow-y: auto;
    }

</style>
