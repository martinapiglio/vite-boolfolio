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
                name: 'Css',
                icon: 'fa-sass'
            },
            {
                name: 'Javascript',
                icon: 'fa-square-js'
            },
            {
                name: 'Vue',
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

#about-me {
    color: rgb(190, 190, 190);
    height: 100%;
    padding: 7rem 5rem 3rem;
    @include flex(row, nowrap, space-between, center, center);

    #about-me-left {
        width: 75%;
        
        #title {
            opacity: 0;
            animation: fadein 2s forwards;
        }
        
        .sub-title {
            opacity: 0;
            animation: fadein 2s forwards;
            animation-delay: .7s;
        }
        
        #description {
            padding: 2rem 0 0;
            opacity: 0;
            animation: fadein 2s forwards;
            animation-delay: 1.4s;
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
        animation-delay: 1.4s;

        h4 {
            color: $maya;
            padding-bottom: 1.5rem;
        }

        ul {
            @include flex(row, wrap, flex-start, center, center);
            gap: 2rem;
            padding: 0;
            li i {
                font-size: 3rem;
            }
        }

        #cv {
            padding-top: 2.5rem;
        }
    }

    background-color:rgba(0,0,0);
  -webkit-transition: background-color .3s linear;
    -ms-transition: background-color .3s linear;
    transition: background-color .3s linear;
  will-change: background-color;
}








</style>