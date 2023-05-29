<script>
import {store} from '../store.js';
import axios from 'axios';
import ProjectCard from './ProjectCard.vue';

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

    <main>

        <h1>My projects</h1>

        <div class="py-4">
            <button @click="prevPage()"><i class="fa-solid fa-chevron-left"></i></button>
                <span class="px-2">Page: {{ this.currentPage }} of {{ this.lastPage }}</span>
            <button @click="nextPage()"><i class="fa-solid fa-chevron-right"></i></button>
        </div>      
      
        <div id="cards-container">
          <ProjectCard v-for="project in store.projects" :project="project"></ProjectCard>
        </div>

    </main>

</template>

<style lang="scss" scoped>
@use './style/_variables.scss' as *;
@use './style/_mixins.scss' as *;

    main {
        width: 100%;
        height: calc(100vh - $header-height);
        padding: 3rem 4rem;
        overflow-y: auto;

        h1 {
            padding-bottom: 1.5rem;
        }

        #cards-container {
            @include flex(row, wrap, center, center, center);
            gap: 1.5rem;
        }
    }

</style>
