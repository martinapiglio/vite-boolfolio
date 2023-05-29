<script>
import {store} from '../store.js';

export default {
  name: 'ProjectCard',

  data() {
    return {
      store
    }
  },

  props: {
    project: Object,
  },

  computed: {

      thumbnail(){
        return this.store.baseURL + 'storage/' + this.project.thumbnail;
      }
    }, 

}

</script>

<template>
  <div class="card" style="width: 18rem;">
  <img class="card-img-top" :src="thumbnail" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">{{project.title}}</h5>
    <div class="card-text">{{ project.description }}</div>
    <div class="card-text">Type: {{ project.type ? project.type.title : 'nessuno' }}</div>
    <span v-for="technology in project.technologies" :style="{backgroundColor : technology.color}" class="badge rounded-pill mx-1"> {{ technology.name }}</span>
      </div>
</div>

</template>

<style lang="scss" scoped>

</style>
