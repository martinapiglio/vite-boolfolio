<script>
export default {
    data() {
        return {
            socials: [
                {
                    name: 'Linkedin',
                    link: 'https://www.linkedin.com/in/martina-piglionica-39494b138/',
                    icon: 'fa-brands fa-linkedin'
                },
                {
                    name: 'GitHub',
                    link: 'https://github.com/martinapiglio',
                    icon: 'fa-brands fa-github'
                },
                {
                    name: 'Gmail',
                    link: 'mailto:martina.piglio@gmail.com',
                    icon: 'fa-solid fa-envelope'
                }
            ]
        }
    }
}
</script>

<template>

    <footer>
        <ul>
            <li v-for="social in socials">
                <a :href="social.link">
                    <i :class="social.icon"></i>
                </a>
            </li>
        </ul>
    </footer>

</template>

<style lang="scss" scoped>
@use './style/_variables.scss' as *;
@use './style/_mixins.scss' as *;

footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 2.2rem;
    background-color: transparent;

    ul {
        
        @include flex(row, wrap, flex-start, center, center);
        gap: 4rem;

        li a i {
            font-size: 1.2rem;
        }
    }
}

    

</style>
