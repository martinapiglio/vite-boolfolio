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
    thumbnail() {
        if(this.project.thumbnail) {
          return this.store.baseURL + 'storage/' + this.project.thumbnail;
        } else {
          return 'https://www.schiffner.com/wp-content/themes/schiff-responsive/images/noimage.jpg';
        }
      }
  }

}

</script>

<template>

  <div class="project card">

    <img class="card-img-top" :src="thumbnail" alt="{{ project.title }} img">

    <div class="card-body">
        <h5 class="card-title">{{project.title}}</h5>
        <div class="card-text">{{ project.type ? project.type.title : 'Type unknown' }}</div>
        <span v-for="technology in project.technologies" :style="{backgroundColor : technology.color}" class="badge rounded-pill mx-1"> {{ technology.name }}</span>
        <button id="btn-details">
          <router-link :to="{name: 'projects-show', params: {slug: project.slug}}">click here to access this project details</router-link>
        </button>
    </div>

  </div>

</template>

<style lang="scss" scoped>
@use '../components/style/_variables.scss' as *;

  .project {
      width: calc(100% / 3 - 2rem / 3 * 2);
      border: 1px solid rgb(123, 123, 123);
      border-radius: 20px;
      color: rgb(190, 190, 190);
      background-color: transparent;
      overflow: hidden;
      transition: all .3s;

      img {
        height: 400px;
        object-fit: cover;
      }

      .card-title {
        font-size: 1.6rem;
      }

      .card-text {
        padding-bottom: .8rem;
      }

      .badge {
        font-size: 1rem;
      }

      #btn-details {
        display: block;
        font-size: .8rem;
        padding: .4rem .8rem;
        margin-top: 1rem;
        color: rgb(190, 190, 190);
        border: 1px solid $penn;
        border-radius: 20px;
        background-color: transparent;
        transition: all .3s;

          &:hover {
            background-color: $penn;
          }
      }

      &:hover{
          transform: scale(1.03);
          border-color: $maya;
          cursor: pointer;
      }
  }


</style>
