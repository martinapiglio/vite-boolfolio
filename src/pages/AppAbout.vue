<script>
    export default {
    data(){
        return{
            languages: [
                {
                    name: 'Html',
                    icon: 'fa-brands fa-html5'
                },
                {
                    name: 'Css',
                    icon: 'fa-brands fa-css3'
                },
                {
                    name: 'Scss',
                    icon: 'fa-brands fa-sass'
                },
                {
                    name: 'Bootstrap',
                    icon: 'fa-brands fa-bootstrap'
                },
                {
                    name: 'JavaScript',
                    icon: 'fa-brands fa-square-js'
                },
                {
                    name: 'Vue / Vite',
                    icon: 'fa-brands fa-vuejs'
                },
                {
                    name: 'SQL',
                    icon: 'fa-solid fa-database'
                },
                {
                    name: 'Php',
                    icon: 'fa-brands fa-php'
                },
                {
                    name: 'Laravel',
                    icon: 'fa-brands fa-laravel'
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
            <h5 class="sub-title">Pronouns php/css. &#9996;</h5>
            <div id="description">
                <div class="desc-text" id="desc-1">
                    I'm based in Milan, Italy, and I'm 30 years old. <br>
                    I studied economics and finance and worked as a financial advisor for several years, but I've always had a soft spot for technology that I set aside for a long time...</div>
                <div class="desc-text" id="desc-2">Almost a year ago, I decided to give my life a turning point and start devoting myself to what I always wanted to do in life: coding! &#10024;</div>
                <div class="desc-text" id="desc-3">
                    What fascinates me the most about coding is being able to create something from scratch, starting from a simple blank screen, and seeing how, little by little and piece by piece, everything builds up and comes together like a puzzle!<br>
                    The best thing for me is feeling that I really created something concrete, stable, working, safe... and of course nice! <br>
                    I try to learn something new every day and to challenge myself by learning and trying to push my limits by doing better and better, and I hope to convey my passion to others through my works!
                </div>
            </div>
            
        </section>

        <section id="about-me-right">

            <h4>What I currently use:</h4>
            <ul>
                <li v-for="language in languages">
                    <i :class="language.icon"></i>
                    <div class="label"> {{ language.name }} </div>
                </li>
            </ul>

            <div id="cv">
                <a href="">Download my CV here!</a>
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
    padding: 7rem 5rem;
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
            animation-delay: 2s;
        }
        
        #description {
            padding: 2rem 0 0;

            .desc-text {
            font-size: 1.7rem;
        }
        }

        #desc-1 {
            opacity: 0;
            animation: fadein 2s forwards;
            animation-delay: 3.2s;
        }

        .desc-text:not(#desc-1) {
            opacity: 0;
            animation: fadein 2s forwards;
            animation-delay: 4.8s;
        }
        

        
    }

    #about-me-right {
        width: 25%;
        padding-left: 2rem; 
        opacity: 0;
        animation: fadein 2s forwards;
        animation-delay: 5s;

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