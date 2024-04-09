<template>
        <section class="hero" id="hero">
                <Header />

                <i class="back1"></i>
                <i class="back2"></i>

                <div class="hero-container">
                        <div class="hero-content">

                                <div class="hero-content-left">
                                        <h1 class="hero-content-left__title">I Build Scalable APIs & Web-Applications</h1>
                                        <p class="hero-content-left__description">16 year old (backend leaning) full stack web developer from Dnipro, The Ukrain. Most of my current experience is building customer-facing websites and transforming business operations.</p>
                                
                                        <div class="hero-content-left__btn">
                                                <Button type="link" href="#project" :color="colorLink || 'white'">My Project</Button>
                                                <a download="/public/pdf/Доценко Артур Юрийович.pdf">
                                                        <Button type="link">
                                                                Download resume

                                                                <div class="hero-content-left__btn-size">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                                        </svg>
                                                                </div>
                                                        </Button>
                                                </a>
                                        </div>
                                
                                </div>
                                <div id="hero-skills" class="hero-content-right">
                                        <div class="hero-content-right__block" id="skill-node">
                                                <div class="hero-content-right__block-logo">
                                                        <img  src="/svg/NodeJs.svg" alt="node">
                                                </div>
                                        </div>
                                        <div class="hero-content-right__block" id="skill-vue">
                                                <div class="hero-content-right__block-logo">
                                                        <img src="/svg/Vue3.svg" alt="vue">
                                                </div>
                                        </div>
                                        <div class="hero-content-right__block" id="skill-js" >
                                                <div class="hero-content-right__block-logo">
                                                        <svg class="skill-logo__image" width="100%" height="100%" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
                                                                <g transform="matrix(0.0649003,0,0,-0.0649003,-116.235,566.153)">
                                                                        <path d="M7840,5740C7462,5710 7145,5574 6909,5340C6666,5099 6550,4805 6550,4432C6550,3874 6779,3484 7290,3175C7420,3097 7597,3012 7903,2880C8320,2701 8475,2616 8574,2510C8696,2379 8730,2170 8653,2010C8638,1979 8599,1927 8564,1892C8446,1773 8260,1710 8029,1710C7639,1710 7348,1870 7114,2216C7082,2262 7053,2300 7049,2300C7040,2300 6279,1861 6263,1846C6253,1837 6261,1816 6300,1752C6604,1240 7079,940 7721,854C7889,831 8204,832 8365,854C8769,911 9072,1045 9307,1273C9557,1514 9680,1826 9680,2217C9680,2467 9639,2662 9546,2855C9482,2987 9418,3076 9308,3188C9097,3402 8824,3564 8279,3798C7867,3975 7729,4051 7638,4148C7551,4241 7514,4350 7522,4486C7529,4594 7559,4667 7625,4738C7720,4841 7830,4884 8000,4883C8193,4883 8318,4833 8445,4705C8490,4661 8548,4590 8575,4547C8606,4498 8629,4471 8637,4474C8663,4485 9390,4955 9390,4962C9390,4966 9353,5024 9308,5092C9212,5236 9039,5416 8920,5495C8700,5641 8465,5716 8155,5739C8003,5751 7983,5751 7840,5740Z" style="fill-rule:nonzero;"></path>
                                                                        <path d="M4727,3923L4724,2155L4702,2072C4673,1963 4639,1898 4579,1838C4495,1754 4387,1719 4207,1718C3950,1717 3796,1826 3617,2132C3588,2180 3562,2219 3559,2218C3555,2216 3374,2107 3157,1976L2762,1736L2792,1676C2971,1319 3281,1049 3654,925C4048,794 4554,806 4925,955C5370,1135 5631,1507 5700,2060C5706,2116 5710,2741 5710,3917L5710,5690L4731,5690L4727,3923Z" style="fill-rule:nonzero;"></path>
                                                                </g>
                                                        </svg>
                                                </div>
                                        </div>
                                        
                                        <div class="hero-content-right__magnetic" :id="`${element._id}`"  v-for="(element) in magneticItems" :key="element.id">
                                                <div class="hero-content-right__magnetic-block">
                                                        <img class="hero-content-right__magnetic-block_details" :src="element.svg" :alt="element.name">

                                                        <span class="hero-content-right__magnetic-title">
                                                                {{ element.name }}
                                                        </span>
                                                </div>
                                        </div>                  
                                </div>
                        </div>
                </div>
        </section>
