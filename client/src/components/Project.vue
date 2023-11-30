<template>
        <section id="project" class="project">
                <div class="project-content" :style="{ width: contentWidth, height: contentHeight }" ref="projectContent">
                        <div class="project-content-container">
                                <h2 class="project-content__title">Selected Project</h2>
                        
                                <div id="cardJolyBell" class="project-content__grid" style="translate: none; rotate: none; scale: none; transform: translate(0px, 0px);" >
                                        <a class="project-content__grid-block" href="/project/joly-bell">

                                                <img ref="imageEffectRotate" id="craft-blue" class="project-content__grid-block__image" src="/img/craft-blue.webp" alt="craft-blue" style="translate: none; rotate: none; scale: none;">
                                                <div class="project-content__grid-block__background"></div>
                                        </a>

                                        <div class="project-content__grid-info">
                                                <div>
                                                        <a class="project-content__grid-info__title" href="/">JolyBell.copy E-Commerce Platform</a>
                                                        
                                                        <p class="project-content__grid-info__description">It is a full e-commerce developed using Vue.js (version 3) for frontend and Express.js for backend. The project provides a user interface for online shopping with integrated Liqpay payment system</p>
                                                        <div class="project-content__grid-info__skills">
                                                                <span class="project-content__grid-info__skills-item">Vue3</span>
                                                                <span class="project-content__grid-info__skills-item">Pinia</span>
                                                                <span class="project-content__grid-info__skills-item">Sass</span>
                                                                <span class="project-content__grid-info__skills-item">Express.js</span>
                                                                <span class="project-content__grid-info__skills-item">Node.js</span>
                                                                <span class="project-content__grid-info__skills-item">MongoDb</span>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                                <div id="cardMicroserise" class="project-content__grid sd3423lsd" style="translate: none; rotate: none; scale: none; transform: translate(0px, 0px);">
                                        <a class="project-content__grid-block" >

                                                <img ref="imageEffectUp" id="microservice" class="project-content__grid-block__image" src="/img/microservice.webp" alt="microservice" style="translate: none; rotate: none; scale: none;">
                                                <div class="project-content__grid-block__background"></div>
                                        </a>

                                        <div class="project-content__grid-info">
                                                <div>
                                                        <a class="project-content__grid-info__title">Business Website</a>
                                                        
                                                        <p class="project-content__grid-info__description">Easy navigation, online ordering, secure payment, personalization, analytics. Efficiency in every click.</p>
                                                        <div class="project-content__grid-info__skills sdfe23">
                                                                <span class="project-content__grid-info__skills-item">PHP</span>
                                                                <span class="project-content__grid-info__skills-item">PHP</span>
                                                                <span class="project-content__grid-info__skills-item">PHP</span>
                                                                <span class="project-content__grid-info__skills-item">PHP</span>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                                <div id="cardWeb" class="project-content__grid" style="translate: none; rotate: none; scale: none; transform: translate(0px, 0px);">
                                        
                                        <img id="web3" ref="imageEffectParallaxOne" class="project-content__grid-special" src="/img/eth2.webp" alt="web" style="translate: none; rotate: none; scale: none;">
                                        <a class="project-content__grid-block" href="/project">
                                                
                                                <img ref="imageEffectParallaxTwo" id="special-web" class="project-content__grid-block-image" src="/img/eth.webp" alt="special-web"  style="translate: none; rotate: none; scale: none;">
                                                <div class="project-content__grid-block__background"></div>
                                        </a>
                                        
                                        <div class="project-content__grid-info">
                                                <div>
                                                        <a class="project-content__grid-info__title" href="/project">Web</a>
                                                        
                                                        <p class="project-content__grid-info__description">I delved into the world of Web by developing a variety of projects utilizing Front-end and Backend.</p>
                                                        <div class="project-content__grid-info__skills">
                                                                <span class="project-content__grid-info__skills-item">Html</span>
                                                                <span class="project-content__grid-info__skills-item">Css</span>
                                                                <span class="project-content__grid-info__skills-item">Sass</span>
                                                                <span class="project-content__grid-info__skills-item">Vue3</span>
                                                        </div>
                                                </div>
                                        </div>
                                </div>

                                <!-- extra project -->
                                <ExtraProject />
                        
                        </div>
                </div>
        </section>
</template>

