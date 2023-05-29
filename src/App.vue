<script>
import axios from 'axios';

export default {
  name: 'App',

  data() {
    return {
      projects: [],
    }
  },

  created() {
    this.getProjects();
  },

  methods: {
    getProjects() {
      axios.get('http://127.0.0.1:8000/api/projects').then(res => {
        console.log(res.data.results);
        this.projects = res.data.results;
        console.log(this.projects);
      })
    }
  }

}

</script>

<template>
  <h1>Projects</h1>
  <table>
    <thead>
      <th>Title</th>
      <th>Desc</th>
    </thead>
    <tbody>
      <tr v-for="project in projects">
        <td> {{ project.title }}</td>
        <td> {{ project.description }} </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>

</style>
