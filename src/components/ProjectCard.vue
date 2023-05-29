<script>
export default {
  name: 'ProjectCard',

  data() {
    return {

    }
  },

  props: {
    project: Object,
  },

}

</script>

<template>
  <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">{{project.title}}</h5>
    <p class="card-text">{{ project.description }}</p>
  </div>
</div>

</template>

<style lang="scss" scoped>

</style>
