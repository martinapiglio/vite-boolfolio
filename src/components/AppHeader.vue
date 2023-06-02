<script>
import {store} from '../store.js';

export default {
    data(){
        return{
          store
        }
    }, 

    methods: {
        isActive() {
            this.store.isActive = true;
        },

        isNotActive() {
            this.store.isActive = false;
        }
    }
}

</script>

<template>

    <header>
        <nav>
            <router-link :to="{name: 'projects-index'}" class="nav-links" @click="isActive(), $emit('changeColor')" :class="store.isActive == true ? 'dark-mode' : ''">
                projects
            </router-link>            
            <router-link :to="{name: 'home'}" class="nav-links" id="name" @click="isNotActive(), $emit('changeColor')">
                MARTINA PIGLIONICA
            </router-link> 
            <router-link :to="{name: 'about'}" class="nav-links" @click="isActive(), $emit('changeColor')" :class="store.isActive == true ? 'dark-mode' : ''">
                about
            </router-link>
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
    z-index: 2;
    
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
            transition: .7s, background-position 0s;

            &:hover {
                color: white;
                --p: 100%;
                background-position: left;
            }
        }

        .router-link-active:not(#name) {
            background-color: $maya;
            color: white;
        }
    }

}

</style>