<script setup> 
        import { ref, onMounted, onBeforeUnmount } from 'vue'
        import ExtraProject from '@/components/ExtraProject.vue';
        import gsap from "gsap";
        
        import api from '@/config/api';

        gsap.registerPlugin();

        const contentWidth = ref('90');
        const contentHeight = ref('');
        const imageEffectUp = ref('translate3d(0px, 110px, 0px)');

        const imageEffectRotate = ref(null);
        const imageEffectParallaxOne = ref(null);
        const imageEffectParallaxTwo = ref(null);

        const getAllProjectId = ref([]);

        const getAllProject = async () => {
                getAllProjectId.value = await api.getAllProject();
        }

        const handleScroll = () => {
                const scrollTop = window.screenY || document.documentElement.scrollTop;
                
                gsap.to(contentWidth, {
                        scrollTrigger: {
                                trigger: "#project",
                                start: "top center",
                                end: "bottom center",
                                scrub: -1,
                        },
                        duration: 0.5,
                        value: `${Math.min(100, 90 + scrollTop / 70)}%`,
                        ease: 'power2.out',
                });
        };

        const handleScrollEfectImage = () => {
                const scrollTop = window.scrollY || document.documentElement.scrollTop;
                const translateY = scrollTop * 0.1;
                const rotateDeg = scrollTop * 0.05;

                gsap.to(imageEffectUp.value, {
                        scrollTrigger: {
                                trigger: "#cardMicroserise", 
                                start: "top center", 
                                end: "bottom center", 
                                scrub: -0.2, 
                        },
                        duration: 0.5,
                        y: Math.max(-210, -translateY),
                        ease: 'power2.out'
                });

                gsap.to(imageEffectRotate.value, {
                        scrollTrigger: {
                                trigger: "#cardJolyBell", 
                                start: "top center", 
                                end: "bottom center", 
                                scrub: -0.2, 
                        },
                        duration: 0.5,
                        y: translateY / 5,
                        rotation: rotateDeg / 5,
                        ease: 'power2.out'
                });

                gsap.to(imageEffectParallaxOne.value, {
                        scrollTrigger: {
                                trigger: "#cardWeb", 
                                start: "top center", 
                                end: "bottom center", 
                                scrub: -0.2, 
                        },
                        duration: 0.5,
                        y: -translateY / 3,
                        ease: 'power2.out'
                });

                gsap.to(imageEffectParallaxTwo.value, {
                        scrollTrigger: {
                                trigger: "#cardWeb", 
                                start: "top center", 
                                end: "bottom center", 
                                scrub: -0.2, 
                        },
                        duration: 0.5,
                        y: translateY / 3,
                        ease: 'power2.out'
                });
        };

        onMounted( () => {
                window.addEventListener("scroll", handleScroll);
                window.addEventListener("scroll", handleScrollEfectImage);

                getAllProject()
        });

        onBeforeUnmount(() => {
                window.removeEventListener("scroll", handleScroll);
                window.removeEventListener("scroll", handleScrollEfectImage);

        });
</script>

<style lang="scss" scoped>
        .project {
                position: relative;
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
                align-items: center;

                &-content {
                        position: relative;
                        z-index: 10;
                        border-radius: 50px;
                        padding: 120px 0;
                        color: var(--dark-secondary);
                        background: var(--light);

                        @media only screen and (max-width: 576px) {
                                padding: 90px 0 70px;
                                border-radius: 20px;

                        }

                        &-container {
                                max-width: 1000px;
                                border-radius: 50px;
                                padding: 0 30px;
                                margin: 0 auto;
                                display: flex;
                                flex-direction: column;

                                @media only screen and (max-width: 576px) {
                                        padding: 0 15px;
                                }
                        }

                        &__title {
                                text-align: center;
                                font-size: 3.5rem;
                                line-height: 1.5em;

                                @media only screen and (max-width: 768px) {
                                        font-size: 2.6rem;
                                }

                                @media only screen and (max-width: 350px) {
                                        font-size: 9vw;
                                }
                        }

                        &__grid {
                                grid-template-columns: 50% 50%;
                                margin: 65px 0;
                                display: grid;

                                @media only screen and (max-width: 924px) {
                                        grid-template-columns: unset;
                                }

                                @media only screen and (max-width: 576px) {
                                        margin: 45px 0 20px;
                                }

                                #web3 {
                                        left: -30px;
                                        top: -50px;
                                        z-index: 1;
                                        position: absolute;
                                        height: 100%;

                                        @media only screen and (max-width: 924px) {
                                                width: 350px;
                                                height: 350px;
                                                left: 220px;
                                                top: 35px;
                                        }

                                        @media only screen and (max-width: 600px) {
                                                width: 350px;
                                                height: 350px;
                                                left: 0px;
                                                top: 35px;
                                        }
                                }

                                &-block {
                                        position: relative;
                                        overflow: hidden;
                                        width: 450px;
                                        background: var(--black);
                                        border-radius: 20px;

                                        @media only screen and (max-width: 1024px) {
                                                width: 100%;
                                                margin-bottom: 16px;
                                        }

                                        @media only screen and (max-width: 924px) {
                                                height: 350px;
                                        }

                                        &__background {
                                                height: 450px;
                                                width: 450px;
                                                border-radius: 20px;
                                        }

                                        &__image {
                                                position: absolute;
                                        }

                                        #craft-blue {
                                                width: 500px;
                                                height: 500px;
                                                right: -80px;

                                                @media only screen and (max-width: 924px) {
                                                        width: 400px;
                                                        height: 400px;
                                                }
                                        }

                                        
                                        #microservice {
                                                width: 550px;
                                                height: 550px;
                                                top: 160px;
                                                right: -30px;

                                                @media only screen and (max-width: 924px) {
                                                        width: 400px;
                                                        height: 400px;
                                                }
                                        }

                                        #special-web {
                                                width: 500px;
                                                height: 500px;
                                                z-index: 10;
                                                top: -80px;
                                                left: 20px;
                                                position: fixed;
                                                pointer-events: none;

                                                @media only screen and (max-width: 924px) {
                                                        width: 350px;
                                                        height: 350px;
                                                        top: -30px;
                                                        right: -25px;
                                                        left: inherit;
                                                }
                                        }

                                }

                                &-info {
                                        padding: 0 40px;
                                        display: flex;
                                        justify-self: center;
                                        align-items: center;
                                        text-align: left;


                                        @media only screen and (max-width: 924px) {
                                                padding: 0;
                                                width: 100%;
                                        }

                                        &__title {
                                                font-size: 2.2em;
                                                margin-bottom: 20px;
                                                line-height: 1em;
                                                display: block;

                                                @media only screen and (max-width: 768px) {
                                                        font-size: 1.8em;
                                                }

                                        }

                                        &__skills {

                                                margin-top: 30px;
                                                font-size: 12px;
                                                column-gap: 6px;
                                                flex-wrap: wrap;
                                                display: flex;

                                                &-item {
                                                        margin-bottom: 6px;
                                                        padding: 8px 12px;
                                                        border-radius: 30px;
                                                        color: var(--gray);
                                                        border: 1px solid var(--gray);
                                                        display: inline-flex;
                                                }
                                        }
                                }
                        }
                }
        }
</style>