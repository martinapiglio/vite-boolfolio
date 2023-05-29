<script>
import {store} from './store.js';
import axios from 'axios';
import ProjectCard from './components/ProjectCard.vue';

export default {
  name: 'App',

  data() {
    return {
      store,
      currentPage: 1,
      lastPage: '',
    }
  },

  components: {
    ProjectCard,
  },

  created() {
    this.getProjects();
  },

  methods: {
    getProjects() {
      axios.get(this.store.baseURL + this.store.APIroute + '?page=' + this.currentPage).then(res => {
        this.store.projects = res.data.results.data;
        this.lastPage = res.data.results.last_page;
      })
    },

    nextPage(){
      if(this.currentPage == this.lastPage) {
        this.currentPage = 1;
      } else {
        this.currentPage++;
      }
      this.getProjects();
    }, 

    prevPage(){
      if(this.currentPage == 1) {
        this.currentPage = this.lastPage;
      } else {
        this.currentPage--;
      }
      this.getProjects();
    }
  }

}

</script>

<template>
  <h1>Projects</h1>

  <div>Page: {{ this.currentPage }} of {{ this.lastPage }}</div>
  <button @click="prevPage()">Previous Page</button>
  <button @click="nextPage()">Next Page</button>

  <div v-for="project in store.projects">
    <ProjectCard :project="project"></ProjectCard>
  </div>

</template>

<style scoped>

</style>
