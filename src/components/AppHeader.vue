<script>

</script>

<template>

    <header>
        <nav>
            <router-link :to="{name: 'projects-index'}" class="nav-links">projects</router-link>            
            <router-link :to="{name: 'home'}" class="nav-links" id="name">MARTINA PIGLIONICA</router-link> 
            <router-link :to="{name: 'about'}" class="nav-links">about</router-link>
        </nav>
    </header>

</template>

<style lang="scss" scoped>
@use './style/_variables.scss' as *;
@use './style/_mixins.scss' as *;

    header {
        position: fixed;
        top:0;
        width: 100%;
        padding: 2.2rem;
        background-color: transparent;
        
        nav {
            @include flex(row, wrap, space-between, center, center);
            font-size: 1.2rem;
            font-weight: bold;
            letter-spacing: 0.10em;

            #name {
                color: $indigo;
                font-size: 1.7rem;
                letter-spacing: 0.30em;
            }

            .nav-links:not(#name) {
                padding: .1em .7em;
                background: linear-gradient($maya 0 0) right / var(--p,0) no-repeat;
                transition: .4s, background-position 0s;

                &:hover {
                    color: white;
                    --p: 100%;
                    background-position: left;
                }
            }
        }

    }

</style>
