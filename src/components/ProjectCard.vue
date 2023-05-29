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

  <div class="project card">

    <img class="card-img-top" :src="thumbnail" alt="{{ project.title }} img">

    <div class="card-body">
        <h5 class="card-title">{{project.title}}</h5>
        <div class="card-text">{{ project.description }}</div>
        <div class="card-text">Type: {{ project.type ? project.type.title : 'nessuno' }}</div>
        <span v-for="technology in project.technologies" :style="{backgroundColor : technology.color}" class="badge rounded-pill mx-1"> {{ technology.name }}</span>
    </div>

  </div>

</template>

<style lang="scss" scoped>

  .project {
      width: calc(100% / 2 - 1.5rem);
      border-radius: 10px;
      transition: all .2s;

      &:hover{
          transform: scale(1.03);
          cursor: pointer;
      }
  }

</style>
