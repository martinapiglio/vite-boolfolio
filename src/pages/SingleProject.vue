<script>
import {store} from '../store.js';
import axios from 'axios';
export default {
  name: 'App',

  data() {
    return {
        store,
        project: {},
        projectSlug: '',
    }
  },

  mounted() {
    this.projectSlug = this.$route.params.slug;
    this.getProjects();
  },

  methods: {
    getProjects() {
      axios.get(this.store.baseURL + this.store.APIroute + '/' + this.projectSlug).then(res => {
        this.project = res.data.project;
        console.log(res.data.project);
      })
    },
  }

}

</script>

<template>

    <section id="single-project-container" :class="store.isActive == true ? 'dark-mode' : ''">
        
      <h3>{{ project.title }}</h3>
      <h4>
          {{ project.type ? project.type.title : 'No type' }}
      </h4>
      <div class="technologies">
          <span v-for="technology in project.technologies" class="badge rounded-pill" :style="{backgroundColor: technology.color}">{{ technology.name }}</span>
      </div>
      <p> {{ project.description }} </p>
      <hr>

    </section>

</template>

<style lang="scss" scoped>
@use '../components/style/_variables.scss' as *;
@use '../components/style/_mixins.scss' as *;

    #single-project-container {
        padding: 7rem 5rem 5rem;
        width: 100%;
        overflow-y: auto;
    }

</style>
