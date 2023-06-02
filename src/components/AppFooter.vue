<script>
import {store} from '../store.js';

export default {
    data() {
        return {
            store,
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
                    link: 'mailto:' + store.mail,
                    icon: 'fa-solid fa-envelope'
                }
            ]
        }
    },

    methods: {
        copyEmailToClipBoard() {
            //get href^mailto and copy the email to clipboard
            let mailToAnchor = document.getElementById('mail-to');
            let href = mailToAnchor.getAttribute('href');
            let email = href.replace('mailto:', '');
            navigator.clipboard.writeText(email);

            //append message
            let messageSuccess = document.getElementById('email-copied');
            messageSuccess.style.opacity = 1;

            setTimeout(function() {
                messageSuccess.style.opacity = 0;
            }, 3000); 
	    }

    }
}

</script>

<template>

    <footer>
        <ul>
            <li v-for="social in socials">
                <a 
                    :href="social.link" 
                    :class="store.isActive == true ? 'dark-mode' : ''" 
                    :id="social.link == 'mailto:' + store.mail ? 'mail-to' : ''"
                    @click="social.link == 'mailto:' + store.mail ? copyEmailToClipBoard() : ''"
                    >
                        <i :class="social.icon" class="icons"></i>

                        <span v-if="social.link == 'mailto:' + store.mail" id="email-copied">Email address copied to clipboard</span>
                </a>
            </li>
        </ul>
    </footer>

</template>

<style lang="scss" scoped>
@use './style/_variables.scss' as *;
@use './style/_mixins.scss' as *;

@keyframes bounce {
        0%, 100% {transform: translateY(0);}
        50% {transform: translateY(-.7rem);}
}

footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 2.2rem;
    background-color: transparent;

    ul {
        
        @include flex(row, wrap, flex-start, center, center);
        gap: 4rem;

        li a {
            transition: all 1s;
            
            i {
                font-size: 1.2rem;
            }

            #email-copied {
                // display: none;
                opacity: 0;
                position: relative;
                margin: 0 .8rem;
                width: fit-content;
                white-space: nowrap;
                padding: .2rem .6rem;
                font-size: 1rem;
                border-radius: 5px;
                color: white;
                background-color: $penn;
                transition: opacity .3s ease-out;
            }

        }
        
    }
}

.ciao {
    opacity: 1;
}
</style>
