<script>
    export default {
  data(){
    return{
        languages: [
            {
                name: 'Html',
                icon: 'fa-html5'
            },
            {
                name: 'Css',
                icon: 'fa-css3'
            },
            {
                name: 'Scss',
                icon: 'fa-sass'
            },
            {
                name: 'JavaScript',
                icon: 'fa-square-js'
            },
            {
                name: 'Vue / Vite',
                icon: 'fa-vuejs'
            },
            {
                name: 'Php',
                icon: 'fa-php'
            },
            {
                name: 'Laravel',
                icon: 'fa-laravel'
            }            
        ]
    }
  }, 
}
</script>

<template>
    <section id="about-me">

        <section id="about-me-left">

            <h1 id="title">Hello!</h1>
            <h2 class="sub-title">Name's Martina.</h2>
            <h5 class="sub-title">Pronouns php/ccs.</h5>
            <div id="description">
                <div class="desc-text">Not a big talker, but fluent in Italian, English and Javascript.</div>
                <div class="desc-text">I don't have much space, so as the french say, let's go très vite.</div>
                <div class="desc-text">I like coding. &#10024;</div>
            </div>
            
        </section>

        <section id="about-me-right">

            <h4>Languages I know:</h4>
            <ul>
                <li v-for="language in languages">
                    <i class="fa-brands" :class="language.icon"></i>
                    <div class="label"> {{ language.name }} </div>
                </li>
            </ul>

            <div id="cv">
                Download my CV here!
            </div>

        </section>

    </section>
</template>

<style lang="scss" scoped>
@use '../components/style/_mixins.scss' as *;
@use '../components//style/_variables.scss' as *;

@keyframes fadein {
    0% {
    opacity: 0;
    transform: translateY(80%);
    }
    20% {
        opacity: 0;
    }
    50% {
        opacity: 1;
        transform: translateY(0%);
    }
    100% {
        opacity: 1;
        transform: translateY(0%);
    }
}

@keyframes bounce {
        0%, 100% {transform: translateY(0);}
        50% {transform: translateY(-.7rem);}
}

#about-me {
    color: rgb(190, 190, 190);
    height: 100%;
    padding: 0 5rem;
    @include flex(row, nowrap, space-between, center, center);

    #about-me-left {
        width: 75%;
        
        #title {
            opacity: 0;
            animation: fadein 2s forwards;
            animation-delay: 1s;
        }
        
        .sub-title {
            opacity: 0;
            animation: fadein 2s forwards;
            animation-delay: 1.8s;
        }
        
        #description {
            padding: 2rem 0 0;
            opacity: 0;
            animation: fadein 2s forwards;
            animation-delay: 2.2s;
        }
        
        .desc-text {
            font-size: 1.7rem;
        }
        
    }

    #about-me-right {
        width: 25%;
        padding-left: 2rem; 
        opacity: 0;
        animation: fadein 2s forwards;
        animation-delay: 2.6s;

        h4 {
            color: $maya;
            padding-bottom: 1.5rem;
        }

        ul {
            @include flex(row, wrap, flex-start, center, center);
            gap: 2rem;
            padding: 0;

            li {
                position: relative;

                i {
                    font-size: 3rem;
                    transition: all .2s;
    
                    &:hover {
                        cursor: pointer;
                        color: $maya;
                    }
                }

                .label {
                    position: absolute;
                    bottom: -1.8rem;
                    left: 0;
                    right: 0;
                    margin: 0 auto;
                    width: fit-content;
                    white-space: nowrap;
                    padding: 0 .4rem;
                    font-size: 1rem;
                    border-radius: 5px;
                    color: white;
                    background-color: $penn;
                    visibility: hidden;
                    opacity: 0;
                    transition: all .3s ease-out;

                    &::after {
                        content: '';
                        position: absolute;
                        left: 15%;
                        bottom: 100%;
                        width: 0;
                        height: 0;
                        border-left: 5px solid transparent;
                        border-right: 5px solid transparent;
                        border-bottom: 7px solid $penn;
                    }
                }

            }
            li:hover .label {
                visibility: visible;
                opacity: 1;
                transition: all .3s ease-in;
                animation: bounce .3s ease;
            }
        }

        #cv {
            padding-top: 2.5rem;
        }
    }

}








</style>