</template>

<script setup>
        import { ref, onMounted } from 'vue';
        import Header from '@/components/layouts/Header.vue';
        import Button from '@/components/button/Button.vue';

        const props = defineProps({
                colorLink: String,
        });

        const magneticItems = ref([ 
                { _id: "skills-docker", svg: "/svg/docker.svg", name: "Docker"  },
                { _id: "skills-express", svg: "/svg/express-js-icon.svg", name: "Express.js"  },
                { _id: "skills-mongodb", svg: "/svg/mongodb.svg", name: "MongoDb"  },
                { _id: "skills-html", svg: "/svg/html.svg", name: "Html"  },
                { _id: "skills-css", svg: "/svg/css.svg", name: "Css"  },
                { _id: "skills-bootstrap", svg: "/svg/bootstrap.svg", name: "Bootstrap"  },
                { _id: "skills-sass", svg: "/svg/sass.svg", name: "Sass"  },
        ])

        onMounted(() => {
                const cards = document.querySelectorAll(".hero-content-right__block");
                const motionMatchMedia = window.matchMedia("(prefers-reduced-motion)");
                const THRESHOLD = 1;

                const handleHover = (e) => {
                        cards.forEach((card) => {
                                const { clientX, clientY } = e;
                                const { clientWidth, clientHeight, offsetLeft, offsetTop } = card;

                                const horizontal = (clientX - offsetLeft) / clientWidth;
                                const vertical = (clientY - offsetTop) / clientHeight;
                                const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
                                const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);

                                card.style.transform = `perspective(600px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;

                        });
                };

                const resetStyles = () => {
                        cards.forEach((card) => {
                                card.style.transform = `perspective(600px) rotateX(0deg) rotateY(0deg)`;
                        });
                };

                if (!motionMatchMedia.matches) {
                        document.body.addEventListener("mousemove", handleHover);
                        document.body.addEventListener("mouseleave", resetStyles);
                };
        });

</script>

<style lang="scss" scoped>
        .hero {

                min-height: 100svh;
                z-index: 2;
                position: relative;

                &-container {
                        flex-direction: column;
                        display: flex;
                        margin: 0 auto;
                        padding: 0 30px;
                        max-width: 1260px;

                        @media only screen and (min-width: 1400px) {
                                max-width: 1420px;
                        }

                        @media only screen and (max-width: 576px) {
                                padding: 0 15px;
                        }
                }

                &-content {
                        grid-template-columns: 60% auto;
                        display: grid;

                        @media only screen and (max-width: 992px) {
                                grid-template-columns: unset;
                        }

                        &-left {
                                display: flex;
                                flex-direction: column;
                                justify-content: center;
                                margin-bottom: 50px;

                                &__title {
                                        font-size: 6em;
                                        line-height: 1.05em;
                                        max-width: 16ch;

                                        @media only screen and (max-width: 1400px) {
                                                font-size: 5em;
                                        }

                                        @media only screen and (max-width: 768px) {
                                                font-size: 4.5em;
                                        }

                                        @media only screen and (max-width: 768px) {
                                                font-size: 8.5vw;
                                                max-width: none;
                                        }
                                }

                                &__description {
                                        color: var(--dimmed);
                                        line-height: 1.65em;
                                        margin: 32px 0 40px;
                                        display: block;
                                        font-size: 14px;
                                        max-width: 70ch;
                                }

                                &__btn {
                                        display: flex;
                                        align-items: center;
                                        gap: 15px;

                                        @media only screen and (max-width: 768px) {
                                                display: none;
                                        }

                                        &-size {
                                                padding: 6px;
                                                display: flex;
                                                border-radius: 20px;
                                                transition: 150ms;
                                                background: rgba(242,247,251,.15);
                                                margin-left: 15px;

                                                svg {
                                                        width: 21px;
                                                        height: 21px;
                                                }
                                        }
                                }
                        } 

                        &-right {
                                margin: 0 20px 0 40px;
                                height: 480px;
                                display: flex;
                                flex-wrap: wrap;
                                position: relative;

                                @media only screen and (max-width: 1179px) {
                                        height: 340px;
                                }

                                @media only screen and (max-width: 992px) {
                                        width: 600px;
                                        margin: 0 auto 50px;
                                }

                                @media only screen and (max-width: 768px) {
                                        width: unset;
                                        height: 300px;
                                        margin: 0 0 20px;
                                }

                                &__magnetic {

                                        position: relative;

                                        &-block {

                                                width: 60px;
                                                height: 60px;
                                                border-radius: 10px;
                                                background: rgba(242,247,251,8%);
                                                border: 1px solid rgba(242,247,251,.25);
                                                transition: 200ms;
                                                display: flex;
                                                position: relative;
                                                justify-content: center;
                                                position: absolute;
                                                transition: all .3s ease;
                                                transform-style: preserve-3d;
                                                backface-visibility: hidden;
                                                align-items: center;

                                                @media only screen and (max-width: 1179px) {
                                                        width: 45px;
                                                        height: 45px;
                                                        border-radius: 8px;
                                                }
        
                                                &:hover {
                                                        width: 80px;
                                                        height: 80px;
                                                }

                                                &_details {
                                                        padding: 10px;
                                                        transition: 200ms;
                                                        fill: #f2f7fb;
                                                        color: #f2f7fb;
                                                        width: 100%;
                                                        height: 100%;

                                                        &:hover {
                                                                width: 26px;
                                                                height: 26px;
                                                                margin-bottom: 20px;
                                                                padding: 0;
                                                        }
                                                }
                                        }

                                        &-title {
                                                font-size: 12px;
                                                position: absolute;
                                                bottom: 8px;
                                                opacity: 0;
                                                transition: all .3s ease;

                                                &:hover {
                                                        opacity: 1;
                                                }
                                        }
                                }

                                &__block {
                                        width: 120px;
                                        height: 120px;
                                        border-radius: 20px;
                                        background: var(--white);
                                        position: absolute;

                                        @media only screen and (max-width: 1179px) {
                                                width: 70px;
                                                height: 70px;
                                                border-radius: 10px;
                                        }

                                        &-logo {
                                                width: 100%;
                                                height: 100%;
                                                padding: 15px;

                                                img {
                                                        width: 100%;
                                                        height: 100%;
                                                }

                                                svg {
                                                        width: 100%;
                                                        height: 100%;
                                                }
                                        }
                                        
                                }

                                #skill-node {
                                        left: 10%;
                                        top: 9%;
                                }

                                #skill-vue {
                                        right: 11%;
                                        bottom: 41%;
                                }

                                #skill-js {
                                        bottom: 5%;
                                        left: 25%;
                                }

                                #skills-docker {
                                        left: 43%;
                                        top: 0;
                                        position: absolute;
                                }

                                #skills-sass {
                                        top: 13%;
                                        right: 30%;
                                        position: absolute;
                                }

                                #skills-bootstrap {
                                        right: 53%;
                                        top: 20%;   
                                        position: absolute;
                                }

                                #skills-express {
                                        top: 50%;
                                        left: 40%;
                                        position: absolute;
                                }

                                #skills-mongodb {
                                        top: 40%;
                                        left: 16%;
                                        position: absolute;
                                }

                                #skills-html {
                                        bottom: 23%;
                                        left: 3%;
                                        position: absolute;
                                }
                                #skills-css {
                                        bottom: 23%;
                                        right: 32%;
                                        position: absolute;
                                }
                                #skills-sdfsdtyghdbm {
                                        bottom: 22%;
                                        right: 13%;
                                        position: absolute;
                                }
                        }
                }
        }

        .hero-content-right__magnetic-block:hover .hero-content-right__magnetic-title {
                opacity: 1;
        }

        .hero-content-right__magnetic-block:hover .hero-content-right__magnetic-block_details {
                width: 34px;
                height: 34px;
                margin-bottom: 20px;
                padding: 0;
        }
</style>