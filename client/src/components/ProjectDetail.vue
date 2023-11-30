<template>
        <div class="projectDetail">
                <header class="projectDetail-header">
                        <div class="projectDetail-header-top">
                                <a href="/" class="projectDetail-header-top__logo">
                                        <img src="/svg/logo.svg" alt="logo">
                                </a>
                                <div class="projectDetail-header-top__btn" @click="prevPage">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"></path>
                                        </svg>
                                </div>
                        </div>
                        <h1 class="projectDetail-header-title">JolyBell.copy E-Commerce Platform</h1>
                </header>

                <div class="projectDetail-content">
                        <div class="projectDetail-content-container">
                                <div class="projectDetail-content-grid">
                                        <div class="projectDetail-content-grid__info">
                                                <h2 id="about-ptoject">Project Description</h2>

                                                <p>Utilization of Vue.js 3 for a reactive and efficient user experience.", "Liqpay payment system for secure and convenient transactions.", "Frontend: Vue.js 3, Vuex for state management.</p>

                                                <h2 id="about-ptoject">Project Features</h2>

                                                <p>Intuitive user interface with an appealing design.", "Utilization of Vue.js 3 for a reactive and efficient user experience.</p>
                                                <p>Liqpay payment system for secure and convenient transactions.</p>
                                                <p>Frontend: Vue.js 3, Vuex for state management.</p>

                                                <h2 id="about-ptoject">Technologies Used</h2>

                                                <p>Backend: Express.js, RESTful API for frontend interaction.</p>
                                                <p>Integration of the Liqpay payment system: Liqpay API.</p>
                                                <p>Users can easily select products, add them to the cart, and securely complete transactions through Liqpay.</p>

                                                <h2 id="about-ptoject">Results</h2>

                                                <p>Administrative panel for managing product catalogs, orders, and the customer database.</p>
                                                <p>The project was developed in multiple stages, including requirements analysis, interface design, functional development, and thorough testing.</p>

                                                <img class="projectDetail-content-grid__image" src="/img/jolybell.jpg" alt="photo">
                                                <img class="projectDetail-content-grid__image" src="/img/jolybell-product.png" alt="photo">
                                                <img class="projectDetail-content-grid__image" src="/img/jolybell-product-white.png" alt="photo">
                                        </div>
                                </div>
                        </div>
                </div>

        </div>
</template>

<script setup>
        import { ref, onMounted  } from 'vue';
        import { useRoute, useRouter } from 'vue-router';

        const prevPage = () => {
                window.location.href = "/";
        }

</script>

<style lang="scss" scoped>
        .projectDetail {

                z-index: 102;
                position: relative;

                &-header {
                        max-width: 1260px;
                        padding: 0 30px;
                        margin: 0 auto;
                        display: flex;
                        flex-direction: column;

                        @media only screen and (min-width: 1400px) {
                                max-width: 1420px;
                        }

                        @media only screen and (max-width: 576px) {
                                padding: 0 15px;
                        }

                        &-top {

                                padding: 30px 0;
                                margin-top: 20px;
                                display: flex;
                                justify-content: space-between;
                                align-items: center;
                                position: relative;

                                @media only screen and (max-width: 768px) {
                                        padding: 0;
                                        margin-top: 0;
                                }

                                &__btn {
                                        border-radius: 10px;
                                        background: rgba(242, 247, 251, 8%);
                                        border: 1px solid rgba(242, 247, 251, .4);
                                        display: flex;
                                        padding: 10px;
                                        align-items: center;
                                        cursor: pointer;
                                }

                                &__logo {
                                        cursor: pointer;
                                        text-decoration: none;
                                        display: initial;
               
                                        @media only screen and (max-width: 768px) {
                                             margin: 30px 0 40px;
                                             width: 100%;
                                        }
               
                                        img {
                                             height: 100%;
               
                                             @media only screen and (max-width: 768px) {
                                                  width: 185px;
                                             }
                                        }
                                }

                        }

                        &-title {
                                max-width: 30ch;
                                margin: 0 auto;
                                text-align: center;
                                font-size: 4em;
                                padding: 40px 0 90px;
                                line-height: 1em;

                                @media only screen and (max-width: 992px) {
                                        font-size: 3em;
                                }
                        }
                }

                &-content {
                        background: var(--light);
                        color: var(--dark-secondary);
                        border-radius: 20px 20px 0 0;
                        padding: 50px 0 70px;

                        @media only screen and (max-width: 768px) {
                                border-radius: 12px 12px 0 0;
                                padding: 40px 0 0;
                        }

                        &-container {
                                max-width: 1260px;
                                min-height: 100svh;
                                padding: 0 30px 70px;
                                margin: 0 auto;
                                display: flex;
                                flex-direction: column;

                                @media only screen and (min-width: 1400px) {
                                        max-width: 1420px;
                                }

                                @media only screen and (max-width: 576px) {
                                        padding: 0 15px 40px;
                                }
                        }

                        &-grid {
                                display: grid;
                                grid-template-columns: repeat(8, 1fr);
                                grid-gap: 20px;
                                padding: 20px;

                                @media only screen and (max-width: 768px) {
                                        grid-gap: 12px;
                                        padding: 12px 12px 12px 0;
                                        display: flex;
                                        flex-direction: column;
                                        padding: 0;
                                }

                                &__info {
                                        grid-column: 2/7;

                                        @media only screen and (max-width: 992px) {
                                                grid: 2/8;
                                        }

                                        
                                        @media only screen and (max-width: 992px) {
                                                grid: 1/9;
                                                order: 2;
                                        }

                                        h2 {
                                                font-size: 2.4em;
                                                margin: 1.2em 0 0.4em;
                                        }

                                        p {
                                                margin-top: 20px;
                                        }
                                }

                                &__image {
                                        border: 2px solid var(--dark-secondary);
                                        width: 100%;
                                        object-fit: cover;
                                        margin-top: 10px;
                                }
                        }
                }
        }
</style>