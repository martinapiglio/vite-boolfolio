<template>
    <section>
        homepage <br>
        LINKS:
        <router-link :to="{name: 'about'}">about</router-link> /
        <router-link :to="{name: 'projects-index'}">projects</router-link>
    </section>
</template>

<style lang="scss" scoped>

    section {
        padding: 7rem 5rem 5rem;
    }
</style>