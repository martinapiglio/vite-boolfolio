<script>
import axios from 'axios';
import ProjectCard from './components/ProjectCard.vue';

export default {
  name: 'App',

  data() {
    return {
      projects: [],
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
      axios.get('http://127.0.0.1:8000/api/projects?page=' + '1').then(res => {
        // console.log(res.data.results);
        this.projects = res.data.results.data;
        // console.log(this.projects);
      })
    }
  }

}

</script>

<template>
  <h1>Projects</h1>
  <div v-for="project in projects">
    <ProjectCard :project="project"></ProjectCard>
  </div>
</template>

<style scoped>

</style>
