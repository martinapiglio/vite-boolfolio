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
        //variables for spinner/loading/not found 
        apiSuccess: false,
        isLoading: true,
    }
  },

  mounted() {
    this.projectSlug = this.$route.params.slug;
    this.getProjects();
  },

  methods: {
    getProjects() {
      axios.get(this.store.baseURL + 
                this.store.APIroute + 
                '/' + this.projectSlug).then(res => {
        
        //data is received and page is no longer loading
        this.isLoading = false;
        this.apiSuccess= res.data.success;
        this.project = res.data.project;
        
        //change page title
        document.title = 'MP Portfolio - ' + this.project.title;
      })
    },
  }

}

</script>

<template>
      
    <section id="single-project-container" :class="store.isActive == true ? 'dark-mode' : ''">
      <!-- if variable isLoading == true then show a loading spinner -->
      <div v-if="isLoading" class="text-center py-5">

        <div class="spinner-border" role="status"></div>
        <div class="text-light pt-3">Loading...</div>

      </div>

      <!-- otherwise, if variable isLoading == false, show the projects section -->
      <div v-else>
        <!-- if selected project is found -->
        <div v-if="apiSuccess">

          <h3>{{ project.title }}</h3>
          <h4>
              {{ project.type ? project.type.title : 'No type' }}
          </h4>
          <div class="technologies">
              <span v-for="technology in project.technologies" class="badge rounded-pill" :style="{backgroundColor: technology.color}">{{ technology.name }}</span>
          </div>
          <p> {{ project.description }} </p>
        
        </div>
        <!-- otherwise if the project does not exist  -->
        <div v-else>
          No projects found in this category.
        </div>

      </div>

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
