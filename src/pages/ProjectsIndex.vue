<script>
import {store} from '../store.js';
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';

export default {
  name: 'App',

  data() {
    return {
      store,

      //variable for type filter
      selectedType: '',

      //pagination variables
      currentPage: 1,
      lastPage: '',

      //variables for spinner/loading/not found 
      isLoading: true,
      projectsFound: false,
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
      axios.get(this.store.baseURL + 
                this.store.APIroute + 
                '?page=' + this.currentPage + 
                '&type_id=' + this.selectedType).then(res => {

        if(res.data.success) {

          this.projectsFound = true;
          this.isLoading = false;
          
          // projects
          this.store.projects = res.data.results.data;

          //last page for pagination
          this.lastPage = res.data.results.last_page;

          //types
          this.store.types = res.data.types;

        } else {

          this.isLoading = false;
          this.projectsFound = false;

        }       
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

    <main id="projects-container" :class="this.$route.path.includes('/projects') || this.$route.path.includes('/about') ? 'dark-mode' : ''">

      <!-- form select for types -->
      <form action="">
        <select class="form-select" name="type_id" id="type_id" v-model="selectedType" @change="getProjects()">
          <option value="" disabled>Please choose a project type</option>
          <option value="">All</option>
          <option v-for="singleType in store.types" :value="singleType.id">{{ singleType.title }}</option>
        </select>
      </form>

      <!-- if variable isLoading == true then show a loading spinner -->
      <div v-if="isLoading" id="loading-all">

        <div class="spinner-border" role="status"></div>
        <div class="text-light pt-3">Loading projects...</div>

      </div>
      <!-- otherwise, if variable isLoading == false, show the projects section -->
      <div v-else id="projects-section">

          <!-- if projects are found -->
          <div v-if="projectsFound">
      
            <div id="pagination-section">
                <button @click="prevPage()"><i class="fa-solid fa-chevron-left"></i></button>
                    <span class="px-2">Page: {{ this.currentPage }} of {{ this.lastPage }}</span>
                <button @click="nextPage()"><i class="fa-solid fa-chevron-right"></i></button>
            </div>      
          
            <div id="cards-container">
              <ProjectCard v-for="project in store.projects" :project="project"></ProjectCard>
            </div>
            
          </div>

          <!-- otherwise if there are no projects  -->
          <div v-else id="not-found-type">
              No projects found of this type, please try with another one.
          </div>

      </div>

    </main>

</template>

<style lang="scss" scoped>
@use '../components/style/_variables.scss' as *;
@use '../components/style/_mixins.scss' as *;

    #projects-container {
        padding: 7rem 5rem;
        width: 100%;

        select#type_id {
          margin-bottom: 2rem;
          background-color: black;
          color: $maya;
          border: 1px solid $penn;
        }

        #pagination-section {
          text-align: center;
          padding-bottom: 3rem;

          button {
            font-size: .8rem;
            padding: .4rem .8rem;
            margin: 0 .7rem;
            color: white;
            border: 1px solid $penn;
            border-radius: 20px;
            background-color: transparent;
            transition: all .3s;
          }

          button:hover {
            background-color: $penn;
          }
        }

        #loading-all,
        #not-found-type {
          text-align: center
        }

        #cards-container {
            @include flex(row, wrap, center, center, center);
            gap: 1.5rem;
        }
    }

</style>
